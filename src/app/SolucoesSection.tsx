import Image from "next/image";
import styles from "./page.module.css";

const solucoes = [
  {
    titulo: "Transportes",
    descricao: "Sistema para gestão de frota, rotas, manutenção de veículos e acompanhamento em tempo real.",
    logo: "/clientes/logo-transportadorpro.svg",
    emDesenvolvimento: false,
  },
  {
    titulo: "Planilha para Pecuária de Corte",
    descricao: "Gestão completa para fazendas de gado de corte: controle de pesagens, manejo sanitário, produtividade e relatórios personalizados.",
    logo: "/clientes/logo-planilha-pecu-pro.png",
    emDesenvolvimento: false,
  },
  {
    titulo: "Planilha para Agricultura",
    descricao: "Soluções para monitoramento de safras, controle de insumos, planejamento agrícola e análise de resultados.",
    logo: "/clientes/logo-produtor.png",
    emDesenvolvimento: false,
  },
  {
    titulo: "Software para Pecuária de Corte",
    descricao: "Sistema completo para gestão de rebanho, controle financeiro, rastreabilidade, manejo sanitário e integração com dispositivos IoT.",
    logo: "",
    emDesenvolvimento: true,
  },
  {
    titulo: "Software para Agricultura",
    descricao: "Plataforma integrada para gestão agrícola com monitoramento por satélite, previsão climática, controle de insumos e análise de produtividade.",
    logo: "",
    emDesenvolvimento: true,
  },
];

export default function SolucoesSection() {
  return (
    <section id="solucoes" style={{
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
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 800,
          marginBottom: 14,
          textAlign: "center",
          letterSpacing: -1,
          color: "#181824"
        }}>
          Soluções
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.18rem)",
          color: "#444",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto 36px auto",
          fontWeight: 400,
        }}>
          Conheça nossas soluções para os principais setores do agronegócio e logística.
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          marginTop: 24,
          width: "100%",
        }}>
          {solucoes.map((solucao) => (
            <div
              key={solucao.titulo}
              className={styles.card}
              style={{
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 2px 16px 0 #0001",
                padding: 32,
                maxWidth: 380,
                minWidth: 300,
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
              }}>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 10px auto',
                }}>
                  {solucao.logo ? (
                    <Image 
                      src={solucao.logo} 
                      alt={solucao.titulo} 
                      width={180} 
                      height={180} 
                      style={{ 
                        maxWidth: solucao.titulo.includes("Transportes") ? 280 : 240, 
                        maxHeight: 180, 
                        minHeight: 140,
                        objectFit: "contain", 
                        display: 'block',
                        margin: '0 auto',
                      }} 
                    />
                  ) : (
                    <div style={{
                      width: 240,
                      height: 180,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                      <div style={{
                        background: '#FFB800',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1rem',
                        padding: '8px 20px',
                        borderRadius: 12,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                      }}>
                        Em desenvolvimento
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: 10,
                textAlign: "center",
                color: "#181824"
              }}>{solucao.titulo}</h3>
              <p style={{
                fontSize: "1rem",
                color: "#444",
                textAlign: "center",
                fontWeight: 400,
                marginBottom: 0,
              }}>{solucao.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
