import React from "react";

export default function FooterSection() {
  return (
    <footer
      style={{
        width: '100vw',
        background: '#181824',
        color: '#fff',
        padding: '40px 0 22px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1.5px solid #111',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <img src="/logo-lwl-claro.svg" alt="LWL Solutions Logo" style={{ height: 48, maxWidth: 180, objectFit: 'contain', display: 'block' }} />
        </div>
        <div style={{ fontSize: 15, color: '#bbb', marginBottom: 10, textAlign: 'center' }}>
          Tecnologia, inovação e gestão para o campo e a logística.
        </div>
        <div style={{ fontSize: 14, color: '#bbb', marginBottom: 8, textAlign: 'center' }}>
          CNPJ: 48.837.685/0001-51
        </div>
        <div style={{ fontSize: 15, color: '#fff', marginBottom: 12, textAlign: 'center' }}>
          <a href="mailto:contato@lwlsolutions.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            contato@lwlsolutions.com
          </a>
        </div>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 0, textAlign: 'center' }}>
          © {new Date().getFullYear()} LWL Solutions. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
