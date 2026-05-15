import { Link } from 'react-router-dom';

const Classes = () => {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif" }} data-no-coin-badge="true">
            {/* Top Header */}
            <header className="cl-header">
                <div className="cl-header-left">
                    <button className="cl-icon-btn cl-hamburger" id="toggle-sidebar">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>
                    <div className="cl-logo-wrap">
                        <div className="cl-logo-icon"></div>
                        <span className="cl-logo-text">Sinflar</span>
                    </div>
                </div>

                <div className="cl-header-right">
                    <button className="cl-icon-btn" id="btn-add-class" title="Sinf qo'shish">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </button>
                    <div className="cl-profile">
                        <img src="https://ui-avatars.com/api/?name=Teacher&background=random" alt="Profile" id="cl-avatar" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </header>

            <div className="cl-layout">
                {/* Sidebar */}
                <aside className="cl-sidebar" id="cl-sidebar">
                    <nav className="cl-nav">
                        <Link to="/" className="cl-nav-item">
                            <svg className="cl-nav-icon" focusable="false" viewBox="0 0 24 24">
                                <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path>
                            </svg>
                            Bosh sahifa
                        </Link>
                        <Link to="/classes" className="cl-nav-item active">
                            <svg className="cl-nav-icon" focusable="false" viewBox="0 0 24 24">
                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path>
                            </svg>
                            Sinflarim
                        </Link>

                        <div className="cl-nav-divider"></div>

                        <div className="cl-nav-section-title">
                            <svg className="cl-nav-icon" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                            </svg>
                            Mening sinflarim
                            <svg className="cl-chevron" viewBox="0 0 24 24">
                                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                            </svg>
                        </div>

                        {/* Dynamic classes list */}
                        <div id="sidebar-classes-list"></div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="cl-main">
                    {/* Empty State */}
                    <div className="cl-empty-state" id="empty-state">
                        <svg className="cl-empty-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" stroke="#dadce0" strokeWidth="1.5" />
                            <path d="M12 8v8M8 12h8" stroke="#dadce0" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <h2>Hali sinf qo'shilmagan</h2>
                        <p>Yangi sinf yaratish uchun yuqoridagi <strong>+</strong> tugmasini bosing</p>
                    </div>

                    {/* Cards Grid */}
                    <div className="cl-grid" id="classes-grid"></div>
                </main>
            </div>

            {/* Modal placeholder (can be handled with React state later) */}
        </div>
    );
};

export default Classes;
