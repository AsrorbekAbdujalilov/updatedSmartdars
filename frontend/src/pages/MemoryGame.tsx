import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Card {
    id: number;
    content: string;
    isFlipped: boolean;
    isMatched: boolean;
}

const MemoryGame = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [matches, setMatches] = useState(0);
    const [moves, setMoves] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const icons = ['🧠', '🚀', '🌈', '🍦', '🎨', '🧩', '🎸', '🍎'];

    const initGame = () => {
        const deck: Card[] = [];
        const combined = [...icons, ...icons].sort(() => Math.random() - 0.5);

        combined.forEach((content, i) => {
            deck.push({ id: i, content, isFlipped: false, isMatched: false });
        });

        setCards(deck);
        setMatches(0);
        setMoves(0);
        setFlippedIndices([]);
        setGameStarted(true);
        setGameOver(false);
    };

    const handleFlip = (index: number) => {
        if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedIndices, index];
        setFlippedIndices(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(moves + 1);
            const [first, second] = newFlipped;
            if (newCards[first].content === newCards[second].content) {
                newCards[first].isMatched = true;
                newCards[second].isMatched = true;
                setCards(newCards);
                setMatches(matches + 1);
                setFlippedIndices([]);
                if (matches + 1 === icons.length) setGameOver(true);
            } else {
                setTimeout(() => {
                    newCards[first].isFlipped = false;
                    newCards[second].isFlipped = false;
                    setCards(newCards);
                    setFlippedIndices([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <Link to="/games" className="text-brand-muted font-bold hover:text-brand-blue transition-colors">← Chiqish</Link>
                <div className="flex gap-10">
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Urinishlar</p>
                        <p className="text-2xl font-black text-brand-dark">{moves}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Juftliklar</p>
                        <p className="text-2xl font-black text-brand-blue">{matches} / {icons.length}</p>
                    </div>
                </div>
                <button onClick={initGame} className="px-6 py-2.5 bg-blue-50 text-brand-blue rounded-pill font-bold hover:bg-blue-100 transition-colors">Yangilash</button>
            </div>

            {!gameStarted ? (
                <div className="bg-white p-20 rounded-[40px] shadow-brand border border-slate-100">
                    <div className="text-7xl mb-8 animate-bounce">🧠</div>
                    <h1 className="text-4xl font-black text-brand-dark mb-4">Xotira Jumbog'i</h1>
                    <p className="text-brand-muted font-bold mb-10">Barcha juftliklarni topishga harakat qiling!</p>
                    <button
                        onClick={initGame}
                        className="btn-brand-primary text-xl py-5"
                    >
                        Boshlash
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-4 max-w-[500px] mx-auto">
                    {cards.map((card, i) => (
                        <div
                            key={card.id}
                            onClick={() => handleFlip(i)}
                            className="aspect-square relative cursor-pointer"
                        >
                            <div className={`w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${card.isFlipped || card.isMatched ? '[transform:rotateY(180deg)]' : ''}`}>
                                {/* Front (Back of card) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg border-4 border-white [backface-visibility:hidden]">
                                    ❓
                                </div>
                                {/* Back (Face of card) */}
                                <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg border-4 border-blue-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    {card.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {gameOver && (
                <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-12 rounded-[50px] shadow-2xl text-center max-w-sm w-full animate-in zoom-in duration-500">
                        <div className="text-8xl mb-6">🏆</div>
                        <h2 className="text-4xl font-black text-slate-800 mb-4">G'alaba!</h2>
                        <p className="text-slate-500 font-bold mb-8">Siz barcha juftliklarni {moves} ta urinishda topdingiz.</p>
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

export default MemoryGame;
