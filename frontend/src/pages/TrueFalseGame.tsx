import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TrueFalseGame = () => {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const questions = [
        { q: "Yer quyosh atrofida aylanadi.", a: true },
        { q: "Suv 100 darajada qaynaydi.", a: true },
        { q: "O'zbekistonning poytaxti Samarqand.", a: false },
        { q: "Odam tanasida 206 ta suyak bor.", a: true },
        { q: "Oy Yerdan ko'ra kattaroq.", a: false },
    ];

    const currentQuestion = questions[questionIndex % questions.length];

    const initGame = () => {
        setScore(0);
        setQuestionIndex(0);
        setTimeLeft(10);
        setGameStarted(true);
        setGameOver(false);
        setFeedback(null);
    };

    const handleAnswer = (ans: boolean) => {
        if (feedback) return;

        if (ans === currentQuestion.a) {
            setScore(score + 10);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }

        setTimeout(() => {
            setFeedback(null);
            if (questionIndex + 1 < questions.length) {
                setQuestionIndex(questionIndex + 1);
                setTimeLeft(10);
            } else {
                setGameOver(true);
            }
        }, 1000);
    };

    useEffect(() => {
        if (gameStarted && !gameOver && !feedback && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !feedback) {
            handleAnswer(!currentQuestion.a); // Force wrong answer on timeout
        }
    }, [gameStarted, gameOver, feedback, timeLeft]);

    return (
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <Link to="/games" className="text-brand-muted font-bold hover:text-brand-blue transition-colors">← Chiqish</Link>
                <div className="flex gap-10">
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Savol</p>
                        <p className="text-2xl font-black text-brand-dark">{questionIndex + 1} / {questions.length}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Ball</p>
                        <p className="text-2xl font-black text-green-600">{score}</p>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center font-black text-brand-blue">
                    {timeLeft}
                </div>
            </div>

            {!gameStarted ? (
                <div className="bg-white p-20 rounded-[40px] shadow-xl border border-slate-100">
                    <div className="text-7xl mb-8">✅❌</div>
                    <h1 className="text-4xl font-black text-slate-800 mb-4">To'g'ri yoki Noto'g'ri</h1>
                    <p className="text-slate-400 font-bold mb-10">Tasdiqlarni tezkorlik bilan tekshiring!</p>
                    <button
                        onClick={initGame}
                        className="px-12 py-5 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-blue-700 transition-all"
                    >
                        Boshlash
                    </button>
                </div>
            ) : (
                <div className={`bg-white p-12 rounded-[40px] shadow-xl border-4 transition-all duration-300 ${feedback === 'correct' ? 'border-green-500 bg-green-50' : feedback === 'wrong' ? 'border-red-500 bg-red-50' : 'border-slate-50'}`}>
                    <h2 className="text-3xl font-black text-slate-800 mb-12 leading-relaxed">
                        {currentQuestion.q}
                    </h2>

                    <div className="flex gap-6">
                        <button
                            disabled={!!feedback}
                            onClick={() => handleAnswer(true)}
                            className="flex-1 py-6 bg-green-500 text-white rounded-3xl font-black text-2xl hover:bg-green-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-100"
                        >
                            To'g'ri
                        </button>
                        <button
                            disabled={!!feedback}
                            onClick={() => handleAnswer(false)}
                            className="flex-1 py-6 bg-red-500 text-white rounded-3xl font-black text-2xl hover:bg-red-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-100"
                        >
                            Noto'g'ri
                        </button>
                    </div>
                </div>
            )}

            {gameOver && (
                <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-12 rounded-[50px] shadow-2xl text-center max-w-sm w-full">
                        <div className="text-8xl mb-6">🎯</div>
                        <h2 className="text-4xl font-black text-slate-800 mb-4">Tamom!</h2>
                        <p className="text-slate-500 font-bold mb-8">Siz {score} ball to'pladingiz.</p>
                        <button
                            onClick={initGame}
                            className="w-full py-5 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-blue-700 transition-all"
                        >
                            Yana bir bor
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrueFalseGame;
