import { Link } from 'react-router-dom';

const Games = () => {
    const games = [
        {
            id: 'arithmetic',
            title: 'Arifmetika',
            desc: 'Matematik amallarni tezkor yeching',
            icon: '🧮',
            color: 'bg-blue-500',
            link: '/games/arithmetic'
        },
        {
            id: 'memory',
            title: 'Xotira',
            desc: 'Juftliklarni toping va xotirani charxlang',
            icon: '🧠',
            color: 'bg-indigo-500',
            link: '/games/memory'
        },
        {
            id: 'true-false',
            title: 'To\'g\'ri/Noto\'g\'ri',
            desc: 'Faktlarni tezkorlik bilan tekshiring',
            icon: '✅',
            color: 'bg-green-500',
            link: '/games/true-false'
        },
        {
            id: 'word',
            title: 'So\'z Yig\'ish',
            desc: 'Harflardan so\'zlar yasang',
            icon: '🔠',
            color: 'bg-amber-500',
            link: '/games/word'
        }
    ];

    return (
        <div className="max-w-[1366px] mx-auto px-10 py-16">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-[3rem] font-black text-brand-dark mb-4">Bilimingizni sinab ko'ring</h1>
                <p className="text-brand-muted font-bold text-xl">O'yinlar orqali o'rganish yanada qiziqarli!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {games.map((game, idx) => (
                    <Link
                        key={game.id}
                        to={game.link}
                        style={{ animationDelay: `${idx * 100}ms` }}
                        className="group bg-white p-10 rounded-[40px] shadow-brand border border-slate-100 hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center animate-in zoom-in-95"
                    >
                        <div className={`w-[100px] h-[100px] ${game.color} rounded-[32px] flex items-center justify-center text-5xl mb-10 shadow-lg shadow-inherit/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            {game.icon}
                        </div>
                        <h2 className="text-2xl font-black text-brand-dark mb-4">{game.title}</h2>
                        <p className="text-brand-muted font-bold leading-relaxed mb-10">{game.desc}</p>

                        <div className="mt-auto inline-flex items-center text-brand-blue font-black gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            O'ynash <span className="text-xl">→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Games;
