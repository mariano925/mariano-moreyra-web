import "./Proyectos.css";

const proyectos = [
  {
    nombre: "Frigotec",
    categoria: "Proyecto para cliente",
    descripcion:
      "Sitio web para un servicio técnico de refrigeración, con una presentación clara de sus servicios y canales de contacto.",
    imagen: "/proyectos/frigotec.webp",
    alt: "Captura del sitio web de Frigotec",
    tecnologias: ["React", "Vite", "CSS"],
    demo: "https://frigotec-web.vercel.app/",
  },
  {
    nombre: "Service Refrigeración",
    categoria: "Proyecto para cliente",
    descripcion:
      "Sitio web para un servicio técnico de heladeras y aire acondicionado, pensado para presentar los servicios y facilitar las consultas.",
    imagen: "/proyectos/services.webp",
    alt: "Captura del sitio web de Service Refrigeración",
    tecnologias: ["React", "Vite", "CSS"],
    demo: "https://www.service-heladerasrch.com.ar/",
    github: "https://github.com/mariano925/service-refrigeracion-react",
  },
  {
    nombre: "MeteoGlass",
    categoria: "Proyecto personal",
    descripcion:
      "Aplicación meteorológica que permite consultar condiciones del tiempo y explorar información climática de distintas localidades.",
    imagen: "/proyectos/cielovivo.webp",
    alt: "Captura de la aplicación meteorológica MeteoGlass",
    tecnologias: ["React", "API", "Leaflet"],
    demo: "https://react-profesional-app-mu.vercel.app/",
  },
  {
    nombre: "Landing Page — Nicolás",
    categoria: "Proyecto web",
    descripcion:
      "Página de presentación diseñada para comunicar los servicios y facilitar el contacto con potenciales clientes.",
    imagen: "/proyectos/nicolas.webp",
    alt: "Captura de la landing page de Nicolás",
    tecnologias: ["React", "Vite", "CSS"],
    demo: "https://nicolasgualeguay.vercel.app/",
  },
  {
    nombre: "Datos Abiertos",
    categoria: "Proyecto personal",
    descripcion:
      "Proyecto de exploración de datos públicos orientado a presentar indicadores de Argentina, Entre Ríos y Gualeguay.",
    imagen: "/proyectos/datosabiertos.webp",
    alt: "Captura del proyecto Datos Abiertos",
    tecnologias: ["React", "Vite", "Datos públicos"],
    demo: "https://datos-abiertos-eight.vercel.app/",
  },
  {
    nombre: "Pulso Público",
    categoria: "Proyecto personal",
    estado: "En desarrollo",
    descripcion:
      "Dashboard de datos públicos que busca facilitar la consulta y comparación de indicadores demográficos y sociales.",
    imagen: "/proyectos/pulso.webp",
    alt: "Captura del dashboard Pulso Público",
    tecnologias: ["React", "Vite", "Recharts"],
    demo: "https://pulso-p-blico.vercel.app/",
    github: "https://github.com/mariano925/Pulso-P-blico",
  },
];

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-contenedor">
        <header className="proyectos-header">
          <p className="proyectos-etiqueta">Mi trabajo</p>
          <h2>Proyectos destacados</h2>
          <p className="proyectos-intro">
            Una selección de sitios web y aplicaciones que desarrollé para
            clientes y como parte de mi aprendizaje.
          </p>
        </header>

        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <article className="proyecto-card" key={proyecto.nombre}>
              <div className="proyecto-imagen">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="proyecto-contenido">
                <div className="proyecto-meta">
                  <span className="proyecto-categoria">
                    {proyecto.categoria}
                  </span>

                  {proyecto.estado && (
                    <span className="proyecto-estado">
                      {proyecto.estado}
                    </span>
                  )}
                </div>

                <h3>{proyecto.nombre}</h3>
                <p className="proyecto-descripcion">
                  {proyecto.descripcion}
                </p>

                <ul className="proyecto-tecnologias" aria-label="Tecnologías">
                  {proyecto.tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>

                <div className="proyecto-enlaces">
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-link"
                  >
                    Ver proyecto
                    <span aria-hidden="true"> ↗</span>
                  </a>

                  {proyecto.github && (
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proyecto-link proyecto-link-secundario"
                    >
                      Ver código
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;