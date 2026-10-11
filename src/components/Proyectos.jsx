
import "./Proyectos.css"

const proyectos = [
  {
    nombre: "Frigotec",
    categoria: "Proyecto para cliente",
    titulo: "Sitio web — Frigotec",
    descripcion:
      "Sitio web para una empresa de refrigeración comercial, diseñado para presentar sus servicios, sectores de atención y canales de contacto de forma clara y profesional.",
    tecnologias: ["React", "Vite", "CSS", "Vercel"],
    demo: "https://frigotec-web.vercel.app/",
    estado: "Publicado",
  },
  {
    nombre: "Service Refrigeración",
    categoria: "Proyecto para cliente",
    titulo: "Sitio web — Service Refrigeración",
    descripcion:
      "Sitio web de servicios de refrigeración y aire acondicionado, con información orientada a facilitar la consulta de servicios y el contacto con el negocio.",
    tecnologias: ["React", "Vite", "CSS", "Vercel"],
    demo: "https://www.service-heladerasrch.com.ar/",
    github: "https://github.com/mariano925/service-refrigeracion-react",
    estado: "Publicado",
  },
  {
    nombre: "MeteoGlass",
    categoria: "Proyecto personal",
    titulo: "Aplicación del clima — MeteoGlass",
    descripcion:
      "Aplicación web para consultar las condiciones meteorológicas y los pronósticos, con diseño responsive, una interfaz basada en glassmorphism e información de Open-Meteo.",
    tecnologias: ["React", "Vite", "JavaScript", "CSS", "Open-Meteo"],
    demo: "https://react-profesional-app-mu.vercel.app/",
    estado: "Publicado",
  },
  {
    nombre: "Landing Page — Nicolás",
    categoria: "Proyecto web",
    titulo: "Landing page para un artista",
    descripcion:
      "Página de presentación para un artista, con información sobre su trabajo y trayectoria, una estructura clara y adaptación a distintos dispositivos.",
    tecnologias: ["React", "Vite", "CSS", "Vercel"],
    demo: "https://nicolasgualeguay.vercel.app/",
    estado: "Publicado",
  },
  {
    nombre: "Datos Abiertos",
    categoria: "Proyecto personal",
    titulo: "Explorador de datos públicos",
    descripcion:
      "Aplicación web orientada a explorar indicadores y estadísticas públicas de Argentina, con visualizaciones que facilitan la consulta y comprensión de los datos.",
    tecnologias: ["React", "Vite", "JavaScript", "Recharts", "CSS"],
    demo: "https://datos-abiertos-eight.vercel.app/",
    estado: "Publicado",
  },
  {
    nombre: "Pulso Público",
    categoria: "Proyecto personal · En desarrollo",
    titulo: "Dashboard de datos públicos",
    descripcion:
      "Proyecto en evolución enfocado en datos públicos de Argentina y Entre Ríos. Presenta indicadores y estadísticas mediante visualizaciones para facilitar la exploración de información.",
    tecnologias: ["React", "Vite", "JavaScript", "Recharts", "CSS"],
    demo: "https://pulso-p-blico.vercel.app/",
    github: "https://github.com/mariano925/Pulso-P-blico",
    estado: "En desarrollo",
  },
]

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos-contenido">
        <p className="proyectos-subtitle">PROYECTOS</p>

        <h2>Trabajos y proyectos en los que estoy trabajando.</h2>

        <p className="proyectos-descripcion">
          Una selección de sitios web y aplicaciones que desarrollé
          para clientes y como parte de mi formación profesional.
        </p>

        <div className="proyectos-lista">
          {proyectos.map((proyecto, index) => (
            <article className="proyecto" key={proyecto.nombre}>
              <div
                className={`proyecto-imagen proyecto-imagen-${index + 1}`}
                role="img"
                aria-label={`Espacio reservado para la captura de ${proyecto.nombre}`}
              >
                <span className="proyecto-imagen-etiqueta">
                  Captura del proyecto
                </span>
              </div>

              <div className="proyecto-info">
                <p className="proyecto-categoria">
                  {proyecto.categoria}
                </p>

                <h3>{proyecto.titulo}</h3>

                <p className="proyecto-texto">
                  {proyecto.descripcion}
                </p>

                <ul
                  className="proyecto-tecnologias"
                  aria-label="Tecnologías utilizadas"
                >
                  {proyecto.tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>

                <div className="proyecto-links">
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${proyecto.nombre} en una nueva pestaña`}
                  >
                    Ver proyecto
                    <span aria-hidden="true"> ↗</span>
                  </a>

                  {proyecto.github && (
                    <a
                      className="proyecto-link-secundario"
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver el código de ${proyecto.nombre} en GitHub`}
                    >
                      GitHub
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}

                  <span
                    className={`proyecto-estado ${
                      proyecto.estado === "En desarrollo"
                        ? "proyecto-estado-desarrollo"
                        : ""
                    }`}
                  >
                    {proyecto.estado}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
