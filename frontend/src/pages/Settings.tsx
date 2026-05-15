import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: 0 }}>Sozlamalar</h1>
                    <Link to="/dashboard" className="text-gray-500 hover:text-gray-700" style={{ textDecoration: 'none' }}>
                        &#10005; Yopish
                    </Link>
                </div>

                <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '24px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#334155', marginBottom: '16px' }}>Shaxsiy ma'lumotlar</h2>
                    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
                        <div>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', marginBottom: '8px' }}>Ism</label>
                            <input type="text" defaultValue="Salim" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', marginBottom: '8px' }}>Familiya</label>
                            <input type="text" defaultValue="Hasanov" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#334155', marginBottom: '16px' }}>Xabarnomalar</h2>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px', accentColor: '#3b82f6' }} />
                        <span style={{ color: '#475569', fontWeight: '500' }}>Email orqali yangiliklarni olish</span>
                    </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button style={{ padding: '12px 32px', borderRadius: '8px', border: 'none', backgroundColor: '#22c55e', color: 'white', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(34, 197, 94, 0.2)', fontSize: '16px' }}>
                        Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
