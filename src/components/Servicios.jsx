import "./Servicios.css"

function Servicios() {
  return (
    <section className="servicios" id="servicios">

      <div className="servicios-contenido">

        <p className="servicios-subtitle">
          SERVICIOS
        </p>

        <h2>
          Cada proyecto, idea o emprendimiento necesita una presencia web
          pensada para sus propias necesidades.
        </h2>

        <div className="servicios-lista">

          <article className="servicio">
            <h3>Landing pages</h3>
            <p>
              Páginas web pensadas para presentar una propuesta, producto,
              servicio, profesional, idea o emprendimiento de forma clara
              y directa.
            </p>
          </article>

          <article className="servicio">
            <h3>Sitios web personalizados</h3>
            <p>
              Sitios adaptados a personas, profesionales, emprendimientos,
              comercios, proyectos y organizaciones que quieren tener un
              espacio propio en internet.
            </p>
          </article>

          <article className="servicio">
            <h3>Páginas institucionales</h3>
            <p>
              Sitios para empresas, comercios, profesionales e instituciones
              que necesitan presentar su actividad, servicios e información.
            </p>
          </article>

          <article className="servicio">
            <h3>Catálogos online</h3>
            <p>
              Espacios digitales para mostrar productos o servicios de manera
              ordenada, accesible y fácil de consultar.
            </p>
          </article>

          <article className="servicio">
            <h3>Mantenimiento web</h3>
            <p>
              Actualización de contenido, imágenes e información para mantener
              el sitio al día y adaptarlo a las necesidades del proyecto.
            </p>
          </article>

          <article className="servicio">
            <h3>Optimización y publicación</h3>
            <p>
              Configuración y publicación del sitio, junto con ajustes básicos
              para mejorar su funcionamiento y facilitar su presencia en
              buscadores.
            </p>
          </article>

        </div>

      </div>

    </section>
  )
}

export default Servicios

