import { Link } from 'react-router-dom';

const Coins = () => {
    return (
        <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: 0 }}>Mening Coinlarim 🪙</h1>
                    <Link to="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>
                        &larr; Bosh sahifa
                    </Link>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center', marginBottom: '32px', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.4)' }}>
                    <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '8px' }}>Jami balans</p>
                    <h2 style={{ fontSize: '48px', fontWeight: '900', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        1250 <span style={{ fontSize: '24px' }}>Coin</span>
                    </h2>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px' }}>Coin sotib olish</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'border 0.2s' }}>
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🪙</div>
                        <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#334155', margin: '0 0 8px 0' }}>100 Coin</h4>
                        <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 16px 0' }}>10,000 so'm</p>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Sotib olish</button>
                    </div>
                    <div style={{ border: '2px solid #3b82f6', borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#3b82f6', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '12px' }}>Mashhur</div>
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>💰</div>
                        <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#334155', margin: '0 0 8px 0' }}>500 Coin</h4>
                        <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 16px 0' }}>45,000 so'm</p>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Sotib olish</button>
                    </div>
                    <div style={{ border: '2px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'pointer', transition: 'border 0.2s' }}>
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>💎</div>
                        <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#334155', margin: '0 0 8px 0' }}>1000 Coin</h4>
                        <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 16px 0' }}>80,000 so'm</p>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Sotib olish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coins;
