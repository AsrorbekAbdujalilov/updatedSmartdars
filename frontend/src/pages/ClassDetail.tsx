import { Link } from 'react-router-dom';

const ClassDetail = () => {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif" }}>
            {/* Header */}
            <header className="cl-header">
                <div className="cl-header-left">
                    <button className="cl-icon-btn cl-hamburger" id="toggle-sidebar">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>
                    <div className="cl-logo-wrap">
                        <div className="cl-logo-icon"></div>
                        <Link to="/classes" className="cl-logo-text" style={{ textDecoration: 'none', color: '#5f6368', cursor: 'pointer' }}>Sinflar</Link>
                        <svg className="cd-breadcrumb-arrow" viewBox="0 0 24 24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#5f6368" />
                        </svg>
                        <span className="cd-class-breadcrumb" id="cd-breadcrumb">Sinf nomi</span>
                    </div>
                </div>
                <div className="cl-header-right">
                    <div className="cl-profile" id="cl-profile-wrap">
                        <img src="https://ui-avatars.com/api/?name=Teacher&background=random" alt="Profile" id="cl-avatar" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </header>

            <div className="cl-layout">
                {/* Sidebar */}
                <aside className="cl-sidebar" id="cl-sidebar">
                    <nav className="cl-nav">
                        <Link to="/classes" className="cl-nav-item">
                            <svg className="cl-nav-icon" viewBox="0 0 24 24">
                                <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path>
                            </svg>
                            Bosh sahifa
                        </Link>
                        <div className="cl-nav-divider"></div>
                        <div className="cl-nav-section-title">
                            <svg className="cl-nav-icon" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                            </svg>
                            Mening sinflarim
                        </div>
                        <div id="sidebar-classes-list"></div>
                    </nav>
                </aside>

                {/* Main */}
                <main className="cl-main" style={{ padding: 0 }}>
                    {/* Tabs */}
                    <div className="cd-tabs">
                        <button className="cd-tab active" data-tab="stream">Lenta</button>
                        <button className="cd-tab" data-tab="tasks">Vazifalar</button>
                        <button className="cd-tab" data-tab="people">Foydalanuvchilar</button>
                        <button className="cd-tab" data-tab="grades">Baholar</button>
                    </div>

                    {/* Tab Content: Stream */}
                    <div className="cd-content" id="tab-stream">
                        {/* Banner */}
                        <div className="cd-banner" id="cd-banner">
                            <h1 className="cd-banner-title" id="cd-banner-title">Sinf Nomi</h1>
                            <p className="cd-banner-section" id="cd-banner-section">Bo'lim Nomi</p>
                        </div>

                        <div className="cd-stream-layout">
                            {/* Left sidebar info */}
                            <div className="cd-info-col">
                                <div className="cd-info-card">
                                    <h4>Sinf kodi</h4>
                                    <div className="cd-code-row">
                                        <span className="cd-code" id="cd-class-code">ABCDEF</span>
                                        <button className="cl-icon-btn cd-copy-btn" id="copy-code" title="Nusxa olish">
                                            <svg viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="#1a73e8" />
                                            </svg>
                                        </button>
                                        <button className="cl-icon-btn cd-copy-btn" id="btn-smartboard" title="Kattalashtirish (Smartboard)" style={{ marginLeft: '4px' }}>
                                            <svg viewBox="0 0 24 24" width="20" height="20">
                                                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="#1a73e8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="cd-info-card">
                                    <h4>Kelgusi vazifalar</h4>
                                    <p className="cd-muted">Hech narsa topshirish kerak emas</p>
                                    <a href="#" className="cd-link">Barchasini ko'rish</a>
                                </div>
                            </div>

                            {/* Stream / Feed */}
                            <div className="cd-feed-col">
                                {/* New Post */}
                                <div className="cd-new-post" id="new-post-trigger">
                                    <img src="https://ui-avatars.com/api/?name=Teacher&background=random" alt="" className="cd-post-avatar" id="cd-user-avatar" />
                                    <span className="cd-new-post-text">Sinfga e'lon yozing...</span>
                                </div>
                                {/* Posts list placeholder */}
                                <div id="cd-posts-list"></div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content: Tasks (hidden by default initially, managed by React state generally, simple static for now) */}
                    <div className="cd-content cd-tab-hidden" id="tab-tasks" style={{ display: 'none' }}>
                        <div className="cd-tasks-toolbar">
                            <button className="cd-btn-create-task" id="btn-create-task">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#fff" />
                                </svg>
                                Yaratish
                            </button>
                        </div>
                        <div className="cd-tasks-section">
                            <div className="cd-tasks-section-header">
                                <span>Barcha vazifalar</span>
                            </div>
                            <div className="cd-tasks-empty" id="tasks-empty">
                                <p>Hali vazifa qo'shilmagan</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default ClassDetail;
