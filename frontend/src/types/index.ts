export interface User {
    id: string;
    email: string;
    full_name: string;
    coin_balance: number;
    referral_code: string;
}

export interface PaymentRequest {
    id: string;
    email: string;
    amount_uzs: number;
    coins_requested: number;
    status: 'pending' | 'approved' | 'rejected';
}

export interface TeacherReward {
    email: string;
    full_name: string;
    coins_amount: number;
    status: 'pending' | 'approved' | 'rejected';
}
