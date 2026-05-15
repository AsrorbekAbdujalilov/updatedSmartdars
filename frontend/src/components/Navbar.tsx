import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="logo">
                        <img src="/Raimlar/logo.png" alt="Smartdars.uz Logo" style={{ height: '160px', marginRight: '10px', marginTop: '15px' }} />
                    </Link>
                </div>

                <div className="nav-center">
                    <div className="nav-links-pill">
                        <Link to="/" className="nav-link active">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>Bosh sahifa</span>
                        </Link>
                        <Link to="/classes" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            <span>Kurslar</span>
                        </Link>
                        <a href="#help" className="nav-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21h6"></path>
                                <path d="M12 21v-4"></path>
                                <path d="M9.5 13.522l-1.056-1.056a5.002 5.002 0 1 1 7.112 0l-1.056 1.056A2 2 0 0 0 14 14.929V17a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-2.071a2 2 0 0 0-.5-1.407z"></path>
                            </svg>
                            <span>Takliflar</span>
                        </a>
                    </div>
                </div>

                <div className="nav-right">
                    <div className="nav-lang" style={{ marginRight: '15px' }}>
                        <select id="lang-select" className="lang-select">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                    <div className="nav-auth-buttons" id="nav-auth-buttons">
                        <Link to="/login" className="btn-secondary-outline" id="btn-login">Kirish</Link>
                        <Link to="/login" className="btn-primary-blue" id="btn-register" style={{ marginLeft: '10px' }}>RO'YXATDAN O'TISH</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
