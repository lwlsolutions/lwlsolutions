import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCountUp(target: number, duration = 1200, startWhenVisible = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(!startWhenVisible);

  useEffect(() => {
    if (!startWhenVisible) setStarted(true);
    if (!startWhenVisible || started) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    const refValue = ref.current;
    if (refValue) observer.observe(refValue);
    return () => { if (refValue) observer.unobserve(refValue); };
  }, [startWhenVisible, started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    let raf: number;
    function animate() {
      start += step;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(start);
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return [count, ref] as const;
}

export default function ClientesSection() {
  const [clientes, clientesRef] = useCountUp(4754, 1400);
  const [paises, paisesRef] = useCountUp(7, 1000);
  return (
    <section id="clientes" style={{
      width: "100vw",
      minHeight: "100dvh",
      background: "#fff",
      color: "#181824",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 0 36px 0"
    }}>
      <h2 style={{
        fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
        fontWeight: 800,
        marginBottom: 40,
        textAlign: "center",
        letterSpacing: -1,
        color: "#181824"
      }}>
        Nossos Clientes
      </h2>
      {/* Carrossel giratório de logos */}
      <div style={{
        width: "100%",
        maxWidth: 900,
        overflow: "hidden",
        margin: "0 auto",
        marginBottom: 56
      }}>
        <div className="clientes-carousel" style={{
          display: "flex",
          alignItems: "center",
          gap: 80,
          animation: "clientes-scroll 18s linear infinite"
        }}>
          {[
            { logo: "/clientes/logo-cliente1.png", alt: "Cliente 1" },
            { logo: "/clientes/logo-cliente2.jpg", alt: "Cliente 2" },
            { logo: "/clientes/logo-cliente3.jpg", alt: "Cliente 3" },
            { logo: "/clientes/logo-cliente4.png", alt: "Cliente 4" },
            { logo: "/clientes/logo-cliente5.png", alt: "Cliente 5" },
            { logo: "/clientes/logo-cliente6.jpg", alt: "Cliente 6" },
            { logo: "/clientes/logo-cliente7.jpg", alt: "Cliente 7" },
          ].concat([
            { logo: "/clientes/logo-cliente1.png", alt: "Cliente 1" },
            { logo: "/clientes/logo-cliente2.jpg", alt: "Cliente 2" },
            { logo: "/clientes/logo-cliente3.jpg", alt: "Cliente 3" },
            { logo: "/clientes/logo-cliente4.png", alt: "Cliente 4" },
            { logo: "/clientes/logo-cliente5.png", alt: "Cliente 5" },
            { logo: "/clientes/logo-cliente6.jpg", alt: "Cliente 6" },
            { logo: "/clientes/logo-cliente7.jpg", alt: "Cliente 7" },
          ]).map((cliente, idx) => (
            <div key={idx} style={{ minWidth: 120, minHeight: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src={cliente.logo} alt={cliente.alt} width={138} height={69} style={{ objectFit: "contain", filter: "grayscale(0.2)" }} />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes clientes-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .clientes-carousel {
            animation-duration: 30s !important;
          }
          @media (max-width: 600px) {
            .clientes-carousel {
              animation-duration: 15s !important;
            }
          }

          .clientes-carousel {
            width: max-content;
          }
        `}</style>
      </div>
      {/* Números abaixo do carrossel */}
      <div style={{
        display: "flex",
        gap: 72,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
        marginBottom: 32,
        flexWrap: "wrap"
      }}>
        <div style={{ textAlign: "center" }}>
          <div ref={clientesRef} style={{ fontSize: 32, fontWeight: 800, color: "#181824" }}>{clientes}</div>
          <div style={{ fontSize: 15, color: "#444" }}>Clientes atendidos</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#181824" }}>5</div>
          <div style={{ fontSize: 15, color: "#444", lineHeight: 1.15 }}>
            tempo de empresa em anos
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div ref={paisesRef} style={{ fontSize: 32, fontWeight: 800, color: "#181824" }}>{paises}</div>
          <div style={{ fontSize: 15, color: "#444" }}>Países atendidos</div>
        </div>
      </div>

      {/* Seção de Premiações - carrossel horizontal */}
      <div style={{
        marginTop: 120,
        width: '100%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h3 style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontWeight: 800,
          marginBottom: 40,
          color: '#181824',
          textAlign: 'center',
          letterSpacing: -1,
        }}>
          Premiações
        </h3>
        <div style={{
          width: '100%',
          maxWidth: 900,
          overflow: 'auto',
          margin: '0 auto',
          marginBottom: 8,
        }}>
          <div className="premios-carousel" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 80,
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            minWidth: 0,
          }}>
            {premios.map((premio, idx) => (
              <div key={idx} className="premio-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 100, minHeight: 80, margin: '0 8px' }}>
                <Image src={premio.logo} alt={premio.alt} width={90} height={48} style={{ objectFit: 'contain', maxWidth: '100%', width: 'auto', height: 'auto', marginBottom: 6 }} />
                <span style={{ fontSize: 13, color: '#444', textAlign: 'center', marginTop: 2 }}>{premio.alt}</span>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .premios-carousel {
                gap: 24px !important;
                flex-wrap: wrap !important;
                justify-content: center !important;
                width: 100% !important;
                min-width: 0 !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .premio-item {
                min-width: 80px !important;
                min-height: 40px !important;
              }
              .premios-carousel img {
                width: 80px !important;
                height: 40px !important;
                max-width: 100% !important;
                margin: 0 auto;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
