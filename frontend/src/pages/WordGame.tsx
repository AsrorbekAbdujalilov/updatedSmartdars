import { useState } from 'react';
import { Link } from 'react-router-dom';

const WordGame = () => {
    const [score, setScore] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [userWord, setUserWord] = useState<string[]>([]);
    const [pool, setPool] = useState<{ char: string; originalIndex: number; used: boolean }[]>([]);

    const words = ['MAKTAB', 'KITOB', 'OQITUVCHI', 'SINF', 'BILIM', 'DAFTAR'];

    const initWord = (index: number) => {
        const word = words[index % words.length];
        const chars = word.split('').sort(() => Math.random() - 0.5);
        setPool(chars.map((char, i) => ({ char, originalIndex: i, used: false })));
        setUserWord([]);
    };

    const initGame = () => {
        setScore(0);
        setWordIndex(0);
        setGameStarted(true);
        setGameOver(false);
        initWord(0);
    };

    const handleSelectChar = (poolIdx: number) => {
        if (pool[poolIdx].used) return;

        const newPool = [...pool];
        newPool[poolIdx].used = true;
        setPool(newPool);

        const newUserWord = [...userWord, newPool[poolIdx].char];
        setUserWord(newUserWord);

        const currentWord = words[wordIndex % words.length];
        if (newUserWord.length === currentWord.length) {
            if (newUserWord.join('') === currentWord) {
                setScore(score + 20);
                setTimeout(() => {
                    if (wordIndex + 1 < words.length) {
                        setWordIndex(wordIndex + 1);
                        initWord(wordIndex + 1);
                    } else {
                        setGameOver(true);
                    }
                }, 500);
            } else {
                // Wrong word
                setTimeout(() => {
                    setPool(pool.map(p => ({ ...p, used: false })));
                    setUserWord([]);
                }, 1000);
            }
        }
    };

    const handleRemoveChar = (wordIdx: number) => {
        // Simple strategy: clear all if user wants to fix, or just find the used char in pool and reset it.
        // For simplicity, let's just allow clearing or resetting the last char.
        const charToRemove = userWord[wordIdx];
        const newUserWord = userWord.filter((_, i) => i !== wordIdx);
        setUserWord(newUserWord);

        // Find the first used occurrence of this char in pool and reset it
        const newPool = [...pool];
        const poolItem = newPool.find(p => p.char === charToRemove && p.used);
        if (poolItem) poolItem.used = false;
        setPool(newPool);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <Link to="/games" className="text-brand-muted font-bold hover:text-brand-blue transition-colors">← Chiqish</Link>
                <div className="flex gap-10">
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">So'z</p>
                        <p className="text-2xl font-black text-brand-dark">{wordIndex + 1} / {words.length}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Ball</p>
                        <p className="text-2xl font-black text-indigo-600">{score}</p>
                    </div>
                </div>
                <button onClick={() => initWord(wordIndex)} className="text-xs font-black text-red-400 uppercase hover:text-red-500 transition-colors">Tozalash</button>
            </div>

            {!gameStarted ? (
                <div className="bg-white p-20 rounded-[40px] shadow-brand border border-slate-100">
                    <div className="text-7xl mb-8">🔠</div>
                    <h1 className="text-4xl font-black text-brand-dark mb-4">So'z Yig'ish</h1>
                    <p className="text-brand-muted font-bold mb-10">Harflardan to'g'ri so'zni yasang!</p>
                    <button
                        onClick={initGame}
                        className="btn-brand-primary text-xl py-5 from-indigo-600 to-blue-500 shadow-indigo-200"
                    >
                        Boshlash
                    </button>
                </div>
            ) : (
                <div className="space-y-12">
                    {/* Word Display Slots */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {Array.from({ length: words[wordIndex % words.length].length }).map((_, i) => (
                            <div
                                key={i}
                                onClick={() => userWord[i] && handleRemoveChar(i)}
                                className={`w-16 h-16 rounded-2xl border-4 flex items-center justify-center text-3xl font-black transition-all ${userWord[i] ? 'bg-indigo-600 border-indigo-700 text-white shadow-lg cursor-pointer' : 'bg-white border-slate-100 text-slate-200'}`}
                            >
                                {userWord[i] || ''}
                            </div>
                        ))}
                    </div>

                    {/* Letters Pool */}
                    <div className="flex flex-wrap justify-center gap-4 p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                        {pool.map((p, i) => (
                            <button
                                key={i}
                                disabled={p.used}
                                onClick={() => handleSelectChar(i)}
                                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black transition-all ${p.used ? 'opacity-0 scale-50 pointer-events-none' : 'bg-white text-slate-700 shadow-sm border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-1'}`}
                            >
                                {p.char}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {gameOver && (
                <div className="fixed inset-0 bg-indigo-900/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-12 rounded-[50px] shadow-2xl text-center max-w-sm w-full">
                        <div className="text-8xl mb-6">📚</div>
                        <h2 className="text-4xl font-black text-slate-800 mb-4">Ajoyib!</h2>
                        <p className="text-slate-500 font-bold mb-8">Siz barcha so'zlarni topdingiz va {score} ball to'pladingiz.</p>
                        <button
                            onClick={initGame}
                            className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl hover:bg-indigo-700 transition-all"
                        >
                            Qayta o'ynash
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WordGame;
