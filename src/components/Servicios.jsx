import "./Servicios.css"

function Servicios() {
  return (
    <section className="servicios" id="servicios">

      <div className="servicios-contenido">

        <p className="servicios-subtitle">
          SERVICIOS
        </p>

        <h2>
          Soluciones web para hacer crecer tu negocio.
        </h2>

        <div className="servicios-lista">

          <article className="servicio">
            <h3>Landing pages</h3>
            <p>
              Páginas web enfocadas en presentar productos, servicios,
              profesionales o emprendimientos.
            </p>
          </article>

          <article className="servicio">
            <h3>Sitios web para emprendedores</h3>
            <p>
              Sitios personalizados para pequeños negocios y emprendimientos
              que necesitan tener presencia online.
            </p>
          </article>

          <article className="servicio">
            <h3>Páginas institucionales</h3>
            <p>
              Sitios para empresas, comercios, profesionales y organizaciones
              que necesitan presentar su actividad y servicios.
            </p>
          </article>

          <article className="servicio">
            <h3>Catálogos online</h3>
            <p>
              Catálogos digitales para mostrar productos o servicios de forma
              clara y accesible.
            </p>
          </article>

          <article className="servicio">
            <h3>Mantenimiento web</h3>
            <p>
              Actualización de contenido, imágenes, información y ajustes
              necesarios para mantener el sitio actualizado.
            </p>
          </article>

          <article className="servicio">
            <h3>Optimización y publicación</h3>
            <p>
              Configuración, publicación y optimización básica para dejar el
              sitio disponible online y preparado para buscadores.
            </p>
          </article>

        </div>

      </div>

    </section>
  )
}

export default Servicios