import "./cv.css";

function CV() {
  return (
    <>
      <a className="cv-back-btn" href="/">← Portfolio</a>
      <button className="cv-print-btn" onClick={() => window.print()}>
        Imprimir / PDF
      </button>

      <div className="cv-container">

        {/* ── HEADER ───────────────── */}
        <header className="cv-header">
          <h1>Felipe Oliva</h1>
          <p className="cv-role">Full Stack / Backend Developer</p>
          <div className="cv-contact">
            <span>felitooliva2@gmail.com</span>
            <span>•</span>
            <a href="https://felipeoliva.site/" target="_blank" rel="noreferrer">portfolio</a>
            <span>•</span>
            <a href="https://github.com/FeliOliva" target="_blank" rel="noreferrer">github</a>
            <span>•</span>
            <span>Villa María, Argentina</span>
          </div>
        </header>

        {/* ── EDUCACIÓN ───────────────── */}
        <section className="cv-section">
          <h2>Educación</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Analista en Sistemas</h3>
              <span className="cv-item-date">Instituto Leibnitz — 2022 – 2025</span>
            </div>
          </div>
        </section>

        {/* ── PROYECTOS ───────────────── */}
        <section className="cv-section">
          <h2>Proyectos</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>SmartVision – Sistema de Pesaje Inteligente</h3>
            </div>
            <ul>
              <li>Integración de balanza comercial mediante RS232</li>
              <li>Reconocimiento visual automático de productos</li>
              <li>Comunicación en tiempo real con WebSockets</li>
              <li>Generación automática de tickets y subtotales</li>
              <li>Mejora de eficiencia operativa ~30%</li>
            </ul>
            <p className="tech">Node.js · WebSockets · MySQL · Computer Vision · RS232</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Plataforma Integral de Ventas, Stock y Cuentas Corrientes</h3>
            </div>
            <ul>
              <li>Sistema fullstack para distribuidora: ventas, compras, clientes y proveedores</li>
              <li>Control de stock, notas de crédito, pagos y cheques con trazabilidad operativa</li>
              <li>Reportes PDF, dashboard de métricas y resúmenes financieros por cliente y zona</li>
            </ul>
            <p className="tech">React · Node.js · Express · MySQL · Ant Design</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Sistema de Gestión para Verdulería</h3>
            </div>
            <ul>
              <li>Plataforma completa: ventas, caja, entregas, cuenta corriente y cheques</li>
              <li>Frontend con flujos por rol (admin / encargado / repartidor)</li>
              <li>Backend con lógica contable y cierres de caja</li>
            </ul>
            <p className="tech">React · Node.js · Express · MySQL · Prisma · Ant Design · Linux/VPS</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Boiero Agropecuaria – Sitio Corporativo</h3>
            </div>
            <ul>
              <li>Sitio corporativo en producción: <a href="https://boieroagro.com.ar" target="_blank" rel="noreferrer">boieroagro.com.ar</a></li>
              <li>One-page estática con catálogo de 31 productos y carrusel autoplay</li>
              <li>SEO production-ready, sitemap automático y Google Search Console verificado</li>
            </ul>
            <p className="tech">Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Bot de Recordatorios en WhatsApp</h3>
            </div>
            <ul>
              <li>Recordatorios programados con control de ventana horaria</li>
              <li>Responde solo al contacto autorizado, evita estado "online"</li>
              <li>Reconexión automática y manejo seguro de sesión</li>
            </ul>
            <p className="tech">Node.js · Baileys · node-schedule · PM2</p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3>Mascota Virtual IoT</h3>
            </div>
            <ul>
              <li>Integración con sensores físicos mediante protocolo MQTT</li>
              <li>Registro de eventos y estados en base de datos</li>
            </ul>
            <p className="tech">Node.js · MQTT · MySQL · IoT Sensors</p>
          </div>
        </section>

        {/* ── SKILLS ───────────────── */}
        <section className="cv-section">
          <h2>Skills</h2>
          <div className="cv-skills">
            <div className="cv-skill-item">
              <h4>Backend</h4>
              <p>Node.js, Express, REST APIs, WebSockets</p>
            </div>
            <div className="cv-skill-item">
              <h4>Frontend</h4>
              <p>React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="cv-skill-item">
              <h4>Bases de datos</h4>
              <p>MySQL, Prisma ORM</p>
            </div>
            <div className="cv-skill-item">
              <h4>Infraestructura</h4>
              <p>Linux, VPS, Nginx, PM2, Deploy</p>
            </div>
            <div className="cv-skill-item">
              <h4>Hardware / IoT</h4>
              <p>RS232, MQTT, integración de sensores</p>
            </div>
            <div className="cv-skill-item">
              <h4>Herramientas</h4>
              <p>Git, GitHub, Postman, Figma, Vite</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default CV;
