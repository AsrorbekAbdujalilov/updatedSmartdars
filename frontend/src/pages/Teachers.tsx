import { Link } from 'react-router-dom';

const Teachers = () => {
    return (
        <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: 0 }}>Top O'qituvchilar 🌟</h1>
                    <Link to="/dashboard" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '600' }}>
                        &larr; Bosh sahifa
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {/* Teacher Card */}
                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#cbd5e1', margin: '0 auto 16px', overflow: 'hidden' }}>
                            <img src="https://ui-avatars.com/api/?name=Ali+Hasanov&background=random" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Avatar" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>Ali Hasanov</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>Matematika fan o'qituvchisi</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>45</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>O'quvchilar</div>
                            </div>
                            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' }}>4.9</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Reyting</div>
                            </div>
                        </div>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #3b82f6', backgroundColor: 'transparent', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Profilni ko'rish
                        </button>
                    </div>

                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#cbd5e1', margin: '0 auto 16px', overflow: 'hidden' }}>
                            <img src="https://ui-avatars.com/api/?name=Malika+Ahmad&background=random" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Avatar" />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>Malika Ahmad to'raqizi</h3>
                        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>Ingliz tili fan o'qituvchisi</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>120</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>O'quvchilar</div>
                            </div>
                            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' }}>5.0</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Reyting</div>
                            </div>
                        </div>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #3b82f6', backgroundColor: 'transparent', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Profilni ko'rish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
