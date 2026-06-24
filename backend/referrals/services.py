from django.db import transaction
from django.contrib.auth import get_user_model
from payments.models import CoinTransaction

User = get_user_model()

ACTION_TYPES = {
    'REFERRAL_SIGNUP_BONUS': 'referral_signup_bonus',
    'REFERRAL_INVITER_BONUS': 'referral_inviter_bonus',
    'REFERRAL_FIRST_PAYMENT_BONUS': 'referral_first_payment_bonus',
}

def apply_referral(new_user_email, referral_code):
    """
    Apply referral code for a new user and grant signup bonuses.
    """
    if not referral_code:
        return {'ok': False, 'message': 'Kod kiritilmadi.'}

    with transaction.atomic():
        try:
            new_user = User.objects.get(email=new_user_email)
        except User.DoesNotExist:
            return {'ok': False, 'message': 'Foydalanuvchi topilmadi.'}

        if new_user.referred_by:
            return {'ok': False, 'message': 'Referal allaqachon qo\'llanilgan.'}

        try:
            inviter = User.objects.get(referral_code=referral_code.upper())
        except User.DoesNotExist:
            return {'ok': False, 'message': 'Referal kod topilmadi.'}

        if inviter.id == new_user.id:
            return {'ok': False, 'message': 'O\'z kodingizni ishlatib bo\'lmaydi.'}

        if inviter.referral_disabled:
            return {'ok': False, 'message': 'Bu referal kod o\'chirilgan.'}

        BONUS = 200

        # Update new user
        new_user.referred_by = str(inviter.id)
        new_user.coin_balance += BONUS
        new_user.save(update_fields=['referred_by', 'coin_balance'])

        CoinTransaction.objects.create(
            user=new_user,
            action_type=ACTION_TYPES['REFERRAL_SIGNUP_BONUS'],
            coin_change=BONUS,
            balance_after=new_user.coin_balance,
            note=f"Referal orqali ro'yxatdan o'tish bonusi ({inviter.full_name or inviter.email} taklifi)"
        )

        # Update inviter
        inviter.coin_balance += BONUS
        inviter.save(update_fields=['coin_balance'])

        CoinTransaction.objects.create(
            user=inviter,
            action_type=ACTION_TYPES['REFERRAL_INVITER_BONUS'],
            coin_change=BONUS,
            balance_after=inviter.coin_balance,
            note=f"{new_user.full_name or new_user.email} siz orqali ro'yxatdan o'tdi"
        )

        return {'ok': True, 'message': f"Referal muvaffaqiyatli! Siz va {inviter.full_name or inviter.email} +{BONUS} coin oldingiz."}


def grant_first_payment_bonus(payee_user_id, paid_amount):
    """
    Grant 10% first-payment referral bonus to the inviter.
    """
    with transaction.atomic():
        try:
            payee = User.objects.get(id=payee_user_id)
        except User.DoesNotExist:
            return 0

        if not payee.referred_by or payee.referral_first_payment_reward_given:
            return 0

        try:
            inviter = User.objects.get(id=payee.referred_by)
        except User.DoesNotExist:
            return 0

        if inviter.referral_disabled:
            return 0

        bonus_coins = max(1, round(paid_amount * 0.10))

        # Mark as given
        payee.referral_first_payment_reward_given = True
        payee.save(update_fields=['referral_first_payment_reward_given'])

        # Grant bonus
        inviter.coin_balance += bonus_coins
        inviter.save(update_fields=['coin_balance'])

        CoinTransaction.objects.create(
            user=inviter,
            action_type=ACTION_TYPES['REFERRAL_FIRST_PAYMENT_BONUS'],
            coin_change=bonus_coins,
            balance_after=inviter.coin_balance,
            note=f"{payee.full_name or payee.email} birinchi to'lovi ({paid_amount} so'm) — 10% referal bonus",
            ref_id=str(payee.id)
        )

        return bonus_coins
