import { Link } from 'react-router-dom';

const SlidesStudio = () => {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="h-full flex flex-col items-center justify-center px-4 overflow-y-auto" style={{ background: 'linear-gradient(160deg, #eef3fc 0%, #e8effd 50%, #f5f8ff 100%)', flex: 1 }}>
                <div className="max-w-2xl w-full py-12 flex flex-col items-center" style={{ margin: 'auto' }}>
                    {/* Brand */}
                    <div className="flex items-center gap-3 mb-8" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'linear-gradient(to bottom right, #2563eb, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)' }}>
                            <span style={{ color: 'white', fontWeight: 'bold' }}>SD</span>
                        </div>
                        <span style={{ fontSize: '24px', fontWeight: '900', color: '#1e293b' }}>SmartDars Studio</span>
                    </div>

                    {/* Heading */}
                    <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#1e293b', marginBottom: '8px', textAlign: 'center', letterSpacing: '-1px' }}>Yaratish</h1>
                    <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px', fontSize: '18px' }}>AI yordamida dars taqdimotini yarating</p>

                    {/* Main Card */}
                    <div style={{ width: '100%', background: 'white', borderRadius: '24px', border: '1px solid #f1f5f9', padding: '32px', position: 'relative', overflow: 'hidden', fontStyle: 'normal', boxShadow: '0 20px 40px -15px rgba(37,99,235,0.1)' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #3b82f6, #818cf8, #a855f7)', borderRadius: '24px 24px 0 0' }}></div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Slaydlar</label>
                                <input type="number" defaultValue="10" min="3" max="30" style={{ width: '100%', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', fontWeight: 'bold', color: '#334155', outline: 'none', textAlign: 'center' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Uslub</label>
                                <select style={{ width: '100%', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', outline: 'none' }}>
                                    <option>Classic</option><option>Modern</option><option>Minimal</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Format</label>
                                <select style={{ width: '100%', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', outline: 'none' }}>
                                    <option>Default</option><option>Visual</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '10px', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Til</label>
                                <select style={{ width: '100%', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '10px 12px', fontSize: '14px', fontWeight: '600', color: '#334155', outline: 'none' }}>
                                    <option>O'zbek tili</option><option>English</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <textarea
                                style={{ width: '100%', height: '160px', padding: '20px', fontSize: '18px', lineHeight: '1.6', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', outline: 'none', resize: 'none', color: '#334155' }}
                                placeholder="Dars mavzusini yozing... (masalan: 7-sinf Binary numbers darsi)"></textarea>
                        </div>

                        <button style={{ width: '100%', marginTop: '20px', padding: '16px', borderRadius: '16px', color: 'white', fontWeight: 'bold', fontSize: '18px', border: 'none', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', cursor: 'pointer', boxShadow: '0 8px 24px -4px rgba(37,99,235,0.4)', transition: 'all 0.2s' }}>
                            Yaratish
                        </button>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <Link to="/" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>&larr; Orqaga qaytish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidesStudio;
