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

    const img = new Image();
    img.src = "/logo-lwl-claro.svg";

    // Variáveis para os event listeners
    // Variável para detectar se o usuário está rolando a página
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleMove: (e: MouseEvent) => void = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    
    const handleTouch: (e: TouchEvent) => void = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      
      // IMPORTANTE: NÃO prevenir o comportamento padrão para permitir rolagem normal
      // Apenas interagir com as partículas sem interferir na rolagem
    };
    
    const handleTouchEnd: () => void = () => {
      // Mover o mouse para fora da área visível
      mouse = { x: -1000, y: -1000 };
    };
    
    const resizeCanvas: () => void = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Redesenhar tudo quando o tamanho mudar
      setupParticles();
    };
    let animationId: number;
    let particles: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number; }[] = [];
    let mouse = { x: 0, y: 0 };

    const setupParticles = () => {
      if (!ctx || !canvas) return;

      // Centraliza a logo
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
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;
      
      tempCtx.clearRect(0, 0, canvas.width, canvas.height);
      tempCtx.drawImage(img, logoX, logoY, logoW, logoH);
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);

      // Limpa o array de partículas existente
      particles = [];
      
      // Cria partículas apenas onde há branco na logo
      // Responsividade: muito mais partículas em telas pequenas para evitar aparência quadriculada
      const step = canvas.width < 600 ? 2 : 3;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const idx = (y * canvas.width + x) * 4;
          // Se o pixel for branco (ou quase branco)
          if (
            imageData.data[idx] > 200 &&
            imageData.data[idx + 1] > 200 &&
            imageData.data[idx + 2] > 200
          ) {
            particles.push({
              x: x + Math.random() * 5 - 2.5,
              y: y + Math.random() * 5 - 2.5,
              baseX: x,
              baseY: y,
              vx: 0,
              vy: 0,
            });
          }
        }
      }
    };

    // Função para detectar quando o usuário começa a rolar a página
    const handleScroll = () => {
      isScrolling = true;
      
      // Limpar o timeout anterior
      clearTimeout(scrollTimeout);
      
      // Definir um novo timeout
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150); // Considerar que a rolagem parou após 150ms sem eventos de rolagem
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reduzir a intensidade da animação durante a rolagem
      const interactionFactor = isScrolling ? 0.2 : 1.0;
      
      for (const p of particles) {
        // Repulsão do mouse (reduzida durante a rolagem)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * 1.5 * interactionFactor;
          p.vy -= Math.sin(angle) * 1.5 * interactionFactor;
        }

        // Força de retorno à posição original
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
      
      animationId = requestAnimationFrame(animate);
    };



    // Quando a imagem carregar, configurar tudo
    img.onload = () => {
      resizeCanvas();
      setupParticles();
      animate();
      
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("mousemove", handleMove, { passive: true });
      // Usar passive: true para garantir que a rolagem funcione normalmente
      window.addEventListener("touchmove", handleTouch, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
      window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    };

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
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
