import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import { Quiz } from '../types';

const TestTaker = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [finished, setFinished] = useState(false);
    const [results, setResults] = useState<{ score: number; total: number; correct: number } | null>(null);

    useEffect(() => {
        api.get(`/api/classes/quizzes/${id}/`)
            .then(res => setQuiz(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const handleSelectOption = (questionIndex: number, option: string) => {
        if (finished) return;
        setAnswers({ ...answers, [questionIndex]: option });
    };

    const handleSubmit = () => {
        if (!quiz) return;
        let correct = 0;
        quiz.questions.forEach((q, idx) => {
            if (answers[idx] === q.correct_answer) {
                correct++;
            }
        });

        const score = (correct / quiz.questions.length) * 100;
        setResults({ score, total: quiz.questions.length, correct });
        setFinished(true);
    };

    if (loading) return <div className="text-center p-20 font-black text-slate-400">Test yuklanmoqda...</div>;
    if (!quiz) return <div className="text-center p-20">Test topilmadi</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800">{quiz.title}</h1>
                        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{quiz.questions.length} ta savol</p>
                    </div>
                    {!finished && (
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                        >
                            Yakunlash
                        </button>
                    )}
                </div>

                <div className="space-y-6">
                    {quiz.questions.map((q, idx) => (
                        <div key={idx} className={`bg-white p-8 rounded-3xl shadow-sm border ${finished ? (answers[idx] === q.correct_answer ? 'border-green-200 bg-green-50/30' : 'border-red-200 bg-red-50/30') : 'border-slate-100'}`}>
                            <div className="flex justify-between mb-6">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Savol {idx + 1}</span>
                                {finished && (
                                    <span className={`text-xs font-black uppercase tracking-widest ${answers[idx] === q.correct_answer ? 'text-green-600' : 'text-red-600'}`}>
                                        {answers[idx] === q.correct_answer ? 'To\'g\'ri' : 'Xato'}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-8">{q.text}</h3>

                            <div className="grid grid-cols-1 gap-3">
                                {q.options.map((opt, optIdx) => (
                                    <button
                                        key={optIdx}
                                        disabled={finished}
                                        onClick={() => handleSelectOption(idx, opt)}
                                        className={`w-full p-4 rounded-2xl text-left font-bold transition-all border-2 ${finished
                                            ? (opt === q.correct_answer ? 'border-green-500 bg-green-50 text-green-700' : (opt === answers[idx] ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-100 text-slate-400'))
                                            : (answers[idx] === opt ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md' : 'border-slate-50 bg-slate-50 text-slate-600 hover:border-slate-200')
                                            }`}
                                    >
                                        <span className="inline-block w-8 h-8 rounded-lg bg-white border border-inherit flex items-center justify-center mr-3 text-sm">
                                            {String.fromCharCode(65 + optIdx)}
                                        </span>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {finished && results && (
                    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-sm w-full text-center animate-in zoom-in duration-300">
                            <div className="text-6xl mb-6">
                                {results.score >= 80 ? '🏆' : results.score >= 50 ? '🥈' : '💪'}
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 mb-2">Natijangiz</h2>
                            <p className="text-6xl font-black text-blue-600 mb-6">{Math.round(results.score)}%</p>

                            <div className="bg-slate-50 p-6 rounded-3xl mb-8 flex justify-between">
                                <div className="text-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">To'g'ri</p>
                                    <p className="text-xl font-black text-green-600">{results.correct}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Jami</p>
                                    <p className="text-xl font-black text-slate-800">{results.total}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => { setFinished(false); setAnswers({}); }}
                                    className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-all"
                                >
                                    Qayta topshirish
                                </button>
                                <Link
                                    to="/tests"
                                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                                >
                                    Dashboardga qaytish
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestTaker;
