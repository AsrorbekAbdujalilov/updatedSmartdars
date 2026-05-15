import { Link } from 'react-router-dom';

const TestsDashboard = () => {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif" }}>
            {/* Background Decorations */}
            <div className="td-bg-decorations">
                <div className="td-blob td-blob-1"></div>
                <div className="td-blob td-blob-2"></div>
                <div className="td-blob td-blob-3"></div>
            </div>

            {/* Header */}
            <header className="td-header">
                <div className="td-header-left">
                    <div className="td-logo-icon"></div>
                    <div className="td-breadcrumb">
                        <Link to="/">Bosh sahifa</Link>
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#5f6368" />
                        </svg>
                        <span>Savollar yaratish</span>
                    </div>
                </div>
                <div className="td-header-right">
                    <button className="td-search-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#5f6368" />
                        </svg>
                        <span>Qidirish</span>
                    </button>
                    <Link to="/" className="td-profile-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff" />
                        </svg>
                        Bosh sahifa qaytish
                    </Link>
                </div>
            </header>

            <div className="td-layout">
                {/* Left Column */}
                <main className="td-main">
                    {/* Hero Card */}
                    <div className="td-hero-card">
                        <div className="td-hero-content">
                            <h1>Savollar yaratish</h1>
                            <p>Savollar tuzib, sinflaringiz uchun testlar yarating.</p>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                                <Link to="/quiz-maker" className="td-btn-create-large">
                                    <span>+</span> AI orqali test yaratish
                                </Link>
                                <Link to="/quiz-maker?manual=true" className="td-btn-create-large" style={{ background: '#e2e8f0', color: '#334155', border: '1px solid #cbd5e1' }}>
                                    <span>+</span> Qo'lda yaratish
                                </Link>
                            </div>
                        </div>
                        <div className="td-hero-illustration"></div>
                    </div>

                    {/* Tests Grid */}
                    <div className="td-cards-grid" id="tests-grid"></div>

                    <div className="td-empty-state" id="td-empty">
                        <h3>Sizda hozircha hech qanday test yo'q</h3>
                        <p>Yangi test yaratish tugmasini bosib, savollar tuzishni boshlang.</p>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="td-sidebar">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Link to="/quiz-maker" className="td-btn-create-block">
                            <span>+</span> AI orqali test yaratish
                        </Link>
                        <Link to="/quiz-maker?manual=true" className="td-btn-create-block" style={{ background: '#e2e8f0', color: '#334155', border: '1px solid #cbd5e1' }}>
                            <span>+</span> Qo'lda yaratish
                        </Link>
                    </div>

                    <div className="td-search-box">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#9aa0a6" />
                        </svg>
                        <input type="text" placeholder="Testlarni qidirish..." id="search-input" />
                    </div>

                    <div className="td-stats-card">
                        <h3>Mening testlarim</h3>
                        <div className="td-stat-row">
                            <span>Jami testlar:</span>
                            <strong id="stat-total-tests">0</strong>
                        </div>
                        <div className="td-stat-row">
                            <span>Jami savollar:</span>
                            <strong id="stat-total-questions">0</strong>
                        </div>
                        <div className="td-recent-list" id="recent-list"></div>
                    </div>
                </aside>
            </div>

            {/* Modal placeholder */}
        </div>
    );
};

export default TestsDashboard;
