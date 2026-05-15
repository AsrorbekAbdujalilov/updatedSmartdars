import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleMockLogin = () => {
        // Here we simulate getting a token from backend and redirecting
        localStorage.setItem('token', 'mock_jwt_token_for_student');
        navigate('/dashboard');
    };

    return (
        <div className="login-body" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="login-container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
                <div className="login-card" style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px' }}>

                    <div className="login-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <Link to="/" className="login-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#1e293b' }}>
                            <img src="/Raimlar/logo.png" alt="Logo" style={{ height: '40px' }} />
                            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Smartdars.uz</span>
                        </Link>
                        <h1 className="login-title" style={{ fontSize: '1.8rem', marginTop: '15px' }}>Kirish</h1>
                    </div>

                    <form id="login-form" className="login-form" autoComplete="off" noValidate>
                        <button type="button" onClick={handleMockLogin} className="btn-google-signin" style={{ width: '100%', padding: '14px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '12px', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '15px', cursor: 'pointer' }}>
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '24px' }} />
                            Google orqali kirish
                        </button>

                        <button type="button" onClick={handleMockLogin} className="btn-telegram-signin" style={{ width: '100%', padding: '14px', background: '#fff', border: '2px solid #e2e8f0', borderRadius: '12px', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{ width: '24px' }} />
                            Telegram orqali kirish
                        </button>
                    </form>

                    <div className="login-footer" style={{ marginTop: '30px', textAlign: 'center', color: '#64748b' }}>
                        <p>Akkauntingiz yo'qmi? <Link to="/" className="register-link" style={{ color: '#4F6AF6', fontWeight: 700, textDecoration: 'none' }}>Ro'yxatdan o'tish</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
