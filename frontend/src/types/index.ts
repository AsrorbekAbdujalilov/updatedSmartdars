// src/types/index.ts

export interface User {
    id: string;
    email: string;
    full_name: string;
    coin_balance: number;
    referral_code: string;
    referred_by?: string;
    created_at: string;
}

export interface CoinTransaction {
    id: string;
    type: 'purchase' | 'spend' | 'admin_add' | 'admin_subtract' | 'referral_bonus';
    amount: number;
    description: string;
    created_at: string;
}

export interface PaymentRequest {
    id: string;
    email: string;
    amount_uzs: number;
    coins_requested: number;
    status: 'pending' | 'approved' | 'rejected';
    admin_note: string;
    created_at: string;
}

export interface Class {
    id: string;
    data: Record<string, any>;
}

export interface Quiz {
    id: string;
    title: string;
    questions: Array<{
        text: string;
        options: string[];
        correct_answer: string;
    }>;
}

export interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    avatar: string;
}

export interface TeacherReward {
    id: number;
    email: string;
    full_name: string;
    coins_amount: number;
    status: 'pending' | 'approved' | 'rejected';
    month: number;
    year: number;
}

export interface ReferralStats {
    total_invited: number;
    total_bonus_earned: number;
    referral_code: string;
}

export interface AuthTokens {
    access: string;
    refresh: string;
}
