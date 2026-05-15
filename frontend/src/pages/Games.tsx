import { Link } from 'react-router-dom';

const Games = () => {
    return (
        <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: 0 }}>Darajali O'yinlar 🎮</h1>
                    <Link to="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>
                        &larr; Bosh sahifa
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {/* Game Card */}
                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ width: '100%', height: '160px', backgroundColor: '#e0f2fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', marginBottom: '20px' }}>
                            🧮
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Matematika Daho</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px', flex: 1 }}>Matematik misollarni tez ishlash orqali aql-zakovatingizni charxlang.</p>
                        <button style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>O'ynash</button>
                    </div>

                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ width: '100%', height: '160px', backgroundColor: '#fce7f3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', marginBottom: '20px' }}>
                            🌍
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>Geografik Sayyohat</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px', flex: 1 }}>Davlatlar va poytaxtlarni topish bo'yicha qiziqarli so'rovnoma.</p>
                        <button style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: '#ec4899', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>O'ynash</button>
                    </div>

                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ width: '100%', height: '160px', backgroundColor: '#fef3c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', marginBottom: '20px' }}>
                            🔤
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>So'z Topish</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px', flex: 1 }}>Berilgan harflardan mos so'zlarni tuzing va lug'at boyligingizni oshiring.</p>
                        <button style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: '#f59e0b', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}>O'ynash</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;
