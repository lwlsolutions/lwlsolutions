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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.3764 4.62392C17.2619 2.50291 14.4454 1.32776 11.4602 1.32471C5.37088 1.32471 0.421932 6.27211 0.418932 12.3629C0.417932 14.2822 0.906932 16.1565 1.84293 17.8079L0.344932 23.3249L5.99593 21.8599C7.58693 22.7169 9.37993 23.1679 11.2049 23.1689H11.2109C17.2989 23.1689 22.2489 18.2209 22.2519 12.1299C22.2549 9.14791 21.0919 6.33392 19.3764 4.62392ZM11.4602 21.2819H11.4552C9.81693 21.2809 8.21193 20.8469 6.80793 20.0229L6.49393 19.8409L3.08693 20.7249L3.98693 17.4069L3.78393 17.0789C2.87693 15.6149 2.40393 13.9129 2.40493 12.1639C2.40693 7.31291 6.46693 3.21192 11.4652 3.21192C13.9372 3.21392 16.2602 4.19592 18.0032 5.94192C19.7462 7.68792 20.7239 10.0129 20.7219 12.4879C20.7199 17.3399 16.4542 21.2819 11.4602 21.2819ZM16.6802 14.8199C16.3942 14.6769 15.0332 14.0079 14.7692 13.9079C14.5062 13.8089 14.3142 13.7589 14.1222 14.0449C13.9302 14.3309 13.4012 14.9499 13.2312 15.1419C13.0622 15.3339 12.8922 15.3589 12.6062 15.2159C12.3202 15.0729 11.4442 14.7959 10.4142 13.8749C9.61093 13.1529 9.07393 12.2729 8.90393 11.9869C8.73493 11.7009 8.88593 11.5439 9.03093 11.3999C9.15993 11.2699 9.31793 11.0589 9.46293 10.8899C9.60793 10.7209 9.65793 10.5979 9.75693 10.4059C9.85693 10.2139 9.80693 10.0449 9.73193 9.90192C9.65793 9.75892 9.12293 8.39792 8.88093 7.82592C8.64493 7.26992 8.40493 7.34392 8.22693 7.33392C8.05793 7.32492 7.86593 7.32392 7.67393 7.32392C7.48193 7.32392 7.16893 7.39792 6.90593 7.68392C6.64293 7.96992 5.92493 8.63892 5.92493 10.0009C5.92493 11.3629 6.90593 12.6739 7.05093 12.8659C7.19593 13.0579 9.06993 15.9149 11.9049 17.1269C12.5729 17.4199 13.0929 17.5999 13.4989 17.7359C14.1669 17.9569 14.7762 17.9259 15.2582 17.8489C15.7982 17.7639 16.9182 17.1749 17.1602 16.5049C17.4022 15.8349 17.4022 15.2629 17.3272 15.1419C17.2532 15.0209 17.0612 14.9629 16.6802 14.8199Z" fill="#25D366"/>
              </svg>
            </span>
            <div className="contato-info">
              <a href="https://wa.me/5564996115182" target="_blank" rel="noopener" className="contato-break" style={{ color: "#181824", textDecoration: "none", fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                (64) 99611-5182
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 4 }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.3764 4.62392C17.2619 2.50291 14.4454 1.32776 11.4602 1.32471C5.37088 1.32471 0.421932 6.27211 0.418932 12.3629C0.417932 14.2822 0.906932 16.1565 1.84293 17.8079L0.344932 23.3249L5.99593 21.8599C7.58693 22.7169 9.37993 23.1679 11.2049 23.1689H11.2109C17.2989 23.1689 22.2489 18.2209 22.2519 12.1299C22.2549 9.14791 21.0919 6.33392 19.3764 4.62392ZM11.4602 21.2819H11.4552C9.81693 21.2809 8.21193 20.8469 6.80793 20.0229L6.49393 19.8409L3.08693 20.7249L3.98693 17.4069L3.78393 17.0789C2.87693 15.6149 2.40393 13.9129 2.40493 12.1639C2.40693 7.31291 6.46693 3.21192 11.4652 3.21192C13.9372 3.21392 16.2602 4.19592 18.0032 5.94192C19.7462 7.68792 20.7239 10.0129 20.7219 12.4879C20.7199 17.3399 16.4542 21.2819 11.4602 21.2819Z" fill="#25D366"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="contato-card">
            <span className="contato-icone">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5.5 7.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7.5" stroke="#181824" strokeWidth="1.8"/><path d="M9 10V7a3 3 0 1 1 6 0v3" stroke="#181824" strokeWidth="1.8"/><rect x="6.5" y="10.5" width="11" height="7" rx="1" stroke="#181824" strokeWidth="1.8"/></svg>
            </span>
            <div className="contato-info">
              <span className="contato-break" style={{ color: "#181824", fontWeight: 500 }}>Horário: 8:00 às 18:00<br/>Segunda a Sexta-feira<br/>Horário de Brasília</span>
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
