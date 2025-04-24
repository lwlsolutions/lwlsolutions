import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function MainSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <section
      style={{
        minHeight: "100dvh",
        width: "100vw",
        background: "#090909",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image
            src="/logo-lwl-claro.svg"
            alt="Logo LWL"
            width={48}
            height={28}
            style={{ height: 28, width: "auto", maxWidth: 80 }}
          />
        </Link>
        {/* Desktop menu */}
        <div className="nav-desktop" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#quem-somos" style={navLinkStyle} tabIndex={0} onClick={handleSmoothScroll}>Quem somos</a>
          <a href="#solucoes" style={navLinkStyle} tabIndex={0} onClick={handleSmoothScroll}>Soluções</a>
          <a href="#contato" style={navLinkStyle} tabIndex={0} onClick={handleSmoothScroll}>Contato</a>
          <a href="#contato" style={{ ...navButtonStyle, marginLeft: 8 }} tabIndex={0} onClick={handleSmoothScroll}>Fale conosco</a>
        </div>
        {/* Mobile menu button */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 32,
            display: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            id="nav-mobile-menu"
            ref={menuRef}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "78vw",
              maxWidth: 320,
              height: "100dvh",
              background: "#181818f7",
              boxShadow: "-4px 0 24px #000a",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "32px 24px",
              gap: 16,
              zIndex: 99,
              animation: "slideIn .22s cubic-bezier(.7,0,.3,1)"
            }}
          >
            <a href="#quem-somos" style={navLinkMobileStyle} tabIndex={0} onClick={e => { handleSmoothScroll(e); setMenuOpen(false); }}>Quem somos</a>
            <a href="#solucoes" style={navLinkMobileStyle} tabIndex={0} onClick={e => { handleSmoothScroll(e); setMenuOpen(false); }}>Soluções</a>
            <a href="#contato" style={navLinkMobileStyle} tabIndex={0} onClick={e => { handleSmoothScroll(e); setMenuOpen(false); }}>Contato</a>
            <a href="#contato" style={navButtonMobileStyle} tabIndex={0} onClick={e => { handleSmoothScroll(e); setMenuOpen(false); }}>Fale conosco</a>
          </div>
        )}
        <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 701px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        `}</style>
      </nav>

      {/* HERO TEXT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 48,
          padding: 16,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 7vw, 3.6rem)",
            fontWeight: 800,
            marginBottom: 18,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          Soluções em Tecnologia para o seu Negócio
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#d1d5db",
            maxWidth: 600,
            margin: "0 auto 28px auto",
          }}
        >
          Desenvolvemos sistemas de gestão completos para impulsionar a eficiência e o crescimento da sua empresa.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#solucoes" style={mainButtonStyle} tabIndex={0} onClick={handleSmoothScroll}>
            Conheça nossas soluções
          </a>
          <a href="#contato" style={mainButtonOutlineStyle} tabIndex={0} onClick={handleSmoothScroll}>
            Fale conosco
          </a>
        </div>
        {/* Parceiros - carrossel dentro do HERO TEXT, após os botões */}
        <div
          style={{
            width: '100%',
            marginTop: 56,
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h4 style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            fontWeight: 700,
            marginBottom: 10,
            color: '#bbb',
            textAlign: 'center',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}>
            Nossos Parceiros
          </h4>
          <div style={{
            width: '100%',
            maxWidth: 950,
            overflow: 'hidden',
            margin: '0 auto',
          }}>
            <div className="MainSection-partners-carousel" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30, /* Reduzir ainda mais o espaçamento entre logos */
              animation: 'parceiros-scroll 10s linear infinite', /* Acelerar ainda mais a animação */
            }}>
              {(() => {
                // Dynamically import all SVGs from /public/parceiros
                const logos = [
                  'aws.svg', 'code.svg', 'django.svg', 'google.svg', 'gpt.svg', 'meta.svg', 'microsoft.svg', 'node.svg', 'python.svg', 'sonnet.svg', 'supabase.svg', 'vercel.svg'
                ];
                // Duplicar para efeito de carrossel infinito
                const allLogos = logos.concat(logos);
                return allLogos.map((file, idx) => {
                  // Alt automático pelo nome do arquivo
                  const alt = file.replace('.svg', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                  return (
                    <div key={idx} style={{ minWidth: 85, minHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={`/parceiros/${file}`} alt={alt} width={85} height={40} style={{ objectFit: 'contain', filter: 'grayscale(0.2)' }} />
                    </div>
                  );
                });
              })()}

            </div>
          </div>
          <style>{`
            @keyframes parceiros-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .MainSection-partners-carousel {
              animation-duration: 10s !important; /* Ainda mais rápido para mostrar todos os parceiros */
              width: max-content; /* Garantir que todos os itens sejam exibidos */
            }
            @media (max-width: 600px) {
              .MainSection-partners-carousel {
                animation-duration: 8s !important;
                gap: 20px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1.08rem",
  padding: "6px 0",
  borderBottom: "2px solid transparent",
  transition: "border 0.2s, color 0.2s",
};

const navButtonStyle: React.CSSProperties = {
  background: "#fff",
  color: "#181818",
  fontWeight: 700,
  borderRadius: 8,
  padding: "8px 18px",
  textDecoration: "none",
  fontSize: "1.08rem",
  border: "none",
  boxShadow: "0 2px 10px #0002",
  transition: "background 0.2s, color 0.2s",
  cursor: "pointer"
};

const navLinkMobileStyle: React.CSSProperties = {
  ...navLinkStyle,
  fontSize: "1.1rem",
  padding: "12px 0",
  width: "100%",
  display: "block",
  borderBottom: "2px solid #232323",
};

const navButtonMobileStyle: React.CSSProperties = {
  ...navButtonStyle,
  width: "100%",
  margin: "12px 0 0 0",
  fontSize: "1.12rem",
  padding: "12px 0",
  borderRadius: 8,
};

const mainButtonStyle: React.CSSProperties = {
  background: "#fff",
  color: "#181818",
  fontWeight: 700,
  borderRadius: 8,
  padding: "13px 28px",
  textDecoration: "none",
  fontSize: "1.1rem",
  border: "none",
  boxShadow: "0 2px 16px #0002",
  transition: "background 0.2s, color 0.2s",
  cursor: "pointer"
};

const mainButtonOutlineStyle: React.CSSProperties = {
  ...mainButtonStyle,
  background: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  boxShadow: "none"
};
