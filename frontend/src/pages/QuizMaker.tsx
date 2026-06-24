import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';

const QuizMaker = () => {
    const [topic, setTopic] = useState('');
    const [context, setContext] = useState('');
    const [count, setCount] = useState(10);
    const [loading, setLoading] = useState(false);
    const [quizContent, setQuizContent] = useState('');

    const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        setQuizContent('');

        try {
            // For real SSE streaming, we'd use native EventSource or fetch with reader,
            // but for this implementation we'll handle the response from the AI view
            const response = await api.post('/api/ai/generate-quiz/', {
                topic,
                context,
                num_questions: count
            });

            // Backend might return simple text or stream.
            // If we use axios, it handles the buffered response.
            setQuizContent(response.data);
        } catch (error) {
            console.error(error);
            alert("Xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-10">
                <Link to="/tests" className="p-3 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
                <h1 className="text-3xl font-black text-slate-800">Yangi test shakllantirish</h1>
            </div>

            <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">1. Test mavzusi</label>
                            <input
                                type="text"
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 font-bold"
                                placeholder="Masalan: O'zbekiston tarixi yoki Fotosintez..."
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">2. Qo'shimcha matn (ixtiyoriy)</label>
                            <p className="text-xs text-slate-400 mb-3 font-medium">Shu matn asosida test yaratiladi. Matn qanchalik aniq bo'lsa, test sifati shunchalik yuqori bo'ladi.</p>
                            <textarea
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 font-medium h-32"
                                placeholder="Mavzuga oid matnni shu yerga joylang..."
                                value={context}
                                onChange={(e) => setContext(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">3. Savollar soni</label>
                                <input
                                    type="number"
                                    className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 font-bold"
                                    min="1" max="50"
                                    value={count}
                                    onChange={(e) => setCount(parseInt(e.target.value))}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">4. Daraja</label>
                                <select className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 font-bold">
                                    <option>Oson</option>
                                    <option>O'rta</option>
                                    <option>Qiyin</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={handleGenerate}
                            disabled={loading || !topic}
                            className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl font-black text-lg hover:shadow-xl hover:shadow-blue-200 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Yaratilmoqda...' : 'Test Yaratish 🚀'}
                        </button>
                    </div>
                </div>

                {quizContent && (
                    <div className="bg-white p-8 rounded-3xl shadow-xl animate-in slide-in-from-bottom duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-slate-800">Yaratilgan Test</h2>
                            <button className="text-blue-600 font-bold text-sm hover:underline">PDF Yuklash</button>
                        </div>
                        <div className="prose prose-slate max-w-none whitespace-pre-wrap font-medium text-slate-700">
                            {quizContent}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizMaker;
