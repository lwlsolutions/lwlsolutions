"use client";
"use client";
import React, { useRef, useEffect, useState } from "react";
import MainSection from "./MainSection";
import QuemSomosSection from "./QuemSomosSection";
import SolucoesSection from "./SolucoesSection";
import ClientesSection from "./ClientesSection";
import ContatoSection from "./ContatoSection";
import FooterSection from "./FooterSection";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showArrow, setShowArrow] = useState(false);

  // Exibe a seta após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Partículas inteligentes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Carrega o SVG da logo
    const img = new window.Image();
    img.src = "/logo-lwl-claro.svg";
    img.onload = () => {
      // Responsividade: logo ocupa até 90vw e 40vh em telas pequenas
      const maxLogoW = Math.min(canvas.width * 0.9, 600);
      const maxLogoH = Math.min(canvas.height * 0.4, (maxLogoW * 1473.18) / 2539.98);
      const logoW = maxLogoW;
      const logoH = maxLogoH;
      const logoX = (canvas.width - logoW) / 2;
      const logoY = (canvas.height - logoH) / 2;

      // Desenha a logo em um canvas auxiliar para pegar a área branca
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext("2d")!;
      tempCtx.clearRect(0, 0, canvas.width, canvas.height);
      tempCtx.drawImage(img, logoX, logoY, logoW, logoH);
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);

      // Cria partículas apenas onde há branco na logo
      const particles: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number; }[] = [];
      // Responsividade: um pouco mais de partículas em telas pequenas
      const step = canvas.width < 600 ? 4 : 3;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const idx = (y * canvas.width + x) * 4;
          const [r, g, b, a] = [imageData.data[idx], imageData.data[idx+1], imageData.data[idx+2], imageData.data[idx+3]];
          // Considera pixels suficientemente claros como "brancos" da logo
          if (a > 128 && r > 180 && g > 180 && b > 180) {
            particles.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0 });
          }
        }
      }

      // Animação
      let mouse = { x: -1000, y: -1000 };
      const handleMove = (e: MouseEvent) => {
        mouse = { x: e.clientX, y: e.clientY };
      };
      const handleTouch = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          mouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };
      window.addEventListener("mousemove", handleMove, { passive: true });
      window.addEventListener("touchmove", handleTouch, { passive: false });

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
          // Repulsão do mouse
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * 1.5;
            p.vy -= Math.sin(angle) * 1.5;
          }
          // Retorno para a base
          p.vx += (p.baseX - p.x) * 0.02;
          p.vy += (p.baseY - p.y) * 0.02;
          // Fricção
          p.vx *= 0.92;
          p.vy *= 0.92;
          p.x += p.vx;
          p.y += p.vy;
          ctx.fillStyle = "white";
          ctx.fillRect(p.x, p.y, 2, 2);
        }
        requestAnimationFrame(animate);
      }
      animate();

      // Limpeza
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("touchmove", handleTouch);
        window.removeEventListener("resize", resizeCanvas);
      };
    };
    
  }, []);

  return (
    <>
      {/* HERO: partículas e seta, ocupa 100dvh */}
      <section style={{ width: "100vw", height: "100dvh", background: "black", position: "relative", overflow: "hidden", touchAction: "none" }}>
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100dvh", zIndex: 1, touchAction: "none" }}
          aria-label="Efeito de partículas inteligentes com a logo LWL"
        />
        {/* Seta animada */}
        {showArrow && (
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 24, zIndex: 3, display: "flex", justifyContent: "center", pointerEvents: "auto" }}>
            <button
              onClick={() => {
                const nextSection = document.getElementById("main-section");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Rolar para baixo"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                cursor: "pointer",
                animation: "arrow-bounce 1s infinite",
                filter: "drop-shadow(0 0 6px #fff)",
                display: "flex"
              }}
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8V40M24 40L36 28M24 40L12 28" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <style>{`
              @keyframes arrow-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(16px); }
              }
              @media (max-width: 600px) {
                div[style*='absolute'] svg { width: 32px !important; height: 32px !important; }
              }
            `}</style>
          </div>
        )}
      </section>
      {/* MAIN SECTION: logo, navbar, textos, botões */}
      <div id="main-section">
        <MainSection />
      </div>
      <ClientesSection />
      <QuemSomosSection />
      <SolucoesSection />
      <ContatoSection />
      <FooterSection />
    </>
  );
}
