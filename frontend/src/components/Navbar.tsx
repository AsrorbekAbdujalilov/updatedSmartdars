import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { removeToken, isAuthenticated } from '../utils/auth';
import api from '../api/client';
import { User } from '../types';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState<User | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            api.get('/api/users/me/')
                .then(res => setUser(res.data))
                .catch(() => { });
        }
    }, [location.pathname]);

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="h-[85px] bg-white border-b border-slate-100 sticky top-0 z-50 flex items-center">
            <div className="max-w-[1366px] mx-auto w-full px-10 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center h-full">
                        <img src="/Raimlar/logo.png" alt="Logo" className="h-40 mt-3 -ml-4" />
                        <span className="text-2xl font-black text-brand-dark tracking-tighter -ml-2">SmartDars</span>
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <div className="nav-pill-container">
                        <Link to="/" className={`nav-pill-link ${isActive('/') ? 'active' : ''}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Bosh sahifa
                        </Link>
                        <Link to="/courses" className={`nav-pill-link ${isActive('/courses') ? 'active' : ''}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            Kurslar
                        </Link>
                        <Link to="/help" className={`nav-pill-link ${isActive('/help') ? 'active' : ''}`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"></path><path d="M12 21v-4"></path><path d="M9.5 13.522l-1.056-1.056a5.002 5.002 0 1 1 7.112 0l-1.056 1.056A2 2 0 0 0 14 14.929V17a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-2.071a2 2 0 0 0-.5-1.407z"></path></svg>
                            Takliflar
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center mr-4">
                        <select className="bg-brand-bg border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-brand-dark outline-none cursor-pointer hover:border-brand-blue">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>

                    {isAuthenticated() ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex items-center gap-3 p-1.5 rounded-pill hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                            >
                                <div className="h-10 w-10 rounded-full border-2 border-slate-100 overflow-hidden flex items-center justify-center bg-blue-50">
                                    {user?.full_name ? user.full_name.charAt(0) : 'U'}
                                </div>
                                <span className="hidden md:block font-bold text-brand-dark text-[0.95rem]">{user?.full_name || 'Foydalanuvchi'}</span>
                                <svg className={`w-4 h-4 text-slate-400 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {isMenuOpen && (
                                <div className="absolute top-[calc(100%+10px)] right-0 w-[260px] bg-white rounded-2xl shadow-brand-dropdown border border-slate-50 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                                    <div className="px-5 py-4 flex items-center gap-4 border-b border-slate-50 mb-2">
                                        <div className="h-12 w-12 rounded-full border-2 border-blue-100 flex items-center justify-center bg-blue-50 text-blue-600 font-bold text-xl">
                                            {user?.full_name ? user.full_name.charAt(0) : 'U'}
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-brand-dark leading-tight">{user?.full_name}</p>
                                            <p className="text-[0.75rem] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-pill mt-1 inline-block uppercase">Talaba</p>
                                        </div>
                                    </div>
                                    <Link to="/referral" className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 font-bold text-brand-muted text-[0.95rem]">
                                        <span className="text-lg">🎁</span> Do'stni Taklif Qiling
                                    </Link>
                                    <Link to="/coins" className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 font-bold text-brand-muted text-[0.95rem]">
                                        <span className="text-lg">🪙</span> Hamyon
                                    </Link>
                                    <Link to="/settings" className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 font-bold text-brand-muted text-[0.95rem]">
                                        <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        Sozlamalar
                                    </Link>
                                    <hr className="my-2 border-slate-50" />
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 font-bold text-red-500 text-[0.95rem] transition-colors"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        Chiqish
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <Link to="/login" className="btn-brand-outline">Kirish</Link>
                            <Link to="/login" className="btn-brand-primary">RO'YXATDAN O'TISH</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
