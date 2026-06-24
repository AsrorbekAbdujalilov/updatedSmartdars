import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

const CoinPurchase = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(10000); // Amount in UZS
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const coinsToReceive = Math.floor(amount / 100); // Example rate: 100 UZS = 1 Coin

    const handlePurchase = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!screenshot) return alert("Iltimos, to'lov skrinshotini yuklang!");

        setLoading(true);
        const formData = new FormData();
        formData.append('amount_uzs', amount.toString());
        formData.append('coins_requested', coinsToReceive.toString());
        formData.append('screenshot', screenshot);
        formData.append('id', `pay-${Date.now()}`);
        formData.append('email', 'user@example.com'); // This should come from user context or backend will handle it

        try {
            const res = await api.post('/api/payments/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate(`/payment-status/${res.data.id}`);
        } catch (error) {
            console.error(error);
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h1 className="text-2xl font-black text-slate-800 mb-6">Coin Xarid Qilish</h1>

                <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                    <p className="text-sm font-bold text-blue-600 mb-2 uppercase">To'lov Ma'lumotlari (Kartaga)</p>
                    <p className="text-lg font-black text-blue-900">8600 1234 5678 9012</p>
                    <p className="text-sm text-blue-500 font-bold mt-1">SAYDULLAYEV ASRORBEK</p>
                </div>

                <form onSubmit={handlePurchase} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">Summa (UZS)</label>
                        <input
                            type="number"
                            className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-black text-slate-800"
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                        />
                        <p className="text-xs text-amber-600 font-bold mt-2">Siz {coinsToReceive} coin olasiz</p>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-500 mb-2">To'lov skrinshoti</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full p-4 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 transition-colors"
                            onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                    >
                        {loading ? 'Yuborilmoqda...' : 'Tasdiqlashni Yuborish'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CoinPurchase;
