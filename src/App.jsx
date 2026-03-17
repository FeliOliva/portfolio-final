import { useState, useEffect } from "react";
import "./App.css";

// ── Íconos ───────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.96.005 1.927.128 2.9.374 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Traducciones ────────────────────────────────────────────────────────────
const LANGS = {
  es: {
    nav: { stack: "stack", projects: "proyectos", about: "sobre mí", contact: "contacto" },
    badge: "disponible para proyectos",
    heroSub1: "Sistemas que integran",
    heroSubHl: "software, hardware e infraestructura",
    heroSubTech: "Node.js · React · WebSockets · MySQL · Linux/VPS",
    cta1: "Ver proyectos",
    cta2: "Descargar CV",
    stats: [
      { num: "4+", label: "Proyectos producción" },
      { num: "~30%", label: "Mejora eficiencia" },
      { num: "RS232", label: "Hardware integration" },
      { num: "RT", label: "Realtime WebSocket" },
    ],
    stackLabel: "stack",
    stackTitle: "Tecnologías",
    termComments: [
      "// ✓ Balanza RS232 conectada — peso en tiempo real",
      "// ✓ Reconocimiento visual activo — productos identificados",
      "// ✓ Servidor MySQL — Villa María, AR — 99.8% uptime",
    ],
    aboutLabel: "sobre mí",
    aboutTitle: "Sobre mí",
    aboutP1: "Desarrollador enfocado en sistemas de gestión, automatización y aplicaciones en tiempo real.",
    aboutP2: "Experiencia integrando hardware con software (RS232, IoT) y desarrollando soluciones completas desde backend hasta despliegue en VPS Linux.",
    aboutP3: "Interesado en roles de backend y software engineering.",
    aboutFocusLabel: "Enfoque",
    aboutFocus: ["Backend Development", "REST APIs", "Real-Time Systems", "Hardware Integration", "VPS / Linux Deploy"],
    aboutEduLabel: "Formación",
    aboutEdu: "Analista en Sistemas — Instituto Leibnitz (2022 – 2025)",
    aboutLangsLabel: "Idiomas",
    aboutLangs: "Español: Nativo · Inglés: Intermedio",
    projLabel: "proyectos",
    projTitle: "Trabajo destacado",
    codeLabel: "código",
    demoLabel: "demo",
    frontLabel: "frontend",
    backLabel: "backend",
    projects: [
      {
        tag: "hardware · realtime",
        title: "SmartVision – Sistema de Pesaje Inteligente",
        desc: "Integración de balanza comercial RS232 con reconocimiento visual automático de productos y comunicación en tiempo real via WebSockets. Generación de tickets y subtotales automáticos.",
        pills: ["Node.js", "WebSockets", "RS232", "Computer Vision", "MySQL"],
        metric: "30% mejora eficiencia operativa",
        repoUrl: "https://github.com/FeliOliva/tesis",
        demoUrl: "/demo-tesis/",
      },
      {
        tag: "fullstack · comercial",
        title: "Plataforma Integral de Ventas, Stock y Cuentas Corrientes",
        desc: "Sistema comercial fullstack para distribuidora: ventas, compras, artículos, clientes, proveedores, notas de crédito, pagos y cheques, con control de stock y trazabilidad operativa. Incluye reportes PDF, dashboard de métricas y resúmenes financieros por cliente, zona y vendedor.",
        pills: ["React", "Node.js", "Express", "MySQL", "REST API", "Ant Design"],
        metric: "Automatización de facturación, cobranza y reportes operativos",
        repoUrl: "https://github.com/FeliOliva/ariel",
        demoUrl: "/demo-ariel/",
      },
      {
        tag: "fullstack · gestión",
        title: "Sistema de Gestión para Verdulería",
        desc: "Plataforma completa para operación diaria: ventas, caja, entregas, cuenta corriente, cheques y reportes. Frontend web con flujos por rol (admin/encargado/repartidor) y backend con lógica contable, cierres de caja y seguimiento de pagos.",
        pills: ["React", "Node.js", "Express", "MySQL", "Prisma", "Ant Design", "Linux/VPS"],
        metric: "Operación diaria centralizada — caja, reparto y cobranza en un solo sistema",
        repoUrl: "https://github.com/FeliOliva/front-mi-familia",
        repoUrl2: "https://github.com/FeliOliva/backend-mi-familia",
        demoUrl: "/demo-sistema-verdu/",
      },
      {
        tag: "iot · interdisciplinario",
        title: "Mascota Virtual IoT",
        desc: "Proyecto IoT interdisciplinario con sensores físicos. Comunicación mediante protocolo MQTT, registro de eventos y estados en base de datos.",
        pills: ["MQTT", "Node.js", "MySQL", "IoT Sensors"],
        metric: "Integración física-digital — sensores reales con persistencia de eventos en BD",
        repoUrl: "https://github.com/FeliOliva/backend-interCarreras",
        demoUrl: "/demo-tamagochi/",
      },
      {
        tag: "backend · automatización",
        title: "Bot de Recordatorios en WhatsApp",
        desc: 'Bot en Node.js que envía recordatorios programados y responde solo al contacto autorizado. Opera en una ventana horaria definida, evita estado "online", filtra mensajes externos y maneja reconexión segura.',
        pills: ["Node.js", "Baileys", "WhatsApp Web", "node-schedule", "PM2"],
        metric: "Recordatorios automáticos con control horario y alta confiabilidad",
        repoUrl: "https://github.com/FeliOliva/bot-whatsapp",
        demoUrl: "/demo-bot/",
      },
      {
        tag: "next.js · producción",
        title: "Boiero Agropecuaria – Sitio Corporativo",
        desc: "Sitio corporativo de mayorista de semillas forrajeras (Villa Nueva, Córdoba). One-page estática con header glassmorphism, catálogo de 31 productos con carrusel autoplay filtrado, menú animado y SEO production-ready con sitemap automático y Google Search Console verificado.",
        pills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Static Export"],
        metric: null,
        isLive: true,
        liveUrl: "https://boieroagro.com.ar",
        visitLabel: "boieroagro.com.ar →",
        repoUrl: "https://github.com/FeliOliva/boiero-landing-maqueta",
        demoUrl: "https://boieroagro.com.ar",
      },
    ],
    portfolioTag: "react · portfolio personal",
    portfolioTitle: "Este Portfolio",
    portfolioDesc: "Diseñado y construido desde cero. Sin frameworks de UI ni dependencias innecesarias — CSS vanilla con variables custom, animaciones nativas, grid layout responsivo y tipografía cuidada.",
    builtWith: "Construido con",
    noteComment: "// Otros proyectos en desarrollo activo o bajo acuerdos de confidencialidad.",
    noteLink: "Consultame directamente →",
    contactLabel: "contacto",
    contactTitle: "Hablemos",
    contactText: "Disponible para proyectos freelance, trabajo remoto o propuestas de colaboración.",
    contactLoc: "Villa María, Argentina · GMT-3",
    liveLabel: "en vivo",
    footerBuilt: "Construido con React + Vite",
  },

  en: {
    nav: { stack: "stack", projects: "projects", about: "about me", contact: "contact" },
    badge: "available for projects",
    heroSub1: "Systems that integrate",
    heroSubHl: "software, hardware and infrastructure",
    heroSubTech: "Node.js · React · WebSockets · MySQL · Linux/VPS",
    cta1: "View projects",
    cta2: "Download CV",
    stats: [
      { num: "4+", label: "Production projects" },
      { num: "~30%", label: "Efficiency boost" },
      { num: "RS232", label: "Hardware integration" },
      { num: "RT", label: "Realtime WebSocket" },
    ],
    stackLabel: "stack",
    stackTitle: "Technologies",
    termComments: [
      "// ✓ RS232 scale connected — real-time weight",
      "// ✓ Visual recognition active — products identified",
      "// ✓ MySQL server — Villa María, AR — 99.8% uptime",
    ],
    aboutLabel: "about",
    aboutTitle: "About me",
    aboutP1: "Developer focused on management systems, automation and real-time applications.",
    aboutP2: "Experience integrating hardware with software (RS232, IoT) and developing complete solutions from backend to VPS Linux deployment.",
    aboutP3: "Interested in backend and software engineering roles.",
    aboutFocusLabel: "Focus",
    aboutFocus: ["Backend Development", "REST APIs", "Real-Time Systems", "Hardware Integration", "VPS / Linux Deploy"],
    aboutEduLabel: "Education",
    aboutEdu: "Systems Analyst — Instituto Leibnitz (2022 – 2025)",
    aboutLangsLabel: "Languages",
    aboutLangs: "Spanish: Native · English: Intermediate",
    projLabel: "projects",
    projTitle: "Featured work",
    codeLabel: "code",
    demoLabel: "demo",
    frontLabel: "frontend",
    backLabel: "backend",
    projects: [
      {
        tag: "hardware · realtime",
        title: "SmartVision – Smart Weighing System",
        desc: "Integration of RS232 commercial scale with automatic visual product recognition and real-time communication via WebSockets. Automatic ticket and subtotal generation.",
        pills: ["Node.js", "WebSockets", "RS232", "Computer Vision", "MySQL"],
        metric: "30% operational efficiency improvement",
        repoUrl: "https://github.com/FeliOliva/tesis",
        demoUrl: "/demo-tesis/",
      },
      {
        tag: "fullstack · commercial",
        title: "Integrated Sales, Stock & Accounts Platform",
        desc: "Full-stack commercial system for a distributor: sales, purchases, items, clients, suppliers, credit notes, payments and checks, with stock control and operational traceability. Includes PDF reports, metrics dashboard and financial summaries by client, zone and salesperson.",
        pills: ["React", "Node.js", "Express", "MySQL", "REST API", "Ant Design"],
        metric: "Automated billing, collections and operational reports",
        repoUrl: "https://github.com/FeliOliva/ariel",
        demoUrl: "/demo-ariel/",
      },
      {
        tag: "fullstack · management",
        title: "Greengrocer Management System",
        desc: "Complete platform for daily operations: sales, cash register, deliveries, current account, checks and reports. Web frontend with role-based flows (admin/manager/delivery) and backend with accounting logic, cash closings and payment tracking.",
        pills: ["React", "Node.js", "Express", "MySQL", "Prisma", "Ant Design", "Linux/VPS"],
        metric: "Centralized daily operations — cash, delivery and collections in one system",
        repoUrl: "https://github.com/FeliOliva/front-mi-familia",
        repoUrl2: "https://github.com/FeliOliva/backend-mi-familia",
        demoUrl: "/demo-sistema-verdu/",
      },
      {
        tag: "iot · interdisciplinary",
        title: "Virtual IoT Pet",
        desc: "Interdisciplinary IoT project with physical sensors. Communication via MQTT protocol, event and state logging in database.",
        pills: ["MQTT", "Node.js", "MySQL", "IoT Sensors"],
        metric: "Physical-digital integration — real sensors with event persistence in DB",
        repoUrl: "https://github.com/FeliOliva/backend-interCarreras",
        demoUrl: "/demo-tamagochi/",
      },
      {
        tag: "backend · automation",
        title: "WhatsApp Reminder Bot",
        desc: 'Node.js bot that sends scheduled reminders and only responds to an authorized contact. Operates within a defined time window, avoids "online" status, filters external messages and handles secure reconnection.',
        pills: ["Node.js", "Baileys", "WhatsApp Web", "node-schedule", "PM2"],
        metric: "Automated reminders with time control and high reliability",
        repoUrl: "https://github.com/FeliOliva/bot-whatsapp",
        demoUrl: "/demo-bot/",
      },
      {
        tag: "next.js · production",
        title: "Boiero Agropecuaria – Corporate Website",
        desc: "Corporate site for a forage seed wholesaler (Villa Nueva, Córdoba). Static one-page with glassmorphism header, 31-product catalog with filtered autoplay carousel, animated menu and production-ready SEO with automatic sitemap and verified Google Search Console.",
        pills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Static Export"],
        metric: null,
        isLive: true,
        liveUrl: "https://boieroagro.com.ar",
        visitLabel: "boieroagro.com.ar →",
        repoUrl: "https://github.com/FeliOliva/boiero-landing-maqueta",
        demoUrl: "https://boieroagro.com.ar",
      },
    ],
    portfolioTag: "react · personal portfolio",
    portfolioTitle: "This Portfolio",
    portfolioDesc: "Designed and built from scratch. No UI frameworks or unnecessary dependencies — vanilla CSS with custom variables, native animations, responsive grid layout and careful typography.",
    builtWith: "Built with",
    noteComment: "// Other projects in active development or under confidentiality agreements.",
    noteLink: "Contact me directly →",
    contactLabel: "contact",
    contactTitle: "Let's talk",
    contactText: "Available for freelance projects, remote work or collaboration proposals.",
    contactLoc: "Villa María, Argentina · GMT-3",
    liveLabel: "live",
    footerBuilt: "Built with React + Vite",
  },

  pt: {
    nav: { stack: "stack", projects: "projetos", about: "sobre mim", contact: "contato" },
    badge: "disponível para projetos",
    heroSub1: "Sistemas que integram",
    heroSubHl: "software, hardware e infraestrutura",
    heroSubTech: "Node.js · React · WebSockets · MySQL · Linux/VPS",
    cta1: "Ver projetos",
    cta2: "Baixar CV",
    stats: [
      { num: "4+", label: "Projetos em produção" },
      { num: "~30%", label: "Melhoria eficiência" },
      { num: "RS232", label: "Integração hardware" },
      { num: "RT", label: "Realtime WebSocket" },
    ],
    stackLabel: "stack",
    stackTitle: "Tecnologias",
    termComments: [
      "// ✓ Balança RS232 conectada — peso em tempo real",
      "// ✓ Reconhecimento visual ativo — produtos identificados",
      "// ✓ Servidor MySQL — Villa María, AR — 99.8% uptime",
    ],
    aboutLabel: "sobre mim",
    aboutTitle: "Sobre mim",
    aboutP1: "Desenvolvedor focado em sistemas de gestão, automação e aplicações em tempo real.",
    aboutP2: "Experiência integrando hardware com software (RS232, IoT) e desenvolvendo soluções completas desde o backend até o deploy em VPS Linux.",
    aboutP3: "Interessado em funções de backend e software engineering.",
    aboutFocusLabel: "Foco",
    aboutFocus: ["Backend Development", "REST APIs", "Real-Time Systems", "Hardware Integration", "VPS / Linux Deploy"],
    aboutEduLabel: "Formação",
    aboutEdu: "Analista de Sistemas — Instituto Leibnitz (2022 – 2025)",
    aboutLangsLabel: "Idiomas",
    aboutLangs: "Espanhol: Nativo · Inglês: Intermediário",
    projLabel: "projetos",
    projTitle: "Trabalho em destaque",
    codeLabel: "código",
    demoLabel: "demo",
    frontLabel: "frontend",
    backLabel: "backend",
    projects: [
      {
        tag: "hardware · tempo real",
        title: "SmartVision – Sistema de Pesagem Inteligente",
        desc: "Integração de balança comercial RS232 com reconhecimento visual automático de produtos e comunicação em tempo real via WebSockets. Geração automática de tickets e subtotais.",
        pills: ["Node.js", "WebSockets", "RS232", "Computer Vision", "MySQL"],
        metric: "30% de melhoria na eficiência operacional",
        repoUrl: "https://github.com/FeliOliva/tesis",
        demoUrl: "/demo-tesis/",
      },
      {
        tag: "fullstack · comercial",
        title: "Plataforma Integrada de Vendas, Estoque e Contas",
        desc: "Sistema comercial fullstack para distribuidora: vendas, compras, artigos, clientes, fornecedores, notas de crédito, pagamentos e cheques, com controle de estoque e rastreabilidade operacional. Inclui relatórios PDF, dashboard de métricas e resumos financeiros por cliente, zona e vendedor.",
        pills: ["React", "Node.js", "Express", "MySQL", "REST API", "Ant Design"],
        metric: "Automação de faturamento, cobranças e relatórios operacionais",
        repoUrl: "https://github.com/FeliOliva/ariel",
        demoUrl: "/demo-ariel/",
      },
      {
        tag: "fullstack · gestão",
        title: "Sistema de Gestão para Quitanda",
        desc: "Plataforma completa para operação diária: vendas, caixa, entregas, conta corrente, cheques e relatórios. Frontend web com fluxos por papel (admin/encarregado/entregador) e backend com lógica contábil, fechamentos de caixa e acompanhamento de pagamentos.",
        pills: ["React", "Node.js", "Express", "MySQL", "Prisma", "Ant Design", "Linux/VPS"],
        metric: "Operação diária centralizada — caixa, entrega e cobranças em um único sistema",
        repoUrl: "https://github.com/FeliOliva/front-mi-familia",
        repoUrl2: "https://github.com/FeliOliva/backend-mi-familia",
        demoUrl: "/demo-sistema-verdu/",
      },
      {
        tag: "iot · interdisciplinar",
        title: "Animal de Estimação Virtual IoT",
        desc: "Projeto IoT interdisciplinar com sensores físicos. Comunicação via protocolo MQTT, registro de eventos e estados em banco de dados.",
        pills: ["MQTT", "Node.js", "MySQL", "IoT Sensors"],
        metric: "Integração físico-digital — sensores reais com persistência de eventos no BD",
        repoUrl: "https://github.com/FeliOliva/backend-interCarreras",
        demoUrl: "/demo-tamagochi/",
      },
      {
        tag: "backend · automação",
        title: "Bot de Lembretes no WhatsApp",
        desc: 'Bot em Node.js que envia lembretes programados e responde apenas ao contato autorizado. Opera dentro de uma janela de horário definida, evita status "online", filtra mensagens externas e gerencia reconexão segura.',
        pills: ["Node.js", "Baileys", "WhatsApp Web", "node-schedule", "PM2"],
        metric: "Lembretes automáticos com controle de horário e alta confiabilidade",
        repoUrl: "https://github.com/FeliOliva/bot-whatsapp",
        demoUrl: "/demo-bot/",
      },
      {
        tag: "next.js · produção",
        title: "Boiero Agropecuária – Site Corporativo",
        desc: "Site corporativo de atacadista de sementes forrageiras (Villa Nueva, Córdoba). One-page estático com header glassmorphism, catálogo de 31 produtos com carrossel autoplay filtrado, menu animado e SEO pronto para produção com sitemap automático e Google Search Console verificado.",
        pills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Static Export"],
        metric: null,
        isLive: true,
        liveUrl: "https://boieroagro.com.ar",
        visitLabel: "boieroagro.com.ar →",
        repoUrl: "https://github.com/FeliOliva/boiero-landing-maqueta",
        demoUrl: "https://boieroagro.com.ar",
      },
    ],
    portfolioTag: "react · portfólio pessoal",
    portfolioTitle: "Este Portfólio",
    portfolioDesc: "Projetado e construído do zero. Sem frameworks de UI ou dependências desnecessárias — CSS vanilla com variáveis custom, animações nativas, grid responsivo e tipografia cuidadosa.",
    builtWith: "Feito com",
    noteComment: "// Outros projetos em desenvolvimento ativo ou sob acordos de confidencialidade.",
    noteLink: "Entre em contato →",
    contactLabel: "contato",
    contactTitle: "Vamos conversar",
    contactText: "Disponível para projetos freelance, trabalho remoto ou propostas de colaboração.",
    contactLoc: "Villa María, Argentina · GMT-3",
    liveLabel: "ao vivo",
    footerBuilt: "Construído com React + Vite",
  },
};

// ── App ──────────────────────────────────────────────────────────────────────
const App = () => {
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("pf-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pf-theme", theme);
  }, [theme]);

  const tr = LANGS[lang];
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="root">
      {/* ── NAV ──────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-logo">
          <span>~/</span>felipeoliva<span>.dev</span>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#stack">{tr.nav.stack}</a></li>
            <li><a href="#proyectos">{tr.nav.projects}</a></li>
            <li><a href="#about">{tr.nav.about}</a></li>
            <li><a href="#contacto">{tr.nav.contact}</a></li>
          </ul>
          <div className="nav-controls">
            <div className="lang-switcher">
              {["es", "en", "pt"].map((l) => (
                <button
                  key={l}
                  className={`lang-btn${lang === l ? " lang-btn--active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? "☼" : "☾"}
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span> {tr.badge}
          </div>
          <h1>
            Backend Developer
            <br />
            <em>Systems &amp; Real-Time</em> Applications
          </h1>
          <p className="hero-sub">
            {tr.heroSub1}{" "}
            <span className="hl">{tr.heroSubHl}</span>.
            <br />
            {tr.heroSubTech}
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#proyectos">{tr.cta1}</a>
            <a className="btn-outline" href="/cv.html" target="_blank" rel="noreferrer">{tr.cta2}</a>
            <a className="btn-ghost" href="https://github.com/FeliOliva" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <div className="hero-stats">
            {tr.stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ ──────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="about-inner">
          <div className="about-main">
            <div className="section-label">{tr.aboutLabel}</div>
            <div className="section-title">{tr.aboutTitle}</div>
            <p className="about-text">{tr.aboutP1}</p>
            <p className="about-text">{tr.aboutP2}</p>
            <p className="about-text">{tr.aboutP3}</p>
          </div>
          <div className="about-aside">
            <div className="about-card">
              <span className="about-card-label">{tr.aboutFocusLabel}</span>
              <div className="about-tags">
                {tr.aboutFocus.map((f) => (
                  <span className="about-tag" key={f}>{f}</span>
                ))}
              </div>
            </div>
            <div className="about-card">
              <span className="about-card-label">{tr.aboutEduLabel}</span>
              <p className="about-card-text">{tr.aboutEdu}</p>
            </div>
            <div className="about-card">
              <span className="about-card-label">{tr.aboutLangsLabel}</span>
              <p className="about-card-text">{tr.aboutLangs}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK ─────────────────────────────────────────── */}
      <section className="section section-dark" id="stack">
        <div className="stack-inner">
          <div className="section-label">{tr.stackLabel}</div>
          <div className="section-title">{tr.stackTitle}</div>
          <div className="stack-grid">
            {[
              { icon: "⬡", name: "Node.js" },
              { icon: "⚛", name: "React" },
              { icon: "▲", name: "Next.js" },
              { icon: "⚡", name: "Vite.js" },
              { icon: "🔌", name: "WebSockets" },
              { icon: "◼", name: "Express" },
              { icon: "🗄", name: "MySQL" },
              { icon: "🐧", name: "Linux/VPS" },
              { icon: "📡", name: "MQTT" },
              { icon: "🔀", name: "REST APIs" },
              { icon: "🔧", name: "RS232" },
              { icon: "🎨", name: "Figma" },
            ].map((chip) => (
              <div className="stack-chip" key={chip.name}>
                <span className="stack-chip-icon">{chip.icon}</span>
                <span className="stack-chip-name">{chip.name}</span>
              </div>
            ))}
          </div>

          <div className="terminal-block terminal-margin">
            <div className="terminal-bar">
              <span className="t-dot t-red"></span>
              <span className="t-dot t-yellow"></span>
              <span className="t-dot t-green"></span>
              <span className="t-title">~/proyectos/smartvision — node server.js</span>
            </div>
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-prompt">❯ </span>
                <span className="t-cmd">const ws = </span>
                <span className="t-key">new</span>
                <span className="t-cmd"> WebSocket.Server({"{ port: 8080 }"})</span>
              </div>
              <div className="t-line">
                <span className="t-prompt">❯ </span>
                <span className="t-cmd">
                  serial.on(<span className="t-string">'data'</span>, (weight) =&gt; ws.broadcast(weight))
                </span>
              </div>
              {tr.termComments.map((c, i) => (
                <div className="t-line" key={i}>
                  <span className="t-comment">{c}</span>
                </div>
              ))}
              <div className="t-line">
                <span className="t-prompt">❯ </span>
                <span className="t-cmd">
                  server.listen(<span className="t-string">3000</span>, () =&gt; console.log(<span className="t-string">'ready'</span>))
                  <span id="cursor">█</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────────────────── */}
      <section className="section" id="proyectos">
        <div className="section-label">{tr.projLabel}</div>
        <div className="section-title">{tr.projTitle}</div>
        <div className="projects-grid">
          {tr.projects.map((p, i) => (
            <div className="project-card" key={i}>
              {p.isLive ? (
                <div className="proj-card-wide-header">
                  <span className="proj-tag">{p.tag}</span>
                  <a className="proj-live-badge" href={p.liveUrl} target="_blank" rel="noreferrer">
                    <span className="proj-live-dot"></span> {tr.liveLabel}
                  </a>
                </div>
              ) : (
                <span className="proj-tag">{p.tag}</span>
              )}
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.pills.map((pill, j) => (
                  <span className="tech-pill" key={j}>{pill}</span>
                ))}
              </div>
              {p.metric && <div className="proj-metric">{p.metric}</div>}
              {p.isLive && (
                <div className="proj-metric">
                  <a className="proj-metric-link" href={p.liveUrl} target="_blank" rel="noreferrer">
                    {p.visitLabel}
                  </a>
                </div>
              )}
              {(p.repoUrl || p.demoUrl) && (
                <div className="proj-links">
                  {p.repoUrl && (
                    <a className="proj-link" href={p.repoUrl} target="_blank" rel="noreferrer">
                      <GitHubIcon />
                      {p.repoUrl2 ? tr.frontLabel : tr.codeLabel}
                    </a>
                  )}
                  {p.repoUrl2 && (
                    <a className="proj-link" href={p.repoUrl2} target="_blank" rel="noreferrer">
                      <GitHubIcon />
                      {tr.backLabel}
                    </a>
                  )}
                  {p.demoUrl && (
                    <a className="proj-link proj-link--demo" href={p.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLinkIcon />
                      {tr.demoLabel}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Card meta: este portfolio */}
          <div className="project-card project-card--meta">
            <div className="proj-meta-card-inner">
              <div className="proj-meta-card-left">
                <span className="proj-tag">{tr.portfolioTag}</span>
                <div className="proj-title">{tr.portfolioTitle}</div>
                <p className="proj-desc">{tr.portfolioDesc}</p>
              </div>
              <div className="proj-meta-card-right">
                <span className="proj-meta-card-label">{tr.builtWith}</span>
                <div className="proj-meta-stack">
                  {["React 18", "Vite 5", "CSS Vanilla", "Space Grotesk", "JetBrains Mono"].map((t) => (
                    <span className="proj-meta-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-note">
          <span className="projects-note-code">
            <span className="t-comment">{tr.noteComment}</span>
          </span>
          <a className="projects-note-link" href="#contacto">{tr.noteLink}</a>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────── */}
      <section className="section section-dark" id="contacto">
        <div className="contact-inner">
          <div className="section-label">{tr.contactLabel}</div>
          <div className="section-title">{tr.contactTitle}</div>
          <p className="contact-text">
            {tr.contactText}
            <br />
            {tr.contactLoc}
          </p>
          <div className="contact-row">
            <a className="contact-item" href="mailto:felitooliva2@gmail.com">
              <span className="contact-icon">✉</span> felitooliva2@gmail.com
            </a>
            <a className="contact-item" href="https://github.com/FeliOliva" target="_blank" rel="noreferrer">
              <span className="contact-icon">⌥</span> github.com/FeliOliva
            </a>
            <a className="contact-item" href="https://felipeoliva.site" target="_blank" rel="noreferrer">
              <span className="contact-icon">◈</span> felipeoliva.site
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-copy">© 2026 Felipe Oliva</span>
        <span className="footer-built">{tr.footerBuilt}</span>
      </footer>
    </div>
  );
};

export default App;
