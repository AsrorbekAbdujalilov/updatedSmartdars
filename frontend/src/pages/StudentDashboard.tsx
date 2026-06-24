import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import { User } from '../types';

const StudentDashboard = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/users/me/')
            .then(res => {
                setUser(res.data);
            })
            .catch(() => {
                // If it fails, maybe the token is invalid
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-brand-bg">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
            </div>
        );
    }

    return (
        <div className="max-w-[1366px] mx-auto px-10 py-10">
            <header className="mb-12">
                <h1 className="text-[2.5rem] font-black text-brand-dark tracking-tight">
                    Xush kelibsiz, <span className="text-brand-blue">{user?.full_name || 'Talaba'}</span>! 👋
                </h1>
                <p className="text-brand-muted mt-2 font-bold text-lg">Bugungi darslarni boshlashga tayyormisiz?</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-12">
                {/* Stats Cards */}
                <div className="bg-white p-8 rounded-3xl shadow-brand border border-slate-100 hover:shadow-brand-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-black text-brand-muted uppercase tracking-widest">Hamyon</p>
                            <p className="text-[2rem] font-black text-brand-dark mt-1">{user?.coin_balance || 0} Coin</p>
                        </div>
                        <div className="bg-amber-100 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl">
                            🪙
                        </div>
                    </div>
                    <Link to="/coins" className="text-brand-blue font-bold mt-6 inline-block hover:underline">Coinlarni boshqarish &rarr;</Link>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-brand border border-slate-100 hover:shadow-brand-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-black text-brand-muted uppercase tracking-widest">Sinflar</p>
                            <p className="text-[2rem] font-black text-brand-dark mt-1">4 Faol</p>
                        </div>
                        <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl">
                            🏫
                        </div>
                    </div>
                    <Link to="/classes" className="text-brand-blue font-bold mt-6 inline-block hover:underline">Barcha sinflar &rarr;</Link>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-brand border border-slate-100 hover:shadow-brand-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-black text-brand-muted uppercase tracking-widest">Referral</p>
                            <p className="text-xl font-black text-brand-dark mt-2 truncate max-w-[150px]">{user?.referral_code || '---'}</p>
                        </div>
                        <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl">
                            🎁
                        </div>
                    </div>
                    <Link to="/referral" className="text-brand-blue font-bold mt-6 inline-block hover:underline">Do'stlarni taklif qilish &rarr;</Link>
                </div>
            </div>

            {/* AI Tools Promo Override */}
            <section className="bg-gradient-to-r from-brand-blue to-[#2C4BDE] rounded-[40px] p-12 text-white shadow-brand-lg mb-12 overflow-hidden relative group">
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-[2rem] font-black mb-4">AI yordamida tezroq o'rganing! 🚀</h2>
                    <p className="text-blue-100 mb-8 font-bold text-lg opacity-90">Darslarni tayyorlash va uy vazifalarini tekshirishni SmartDars AI platformasiga topshiring.</p>
                    <div className="flex flex-wrap gap-5">
                        <Link to="/quiz-maker" className="bg-white text-brand-blue px-10 py-4 rounded-pill font-black hover:bg-blue-50 transition-all shadow-xl shadow-black/10">Test yaratish</Link>
                        <Link to="/checker" className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-pill font-black hover:bg-white/30 transition-all">Homework Checker</Link>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px] group-hover:opacity-10 transition-opacity"></div>
            </section>
        </div>
    );
};

export default StudentDashboard;
