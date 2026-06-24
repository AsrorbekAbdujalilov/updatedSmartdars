import { useState } from 'react';
import api from '../api/client';

const Checker = () => {
    const [studentWork, setStudentWork] = useState('');
    const [markScheme, setMarkScheme] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ grade: string; max_grade: string; feedback: string } | null>(null);

    const handleGrade = async () => {
        if (!studentWork) return;
        setLoading(true);
        try {
            const response = await api.post('/api/ai/grade-homework/', {
                student_work: studentWork,
                mark_scheme: markScheme
            });
            setResult(response.data);
        } catch (error) {
            console.error(error);
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-slate-800 mb-4">O'quvchi ishini AI bilan baholang</h1>
                <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                    BSB yoki CHSB ishlarini yuklang yoki matnni nusxalab joylang. SmartDars AI saniyalar ichida xolisona baho chiqaradi.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {/* Mark Scheme Input */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Baholash Mezoni</label>
                        <textarea
                            className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32"
                            placeholder="Mezonni kiriting (masalan: Har bir to'g'ri javob uchun 5 ball...)"
                            value={markScheme}
                            onChange={(e) => setMarkScheme(e.target.value)}
                        />
                    </div>

                    {/* Student Work Input */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">O'quvchi Ishi</label>
                        <textarea
                            className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-64"
                            placeholder="O'quvchi javoblarini shu yerga joylang..."
                            value={studentWork}
                            onChange={(e) => setStudentWork(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleGrade}
                        disabled={loading || !studentWork}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-lg hover:bg-blue-700 disabled:bg-slate-300 transition-all shadow-xl shadow-blue-100"
                    >
                        {loading ? 'Tekshirilmoqda...' : 'Baholashni Boshlash'}
                    </button>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50 min-h-[500px] flex flex-col">
                    <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Natijalar</h2>

                    {result ? (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <div>
                                    <p className="text-sm font-bold text-blue-600 uppercase">Olingan Ball</p>
                                    <div className="text-4xl font-black text-blue-900 mt-1">
                                        {result.grade} <span className="text-xl text-blue-400 font-bold">/ {result.max_grade}</span>
                                    </div>
                                </div>
                                <div className="text-4xl">🎯</div>
                            </div>

                            <div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">AI Fikr-mulohazasi</p>
                                <div className="bg-slate-50 p-6 rounded-2xl text-slate-700 leading-relaxed font-medium">
                                    {result.feedback}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-center opacity-50 px-12">
                            <div className="text-6xl mb-6">📝</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Hali baholanmagan</h3>
                            <p className="text-slate-500 text-sm">Chap tomondagi ma'lumotlarni to'ldiring va baholash tugmasini bosing.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checker;
