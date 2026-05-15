import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div style={{ padding: 0, margin: 0, fontFamily: "'Google Sans', Roboto, sans-serif" }}>
            {/* Top Header */}
            <header className="sd-header">
                <div className="sd-header-left">
                    <button className="sd-icon-btn" id="sd-menu-btn">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>
                    <div className="sd-logo-wrap">
                        <Link to="/" className="sd-logo-link">
                            <span className="sd-logo-text">Smartdars.uz <span className="sd-badge">O'quvchi</span></span>
                        </Link>
                    </div>
                </div>

                <div className="sd-header-right">
                    <button className="sd-icon-btn" id="btn-join-class" title="Sinfga qo'shilish">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </button>
                    <div className="sd-profile" id="sd-profile-wrap">
                        {/* Placeholder avatar */}
                        <img src="https://ui-avatars.com/api/?name=Talaba&background=random" alt="Profile" id="sd-avatar" />
                    </div>
                </div>
            </header>

            <div className="sd-layout">
                {/* Sidebar */}
                <aside className="sd-sidebar" id="sd-sidebar">
                    <nav className="sd-nav">
                        <Link to="/" className="sd-nav-item">
                            <svg className="sd-nav-icon" focusable="false" viewBox="0 0 24 24">
                                <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path>
                            </svg>
                            Bosh sahifa
                        </Link>
                        <Link to="/dashboard" className="sd-nav-item active">
                            <svg className="sd-nav-icon" focusable="false" viewBox="0 0 24 24">
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path>
                            </svg>
                            Sinflarim
                        </Link>
                        <Link to="/calendar" className="sd-nav-item">
                            <svg className="sd-nav-icon" focusable="false" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                            </svg>
                            Taqvim
                        </Link>

                        <div className="sd-nav-divider"></div>

                        <div className="sd-nav-section-title">Qatnashayotgan sinflarim</div>
                        <div id="sd-enrolled-list"></div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="sd-main">
                    {/* Empty State Mock */}
                    <div className="sd-empty-state" id="sd-empty-state">
                        <img src="https://ssl.gstatic.com/classroom/empty_states_home.svg" alt="Empty" className="sd-empty-img" />
                        <h2>Hali hech qanday sinfga qo'shilmagansiz</h2>
                        <p>O'qituvchingizdan sinf kodini so'rang va sinfga qo'shilish uchun <strong>+</strong> tugmasini bosing</p>
                    </div>

                    {/* Grid */}
                    <div className="sd-grid" id="sd-grid">
                        {/* Placeholder for Dynamic Classes mapping */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StudentDashboard;
