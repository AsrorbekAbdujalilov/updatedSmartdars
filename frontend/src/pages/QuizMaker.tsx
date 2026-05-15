import { Link } from 'react-router-dom';

const QuizMaker = () => {
    return (
        <div style={{ fontFamily: "'Roboto', sans-serif" }}>
            <div className="qm-container">
                {/* Header */}
                <div className="qm-header-area">
                    <h1 className="qm-header-title">
                        <Link to="/tests" className="qm-back-btn" title="Orqaga">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
                            </svg>
                        </Link>
                        Yangi test shakllantirish
                    </h1>
                </div>

                <div id="quiz-form">
                    {/* Step 1: Topic */}
                    <div className="qm-step">
                        <label htmlFor="quiz-topic" className="qm-step-label">1. Test mavzusi</label>
                        <input type="text" id="quiz-topic" className="qm-input" placeholder="Mavzuni kiriting..." />
                        <div className="qm-error-text" id="err-topic" style={{ display: 'none' }}>Iltimos, mavzuni kiriting.</div>
                    </div>

                    {/* Step 2: Content Textarea */}
                    <div className="qm-step">
                        <label htmlFor="quiz-context" className="qm-step-label">2. Mavzuga oid matnni kiriting</label>
                        <span className="qm-step-desc">Shu matn asosida test yoki savollar yaratiladi. Matnni aniq va tushunarli londa bayon qilsangiz, test tushish sifati oshadi.</span>
                        <textarea id="quiz-context" className="qm-textarea" placeholder="Matnni shu yerga kiriting..."></textarea>
                        <div className="qm-error-text" id="err-context" style={{ display: 'none' }}>Iltimos, matnni kiriting.</div>
                    </div>

                    {/* Step 3: Content Type */}
                    <div className="qm-step">
                        <label className="qm-step-label">3. Yaratish turi</label>
                        <div className="qm-options-group" id="type-options">
                            <div className="qm-option-pill selected" data-val="test">Test tuzish</div>
                            <div className="qm-option-pill" data-val="savollar">Savollar yaratish</div>
                        </div>
                        <input type="hidden" id="auto-q-type" value="test" />
                    </div>

                    {/* Step 4: Number of Questions */}
                    <div className="qm-step">
                        <label htmlFor="auto-q-count" className="qm-step-label">4. Nechta savoldan iborat bo'lsin?</label>
                        <input type="number" id="auto-q-count" className="qm-input" defaultValue="10" min="1" max="50" style={{ maxWidth: '150px', fontWeight: 500, textAlign: 'center' }} />
                    </div>

                    {/* Step 5: Difficulty */}
                    <div className="qm-step">
                        <label className="qm-step-label">5. Qiyinchilik darajasi</label>
                        <div className="qm-options-group" id="diff-options">
                            <div className="qm-option-pill" data-val="oson">Oson</div>
                            <div className="qm-option-pill selected" data-val="o'rtacha">O'rta</div>
                            <div className="qm-option-pill" data-val="qiyin">Murakkab</div>
                        </div>
                        <input type="hidden" id="auto-q-diff" value="o'rtacha" />
                    </div>

                    {/* Step 6: Primary Button */}
                    <div className="qm-action-area">
                        <button className="qm-btn-primary" id="btn-auto-generate">Davom etish</button>
                    </div>
                </div>

                {/* Hidden section to show results */}
                <div id="generated-questions-area" style={{ display: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingTop: '32px', borderTop: '1px solid #e0e0e0', flexWrap: 'wrap', gap: '16px' }}>
                        <h2 className="qm-step-label" style={{ fontSize: '20px', margin: 0 }}>Yaratilgan natijalar</h2>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <button className="qm-btn-primary" id="btn-assign-class" style={{ minWidth: 'auto', padding: '10px 24px', background: '#22c55e' }}>Yuborish</button>
                            <button className="qm-btn-primary" id="btn-download-pdf" style={{ minWidth: 'auto', padding: '10px 24px', background: '#6366f1' }}>
                                <svg viewBox="0 0 24 24" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                                    <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                </svg> PDF Yuklash
                            </button>
                            <button className="qm-btn-primary" id="btn-save-quiz" style={{ minWidth: 'auto', padding: '10px 24px' }}>Saqlash va Yakunlash</button>
                        </div>
                    </div>
                    <div id="questions-list">
                        {/* Dynamically generated questions will go here */}
                    </div>
                    <button type="button" className="qm-btn-primary" id="btn-add-manual-question" style={{ width: '100%', marginTop: '24px', padding: '14px', background: 'transparent', color: '#22c55e', border: '2px dashed #22c55e', boxShadow: 'none', display: 'block', fontSize: '16px', fontWeight: 500 }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg> Savol qo'shish
                    </button>
                </div>
            </div>

            {/* Modal placeholder */}
        </div>
    );
};

export default QuizMaker;
