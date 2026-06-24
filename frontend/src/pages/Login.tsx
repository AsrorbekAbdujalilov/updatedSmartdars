import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/client';
import { setToken } from '../utils/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // In a real app, this would be a POST to /api/auth/token/
            // For now, let's simulate a successful login or use the real endpoint if it exists
            const response = await api.post('/api/auth/token/', {
                username: email, // SimpleJWT often uses 'username'
                password: password
            });

            setToken(response.data.access);
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Kirishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
            // Fallback for simulation if backend is not running
            if (email === 'admin@smartdars.uz' && password === 'admin') {
                setToken('mock_token');
                navigate('/dashboard');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
                <div>
                    <Link to="/" className="flex justify-center items-center gap-2">
                        <img className="h-12 w-auto" src="/Raimlar/logo.png" alt="SmartDars" />
                        <span className="text-2xl font-black text-slate-800">SmartDars</span>
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                        Hisobga kirish
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 text-red-700 text-sm">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email manzilingiz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Parol"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg shadow-blue-200"
                        >
                            {loading ? 'Kirilmoqda...' : 'Kirish'}
                        </button>
                    </div>
                </form>

                <div className="text-center space-y-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500">Yoki quyidagilar orqali</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                            <span className="text-sm font-semibold">Google</span>
                        </button>
                        <button className="flex items-center justify-center py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="h-5 w-5 mr-2" />
                            <span className="text-sm font-semibold">Telegram</span>
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-slate-600">
                    Akkauntingiz yo'qmi?{' '}
                    <Link to="/" className="font-bold text-blue-600 hover:text-blue-500">
                        Ro'yxatdan o'tish
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
