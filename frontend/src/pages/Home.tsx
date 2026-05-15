import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* ===== HERO SECTION ===== */}
            <section className="hero" id="home">
                <div className="hero-banner">
                    {/* Background Slider Slides */}
                    <div className="bg-slide slide-1"></div>
                    <div className="bg-slide slide-2"></div>
                    <div className="bg-slide slide-3"></div>
                    <div className="bg-slide slide-4"></div>

                    <div className="hero-text-overlay">
                        <h1 className="hero-title">
                            Smartdars<br />
                            platformasiga<br />
                            <span>Xush kelibsiz!</span>
                        </h1>

                        <p className="hero-subtitle">
                            Har bir dars – yangi imkoniyat
                        </p>

                        <div className="hero-actions">
                            <Link to="/login" className="btn-primary-blue">Boshlash</Link>
                            <button className="btn-secondary-outline">
                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', background: '#A0AABF', borderRadius: '50%', color: 'white', marginRight: '12px' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                                <span>Batafsil ma'lumot</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section className="services" id="services">
                <div className="section-header">
                    <h2 className="section-title">Nima uchun Smartdars.uz?</h2>
                </div>

                <div className="services-grid">
                    <Link to="/classes" className="service-card">
                        <div className="service-icon bg-purple">👨‍🏫</div>
                        <div className="service-content">
                            <h3>Sinf yaratish +</h3>
                            <p>O'z sinfingizni yarating va jarayonni qulay boshqaring.</p>
                        </div>
                    </Link>

                    <Link to="/tests" className="service-card">
                        <div className="service-icon bg-blue">📝</div>
                        <div className="service-content">
                            <h3>Savollar yaratish / Test tuzish</h3>
                            <p>Turli darajadagi test savollarini yarating va bilimlarni sinang.</p>
                        </div>
                    </Link>

                    <Link to="/checker" className="service-card">
                        <div className="service-icon bg-orange">✓</div>
                        <div className="service-content">
                            <h3>BSB va CHSB larni tekshirish</h3>
                            <p>Natijalarni avtomatik hisoblang va tezkor tekshiring.</p>
                        </div>
                    </Link>

                    <Link to="/slides-studio" className="service-card">
                        <div className="service-icon bg-pink">🖼️</div>
                        <div className="service-content">
                            <h3>Slaydlar yaratish</h3>
                            <p>Darslaringiz uchun qiziqarli va rang-barang slaydlar tayyorlang.</p>
                        </div>
                    </Link>

                    <Link to="/games" className="service-card">
                        <div className="service-icon bg-green">🎮</div>
                        <div className="service-content">
                            <h3>Qiziqarli o'yinlar yaratish</h3>
                            <p>O'quvchilarni jalb qilish uchun interaktiv o'yinlar yarating.</p>
                        </div>
                    </Link>

                    <a href="#" className="service-card">
                        <div className="service-icon bg-yellow">📚</div>
                        <div className="service-content">
                            <h3>Attestatsiyaga tayyorgarlik</h3>
                            <p>Muhim sinovlarga tizimli va ishonchli tayyorgarlik ko'ring.</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* ===== STATISTICS SECTION ===== */}
            <section className="stats-section">
                <div className="stat-item">
                    <div className="stat-number">200K+</div>
                    <div className="stat-label">O'quvchilar</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">O'qituvchilar</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">5K+</div>
                    <div className="stat-label">Sinflar</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">100K+</div>
                    <div className="stat-label">Testlar</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
