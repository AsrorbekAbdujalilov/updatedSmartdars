import { Link } from 'react-router-dom';

const Referral = () => {
    return (
        <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎁</div>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>Do'stni Taklif Qiling</h1>
                    <p style={{ color: '#64748b', fontSize: '18px' }}>Do'stlaringizni taklif qiling va bonus ballar oling!</p>
                </div>

                <div style={{ background: '#f1f5f9', borderRadius: '16px', padding: '24px', textAlign: 'center', marginBottom: '32px' }}>
                    <p style={{ color: '#475569', fontWeight: '600', marginBottom: '12px' }}>Sizning maxsus taklif havolangiz:</p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <input type="text" value="https://smartdars.uz/ref/salim123" readOnly style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', width: '300px', backgroundColor: 'white', color: '#334155', fontWeight: '500' }} />
                        <button style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)' }}>Nusxa olish</button>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>&larr; Bosh sahifaga qaytish</Link>
                </div>
            </div>
        </div>
    );
};

export default Referral;
