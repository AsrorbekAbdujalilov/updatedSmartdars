import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Arithmetic = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameActive, setGameActive] = useState(false);
    const [question, setQuestion] = useState({ a: 0, b: 0, op: '+', ans: 0 });
    const [userInput, setUserInput] = useState('');

    const generateQuestion = () => {
        const a = Math.floor(Math.random() * 20) + 1;
        const b = Math.floor(Math.random() * 20) + 1;
        const ops = ['+', '-', '*'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        let ans = 0;
        if (op === '+') ans = a + b;
        else if (op === '-') ans = a - b;
        else ans = a * b;
        setQuestion({ a, b, op, ans });
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(60);
        setGameActive(true);
        generateQuestion();
    };

    useEffect(() => {
        if (gameActive && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setGameActive(false);
        }
    }, [gameActive, timeLeft]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (parseInt(userInput) === question.ans) {
            setScore(score + 10);
            generateQuestion();
            setUserInput('');
        } else {
            setUserInput('');
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-black text-slate-800 mb-8">Arifmetika O'yini 🧮</h1>

            {!gameActive ? (
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                    {timeLeft === 0 && <h2 className="text-4xl font-black text-blue-600 mb-4">O'yin Tugadi!</h2>}
                    <p className="text-slate-500 font-bold mb-8 text-xl">
                        Sizning balingiz: <span className="text-slate-800">{score}</span>
                    </p>
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={startGame}
                            className="btn-brand-primary text-xl py-5"
                        >
                            {timeLeft === 0 ? 'Qaytadan Boshlash' : 'O\'yinni Boshlash'}
                        </button>
                    </div>
                    <Link to="/games" className="btn-brand-outline mt-6 inline-block">Orqaga</Link>
                </div>
            ) : (
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-2 bg-blue-600 transition-all duration-1000" style={{ width: `${(timeLeft / 60) * 100}%` }}></div>

                    <div className="flex justify-between items-center mb-12">
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vaqt</p>
                            <p className="text-2xl font-black text-slate-800">{timeLeft}s</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ball</p>
                            <p className="text-2xl font-black text-blue-600">{score}</p>
                        </div>
                    </div>

                    <div className="text-6xl font-black text-slate-800 mb-12">
                        {question.a} {question.op} {question.b} = ?
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            autoFocus
                            type="number"
                            className="w-full max-w-[200px] text-center p-5 text-4xl font-black bg-slate-50 rounded-2xl border-none focus:ring-4 focus:ring-blue-100 outline-none"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <button type="submit" className="hidden">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Arithmetic;
