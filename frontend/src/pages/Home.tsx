import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            title: 'Sinf yaratish +',
            desc: 'O\'z sinfingizni yarating va jarayonni qulay boshqaring.',
            icon: '👨‍🏫',
            color: 'bg-purple-100 text-purple-600',
            link: '/classes'
        },
        {
            title: 'Savollar yaratish / Test tuzish',
            desc: 'Turli darajadagi test savollarini yarating va bilimlarni sinang.',
            icon: '📝',
            color: 'bg-blue-100 text-blue-600',
            link: '/quiz-maker'
        },
        {
            title: 'BSB va CHSB larni tekshirish',
            desc: 'Natijalarni avtomatik hisoblang va tezkor tekshiring.',
            icon: '✓',
            color: 'bg-orange-100 text-orange-600',
            link: '/checker'
        },
        {
            title: 'Slaydlar yaratish',
            desc: 'Darslaringiz uchun qiziqarli va rang-barang slaydlar tayyorlang.',
            icon: '🖼️',
            color: 'bg-pink-100 text-pink-600',
            link: '/slides'
        },
        {
            title: 'Qiziqarli o\'yinlar yaratish',
            desc: 'O\'quvchilarni jalb qilish uchun interaktiv o\'yinlar yarating.',
            icon: '🎮',
            color: 'bg-green-100 text-green-600',
            link: '/games'
        },
        {
            title: 'Attestatsiyaga tayyorgarlik',
            desc: 'Muhim sinovlarga tizimli va ishonchli tayyorgarlik ko\'ring.',
            icon: '📚',
            color: 'bg-yellow-100 text-yellow-600',
            link: '#'
        }
    ];

    return (
        <div className="bg-brand-bg min-h-screen">
            {/* HERO SECTION */}
            <section className="py-[30px] flex justify-center">
                <div className="max-w-[1366px] w-full h-[480px] rounded-3xl relative shadow-brand-card overflow-hidden mx-10 bg-slate-200">
                    {/* Background Slider */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-cover bg-center animate-slide-fade opacity-0" style={{ backgroundImage: "url('/Raimlar/hero_bg_1.jpg')", animationDelay: '0s' }}></div>
                        <div className="absolute inset-0 bg-cover bg-center animate-slide-fade opacity-0" style={{ backgroundImage: "url('/Raimlar/hero_bg_2.jpg')", animationDelay: '5s' }}></div>
                        <div className="absolute inset-0 bg-cover bg-center animate-slide-fade opacity-0" style={{ backgroundImage: "url('/Raimlar/hero_bg_3.jpg')", animationDelay: '10s' }}></div>
                        <div className="absolute inset-0 bg-cover bg-center animate-slide-fade opacity-0" style={{ backgroundImage: "url('/Raimlar/hero_bg_4.jpg')", animationDelay: '15s' }}></div>
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-[600px] z-10 bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-brand-overlay border border-white/40 animate-in fade-in slide-in-from-left-8 duration-700">
                        <h1 className="text-[3.5rem] font-black text-brand-dark leading-[1.15] mb-4 tracking-tight">
                            Smartdars<br />
                            platformasiga<br />
                            <span className="text-brand-blue">Xush kelibsiz!</span>
                        </h1>
                        <p className="text-xl text-brand-muted mb-10 font-medium max-w-[80%]">
                            Har bir dars – yangi imkoniyat
                        </p>
                        <div className="flex gap-4 mb-8">
                            <Link to="/login" className="btn-brand-primary">Boshlash</Link>
                            <button className="btn-brand-outline group">
                                <span className="w-[30px] h-[30px] bg-[#A0AABF] rounded-full flex items-center justify-center text-white mr-3 group-hover:bg-brand-blue transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                                Batafsil ma'lumot
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-10">
                <div className="text-center mb-10">
                    <h2 className="text-[2.5rem] text-brand-dark">Nima uchun Smartdars.uz?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1286px] mx-auto px-10">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            to={service.link}
                            className="bg-white border border-slate-100 rounded-[20px] p-[30px] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-service-hover hover:border-indigo-200"
                        >
                            <div className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] ${service.color}`}>
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-xl text-brand-dark mb-2">{service.title}</h3>
                                <p className="text-brand-muted text-[0.95rem] leading-relaxed">{service.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="max-w-[1286px] mx-auto my-[60px] bg-gradient-to-br from-[#4F6AF6] to-[#2C4BDE] rounded-3xl p-[50px_40px] flex flex-wrap justify-around text-white shadow-brand-stats">
                <div className="text-center px-4">
                    <div className="text-[3.5rem] font-black leading-none mb-2">200K+</div>
                    <div className="text-[1.1rem] font-semibold opacity-90">O'quvchilar</div>
                </div>
                <div className="text-center px-4">
                    <div className="text-[3.5rem] font-black leading-none mb-2">10K+</div>
                    <div className="text-[1.1rem] font-semibold opacity-90">O'qituvchilar</div>
                </div>
                <div className="text-center px-4">
                    <div className="text-[3.5rem] font-black leading-none mb-2">5K+</div>
                    <div className="text-[1.1rem] font-semibold opacity-90">Sinflar</div>
                </div>
                <div className="text-center px-4">
                    <div className="text-[3.5rem] font-black leading-none mb-2">100K+</div>
                    <div className="text-[1.1rem] font-semibold opacity-90">Testlar</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
