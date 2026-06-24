import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import { CoinTransaction } from '../types';

const CoinHistory = () => {
    const [history, setHistory] = useState<CoinTransaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/users/me/coin-history/')
            .then(res => setHistory(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'purchase': return 'Xarid';
            case 'spend': return 'Sarflash';
            case 'admin_add': return 'Admin (qo\'shildi)';
            case 'referral_bonus': return 'Referral Bonus';
            default: return type;
        }
    };

    if (loading) return <div className="p-8 text-center font-bold text-slate-500">Yuklanmoqda...</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-black text-slate-800">Tarix</h1>
                <Link to="/coins" className="text-blue-600 font-bold hover:underline">Orqaga</Link>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Sana</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Turi</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Miqdor</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Tavsif</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {history.length > 0 ? history.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                                    {new Date(item.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.amount > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {getTypeLabel(item.type)}
                                    </span>
                                </td>
                                <td className={`px-6 py-4 font-black ${item.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.amount > 0 ? '+' : ''}{item.amount}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                    {item.description}
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-slate-400 font-bold italic">
                                    Hali operatsiyalar mavjud emas
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CoinHistory;
