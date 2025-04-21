import React from "react";

export default function ContatoSection() {
  return (
    <section id="contato" style={{
      width: "100vw",
      minHeight: "100dvh",
      background: "#f7f7f7",
      color: "#181824",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ maxWidth: 1100, width: "100%", padding: "48px 16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <style>{`
          .contato-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
            gap: 32px;
            width: 100%;
            margin-top: 36px;
          }
          .contato-card {
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 2px 16px rgba(20,20,40,0.07);
            padding: 28px 24px 22px 24px;
            display: flex;
            align-items: center;
            gap: 18px;
            min-height: 90px;
            transition: box-shadow .2s;
            border: 1px solid #ececec;
          }
          .contato-card:hover {
            box-shadow: 0 4px 24px rgba(20,20,40,0.13);
            border: 1px solid #b6b6b6;
          }
          .contato-icone {
            min-width: 38px;
            min-height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contato-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          @media (max-width: 700px) {
            .contato-grid {
              grid-template-columns: 1fr;
              gap: 18px;
              margin-top: 22px;
            }
            .contato-card {
              flex-direction: column;
              align-items: center;
              text-align: center;
              padding: 22px 10px 18px 10px;
              gap: 8px;
            }
            .contato-icone {
              margin-bottom: 2px;
            }
          }
        `}</style>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 800,
          marginBottom: 14,
          textAlign: "center",
          letterSpacing: -1,
          color: "#181824",
          width: '100%'
        }}>
          Contato
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.18rem)",
          color: "#444",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto 36px auto",
          fontWeight: 400,
        }}>
          Entre em contato conosco para tirar dúvidas, solicitar orçamento ou conversar sobre soluções personalizadas.
        </p>
        <div className="contato-grid">
          <div className="contato-card">
            <span className="contato-icone">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75Z" stroke="#181824" strokeWidth="1.8"/><path d="m3.75 6.75 7.47 6.2a2.25 2.25 0 0 0 2.56 0l7.47-6.2" stroke="#181824" strokeWidth="1.8"/></svg>
            </span>
            <div className="contato-info">
              <a href="mailto:contato@lwlsolutions.com" className="contato-break" style={{ color: "#181824", textDecoration: "none", fontWeight: 500 }}>contato@lwlsolutions.com</a>
            </div>
          </div>
          <div className="contato-card">
            <span className="contato-icone">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6.5 3.5h11A2 2 0 0 1 19.5 5.5v13a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" stroke="#181824" strokeWidth="1.8"/><path d="M7.5 7.5h9M7.5 11.5h5M7.5 15.5h7" stroke="#181824" strokeWidth="1.8"/></svg>
            </span>
            <div className="contato-info">
              <a href="https://wa.me/5564996115182" target="_blank" rel="noopener" className="contato-break" style={{ color: "#181824", textDecoration: "none", fontWeight: 500 }}>(64) 99611-5182 (WhatsApp)</a>
            </div>
          </div>
          <div className="contato-card">
            <span className="contato-icone">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5.5 7.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7.5" stroke="#181824" strokeWidth="1.8"/><path d="M9 10V7a3 3 0 1 1 6 0v3" stroke="#181824" strokeWidth="1.8"/><rect x="6.5" y="10.5" width="11" height="7" rx="1" stroke="#181824" strokeWidth="1.8"/></svg>
            </span>
            <div className="contato-info">
              <span className="contato-break" style={{ color: "#181824", fontWeight: 500 }}>Horário: 8:00 às 18:00<br/>Horário de Brasília</span>
            </div>
          </div>
          <div className="contato-card">
            <span className="contato-icone">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.13 10.45 8.1 11.13a2 2 0 0 0 2.1 0C13.87 21.45 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" stroke="#181824" strokeWidth="1.8"/></svg>
            </span>
            <div className="contato-info">
              <span style={{ color: "#181824", fontWeight: 500, textAlign: 'left', fontSize: 15, marginTop: 2 }}>
                Endereço: 74085420 RUA 119, N 64<br/>
                Bairro St Sul, Complemento QDF38 LT08 Sala 02<br/>
                Goiânia, GO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
