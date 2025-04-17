import React from "react";

export default function QuemSomosSection() {
  return (
    <section id="quem-somos" style={{
      width: "100vw",
      minHeight: "100dvh",
      background: "#fff",
      color: "#181824",
      padding: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ maxWidth: 900, width: "100%", padding: "48px 16px 48px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 800,
          marginBottom: 14,
          textAlign: "center",
          letterSpacing: -1,
          color: "#181824"
        }}>
          Quem somos
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.18rem)",
          color: "#444",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto 36px auto",
          fontWeight: 400,
        }}>
          A LWL Solutions atua como provedora de desenvolvimento social e rentabilidade, respeitando todas as leis e seus colaboradores, focada 100% nas soluções e atendimento aos clientes de forma eficiente, íntegra e ética.
        </p>
        {/* Cards */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 28,
          justifyContent: "center",
          alignItems: "stretch",
          marginTop: 24,
        }}>
          <Card
            title="Nossa missão"
            text="Responsável em facilitar o lançamento e controle de dados de cada cliente, de forma rápida e ágil, para que possam tomar as melhores decisões no dia a dia."
          />
          <Card
            title="Nossa visão"
            text="Ser referência em lucratividade para profissionais e clientes dentro do agronegócio através de nossos produtos, agilidade e serviços."
          />
          <Card
            title="Nossos valores"
            text="Alta qualidade no atendimento, agilidade em servir, atuando sempre em equipe e com respeito ao próximo."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  let icon = null;
  if (title.toLowerCase().includes("missão")) {
    // Target icon monocromático
    icon = (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 16 }}>
        <circle cx="24" cy="24" r="20" stroke="#181824" strokeWidth="4" fill="none" />
        <circle cx="24" cy="24" r="10" stroke="#181824" strokeWidth="3" fill="none" />
        <circle cx="24" cy="24" r="4" fill="#181824" />
      </svg>
    );
  } else if (title.toLowerCase().includes("visão")) {
    // Eye icon monocromático
    icon = (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 16 }}>
        <ellipse cx="24" cy="24" rx="18" ry="10" fill="none" stroke="#181824" strokeWidth="3" />
        <circle cx="24" cy="24" r="5" fill="#181824" />
        <circle cx="24" cy="24" r="2.2" fill="#fff" />
      </svg>
    );
  } else if (title.toLowerCase().includes("valores")) {
    // Medal/star icon monocromático
    icon = (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 16 }}>
        <circle cx="24" cy="20" r="12" fill="none" stroke="#181824" strokeWidth="3" />
        <path d="M24 28 L19 44 L24 38 L29 44 Z" fill="#181824" stroke="#181824" strokeWidth="2" />
        <path d="M24 24 l3 4 h-6z" fill="#fff" />
        <circle cx="24" cy="20" r="4" fill="#181824" />
      </svg>
    );
  }
  return (
    <div
      style={{
        background: "#f7f8fa",
        borderRadius: 18,
        boxShadow: "0 4px 24px #0001, 0 1.5px 6px #0002",
        padding: "32px 26px",
        minWidth: 240,
        maxWidth: 320,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {icon}
      <h3 style={{
        fontSize: "1.3rem",
        fontWeight: 700,
        marginBottom: 16,
        color: "#181824",
        textAlign: "center",
        letterSpacing: -0.5,
      }}>{title}</h3>
      <p style={{
        color: "#444",
        fontSize: "1.03rem",
        textAlign: "center",
        fontWeight: 400,
      }}>{text}</p>
    </div>
  );
}
