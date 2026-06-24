import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import { PaymentRequest } from '../types';

const PaymentStatus = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState<PaymentRequest | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/api/payments/${id}/`)
            .then(res => setPayment(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="text-center p-12 font-bold text-slate-400">Yuklanmoqda...</div>;

    if (!payment) return <div className="text-center p-12">To'lov topilmadi</div>;

    return (
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
            <div className={`text-6xl mb-6 ${payment.status === 'approved' ? 'text-green-500' : payment.status === 'rejected' ? 'text-red-500' : 'text-amber-500 animate-pulse'}`}>
                {payment.status === 'approved' ? '✅' : payment.status === 'rejected' ? '❌' : '⏳'}
            </div>
            <h1 className="text-3xl font-black text-slate-800 mb-2">To'lov Holati</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-10">
                {payment.status === 'approved' ? 'Tasdiqlandi' : payment.status === 'rejected' ? 'Rad Etildi' : 'Kutilmoqda'}
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-left space-y-4 mb-10">
                <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 font-bold text-sm">ID</span>
                    <span className="text-slate-800 font-black">#{payment.id.split('-').pop()}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 font-bold text-sm">SUMMA</span>
                    <span className="text-slate-800 font-black">{payment.amount_uzs} UZS</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 font-bold text-sm">COINLAR</span>
                    <span className="text-amber-600 font-black">🪙 {payment.coins_requested}</span>
                </div>
                {payment.admin_note && (
                    <div className="pt-2">
                        <span className="text-slate-400 font-bold text-sm block mb-1">ADMIN IZOHI</span>
                        <p className="bg-slate-50 p-3 rounded-xl text-slate-600 font-medium text-sm">{payment.admin_note}</p>
                    </div>
                )}
            </div>

            <Link to="/dashboard" className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-black hover:bg-slate-900 transition-all">
                Dashboardga Qaytish
            </Link>
        </div>
    );
};

export default PaymentStatus;
