const specialties = [
  {
    number: "01",
    title: "Java empresarial",
    description:
      "Aplicaciones mantenibles sobre Java EE y Jakarta EE, con especial atención a arquitectura, integración y evolución del código.",
    tags: ["Java", "Jakarta EE", "Maven", "WildFly"],
  },
  {
    number: "02",
    title: "Experiencias web JSF",
    description:
      "Interfaces empresariales construidas con JSF y PrimeFaces, conectadas a servicios claros y flujos de negocio reales.",
    tags: ["JSF", "PrimeFaces", "Expression Language"],
  },
  {
    number: "03",
    title: "Developer tooling",
    description:
      "Herramientas que reducen fricción, hacen visible la arquitectura y aceleran la navegación por proyectos complejos.",
    tags: ["TypeScript", "VS Code API", "GitHub Actions"],
  },
];

const projects = [
  {
    name: "FirmaElectronica",
    description:
      "Implementación Java para firmar documentos XML y resolver un proceso técnico sensible de forma reutilizable.",
    stack: "Java · XML · Firma digital",
    href: "https://github.com/miguelparedes13/FirmaElectronica",
  },
  {
    name: "anthoSecurity",
    description:
      "Librería para generar códigos a partir de patrones de fechas, caracteres y números.",
    stack: "Java · Seguridad · Librería",
    href: "https://github.com/miguelparedes13/anthoSecurity",
  },
  {
    name: "ejemplo-maven",
    description:
      "Proyecto de referencia para estructurar aplicaciones Java con Maven y desplegarlas sobre WildFly.",
    stack: "Java · Maven · WildFly",
    href: "https://github.com/miguelparedes13/ejemplo-maven",
  },
];

const principles = [
  ["Problema primero", "La tecnología se elige después de entender qué debe resolverse."],
  ["Código que explica", "Nombres, estructura y documentación trabajan como una sola interfaz."],
  ["Calidad verificable", "Pruebas y automatización convierten la confianza en evidencia."],
  ["Evolución sostenible", "Cada solución debe poder crecer sin perder claridad."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="AnthoServ, inicio">
          <span className="brand-mark" aria-hidden="true">
            AS
          </span>
          <span className="brand-name">AnthoServ</span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#especialidades">Especialidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#enfoque">Enfoque</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Conversemos <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="contenido">
        <section className="hero section-shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Java Software Developer · Loja, Ecuador
            </p>

            <h1>
              Software empresarial
              <span>con criterio técnico.</span>
            </h1>

            <p className="hero-intro">
              Soy <strong>AnthoServ</strong>. Construyo soluciones Java y herramientas
              para desarrolladores que convierten sistemas complejos en experiencias
              claras, mantenibles y productivas.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/AnthoServ-Ship-it/jsf-el-navigator"
              >
                Explorar proyecto principal <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-secondary"
                href="https://informaticosistema.wordpress.com"
              >
                Leer mis artículos
              </a>
            </div>

            <ul className="hero-signals" aria-label="Áreas principales">
              <li>
                <span>Stack</span>
                Java · Jakarta EE
              </li>
              <li>
                <span>Especialidad</span>
                JSF · PrimeFaces
              </li>
              <li>
                <span>Enfoque</span>
                Producto · Calidad
              </li>
            </ul>
          </div>

          <div className="architecture-card" aria-label="Arquitectura de experiencia AnthoServ">
            <div className="architecture-topbar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>anthoserv.architecture</span>
              <span className="live-label">LIVE</span>
            </div>

            <div className="architecture-body">
              <div className="code-line muted">
                <span>01</span> package dev.anthoserv;
              </div>
              <div className="code-line">
                <span>02</span> public class <b>Experience</b> &#123;
              </div>
              <div className="code-line indent">
                <span>03</span> problem.resolve();
              </div>
              <div className="code-line indent accent">
                <span>04</span> architecture.keepClear();
              </div>
              <div className="code-line indent">
                <span>05</span> quality.verify();
              </div>
              <div className="code-line">
                <span>06</span> &#125;
              </div>
            </div>

            <div className="flow-map" aria-hidden="true">
              <div className="flow-node active">
                <small>01</small>
                XHTML
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <small>02</small>
                Bean
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <small>03</small>
                Service
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <small>04</small>
                Data
              </div>
            </div>

            <div className="architecture-footer">
              <span>CTRL + CLICK</span>
              <span className="architecture-result">Definición encontrada</span>
            </div>
          </div>
        </section>

        <div className="capability-strip" aria-label="Tecnologías principales">
          <div className="capability-track">
            <span>JAVA</span><i>◆</i><span>JAKARTA EE</span><i>◆</i><span>JSF</span>
            <i>◆</i><span>PRIMEFACES</span><i>◆</i><span>TYPESCRIPT</span><i>◆</i>
            <span>DEVELOPER TOOLING</span>
          </div>
        </div>

        <section className="section-shell section-block" id="especialidades">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 · Especialidades</p>
              <h2>Experiencia que conecta negocio y código.</h2>
            </div>
            <p>
              Desarrollo soluciones pensadas para funcionar hoy y seguir siendo
              comprensibles mañana.
            </p>
          </div>

          <div className="specialty-grid">
            {specialties.map((specialty) => (
              <article className="specialty-card" key={specialty.number}>
                <span className="card-number">{specialty.number}</span>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
                <div className="tag-list">
                  {specialty.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-project" id="proyectos">
          <div className="section-shell featured-grid">
            <div className="featured-copy">
              <p className="section-kicker light">02 · Proyecto destacado</p>
              <p className="project-label">Open source · VS Code Extension</p>
              <h2>JSF EL Navigator</h2>
              <p className="featured-lead">
                Navegación inteligente para proyectos JSF y PrimeFaces dentro de
                Visual Studio Code.
              </p>
              <p>
                Convierte expresiones EL en rutas navegables: del XHTML al controlador,
                del controlador al servicio y de la interfaz a su implementación Java.
                Todo con el gesto natural de <kbd>Ctrl</kbd> + clic.
              </p>

              <ul className="feature-list">
                <li>Managed Beans y beans CDI</li>
                <li>Servicios, interfaces e implementaciones</li>
                <li>Métodos, propiedades y sobrecargas</li>
                <li>Autocompletado, diagnósticos y referencias</li>
              </ul>

              <a
                className="button button-light"
                href="https://github.com/AnthoServ-Ship-it/jsf-el-navigator"
              >
                Ver código en GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="navigator-demo" aria-label="Ejemplo de navegación de JSF EL Navigator">
              <div className="demo-titlebar">
                <span>turnos.xhtml</span>
                <span>AdministrarTicketsController.java</span>
              </div>
              <div className="demo-editor">
                <span className="demo-line-number">23</span>
                <code>
                  value=<em>&quot;#&#123;administrarTicketsController</em>
                  <mark>.obtenerLosDestinos()</mark>
                  <em>&#125;&quot;</em>
                </code>
                <div className="definition-popover">
                  <span className="popover-icon">↳</span>
                  <div>
                    <strong>Ir a la definición</strong>
                    <small>AdministrarTicketsController.java:95</small>
                  </div>
                </div>
              </div>
              <div className="demo-route">
                <div><span>CONTROLADOR</span>obtenerLosDestinos()</div>
                <b>→</b>
                <div><span>SERVICIO</span>facadeTurnos.obtenerDestinos…</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block project-archive">
          <div className="section-heading compact">
            <div>
              <p className="section-kicker">03 · Archivo público</p>
              <h2>Más trabajo compartido.</h2>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <a className="project-row" href={project.href} key={project.name}>
                <span className="project-index">0{index + 1}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-stack">{project.stack}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section-shell section-block approach" id="enfoque">
          <div className="approach-intro">
            <p className="section-kicker">04 · Forma de trabajo</p>
            <h2>Menos ruido. Más intención.</h2>
            <p>
              La ingeniería de software es una disciplina de decisiones. Estas son las
              que guían mi trabajo.
            </p>
          </div>

          <div className="principle-list">
            {principles.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-shell contact-inner">
            <p className="section-kicker light">05 · Contacto</p>
            <h2>Construyamos algo que valga la pena mantener.</h2>
            <p>
              Puedes conocer el código, seguir el desarrollo de mis herramientas o leer
              las notas técnicas que comparto.
            </p>
            <div className="contact-links">
              <a href="https://github.com/AnthoServ-Ship-it">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="https://informaticosistema.wordpress.com">
                Blog técnico <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} AnthoServ</span>
        <span>Java · Arquitectura · Developer Experience</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
