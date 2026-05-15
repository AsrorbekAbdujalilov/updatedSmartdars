import { Link } from 'react-router-dom';

const Checker = () => {
    return (
        <div className="page-wrapper" style={{ fontFamily: "'Nunito', sans-serif" }}>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>SmartDars</span>
                        </Link>
                    </div>

                    <div className="nav-center">
                        {/* Links here if needed */}
                    </div>

                    <div className="nav-right">
                        <div className="nav-auth-buttons">
                            <Link to="/login" className="btn-secondary-outline">Kirish</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HERO BAND */}
            <div className="hero-band" style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #2563eb, #1e3a8a)', color: 'white', textAlign: 'center' }}>
                <div className="hero-inner">
                    <p className="hero-label" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', opacity: 0.8 }}>Boshlang'ich Sifat Baholash</p>
                    <h1 className="hero-title" style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>O'quvchi ishini <em style={{ color: '#fbbf24', fontStyle: 'normal' }}>AI bilan</em> baholang</h1>

                    <div className="type-toggle" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <button className="toggle-pill active" style={{ padding: '8px 24px', borderRadius: '50px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                            BSB
                        </button>
                        <button className="toggle-pill" style={{ padding: '8px 24px', borderRadius: '50px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                            CHSB
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN GRID */}
            <main className="main-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px' }}>
                {/* ── LEFT: FORM ── */}
                <section className="form-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Meta card */}
                    <div className="form-card" style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div className="card-eyebrow" style={{ fontWeight: 'bold', color: '#64748b', marginBottom: '16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Ma'lumotlar
                        </div>
                        <div className="meta-grid" style={{ display: 'grid', gap: '16px' }}>
                            <div className="field-wrap">
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>Sinf</label>
                                <select className="field-input" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}>
                                    <option value="">-- Sinfni tanlang --</option>
                                </select>
                            </div>
                            <div className="field-wrap">
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>O'quvchi</label>
                                <select className="field-input" disabled style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#f8fafc' }}>
                                    <option value="">Dastlab sinfni tanlang</option>
                                </select>
                            </div>
                            <div className="field-wrap">
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>Fan / Vazifa Nomi</label>
                                <input type="text" className="field-input" placeholder="Matematika (yoki BSB nomi)" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>
                            <div className="field-wrap">
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>Maksimal ball</label>
                                <input type="number" className="field-input" placeholder="50" min="1" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                            </div>
                        </div>
                    </div>

                    {/* Mark scheme card */}
                    <div className="form-card" style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div className="card-eyebrow" style={{ fontWeight: 'bold', color: '#64748b', marginBottom: '16px', fontSize: '14px' }}>
                            Baholash Mezoni
                        </div>
                        <div className="drop-zone" style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '32px', textAlign: 'center', backgroundColor: '#f8fafc', cursor: 'pointer' }}>
                            <p style={{ color: '#475569', fontWeight: '600', marginBottom: '4px' }}>PDF, Word yoki rasm yuklang</p>
                            <p style={{ color: '#94a3b8', fontSize: '12px' }}>yoki shu yerga sudrab tashlang</p>
                            <button type="button" style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '500', color: '#3b82f6', cursor: 'pointer' }}>Fayl tanlash</button>
                        </div>
                        <textarea className="field-textarea mt-3" rows={5} placeholder="Yoki mezonni to'g'ridan-to'g'ri shu yerga kiriting..." style={{ width: '100%', marginTop: '16px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                    </div>

                    {/* Student work card */}
                    <div className="form-card" style={{ background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div className="card-eyebrow" style={{ fontWeight: 'bold', color: '#64748b', marginBottom: '16px', fontSize: '14px' }}>
                            O'quvchi Ishi
                        </div>
                        <div className="drop-zone" style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '32px', textAlign: 'center', backgroundColor: '#f8fafc', cursor: 'pointer' }}>
                            <p style={{ color: '#475569', fontWeight: '600', marginBottom: '4px' }}>PDF, Word yoki rasm yuklang</p>
                            <p style={{ color: '#94a3b8', fontSize: '12px' }}>yoki shu yerga sudrab tashlang</p>
                            <button type="button" style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '500', color: '#3b82f6', cursor: 'pointer' }}>Fayl tanlash</button>
                        </div>
                        <textarea className="field-textarea mt-3" rows={7} placeholder="Yoki o'quvchi ishini to'g'ridan-to'g'ri shu yerga kiriting…" style={{ width: '100%', marginTop: '16px', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                    </div>

                    <button className="btn-primary-blue submit-btn" style={{ width: '100%', borderRadius: '8px', padding: '16px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)' }}>
                        Baholashni Boshlash
                    </button>
                </section>

                {/* ── RIGHT: RESULTS ── */}
                <section className="results-col">
                    <div className="results-card" style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div className="empty-state">
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px' }}>Natijalar bu yerda</h3>
                            <p style={{ color: '#64748b', marginBottom: '32px' }}>Chap tomondagi formani to'ldiring va baholash tugmasini bosing</p>
                            <div className="empty-steps" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>
                                <span><span style={{ backgroundColor: '#f1f5f9', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#3b82f6', marginRight: '6px' }}>1</span> Ma'lumot kiriting</span>
                                <span>&rarr;</span>
                                <span><span style={{ backgroundColor: '#f1f5f9', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#3b82f6', marginRight: '6px' }}>2</span> Mezon yozing</span>
                                <span>&rarr;</span>
                                <span><span style={{ backgroundColor: '#f1f5f9', width: '24px', height: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#3b82f6', marginRight: '6px' }}>3</span> Natija oling</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Checker;
