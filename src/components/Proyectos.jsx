import "./Proyectos.css"

function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">

      <div className="proyectos-contenido">

        <p className="proyectos-subtitle">
          PROYECTOS
        </p>

        <h2>
          Algunos de mis trabajos y próximos proyectos.
        </h2>

        <div className="proyectos-lista">

          {/* Proyecto Nicolás */}

          <article className="proyecto">

            <div className="proyecto-imagen">
              <p>Imagen del proyecto</p>
            </div>

            <div className="proyecto-info">

              <h3>
                Landing Page — Nicolás
              </h3>

              <p>
                Landing page desarrollada para presentar el trabajo y la
                trayectoria de un artista.
              </p>

              <p className="proyecto-tecnologias">
                React · Vite · CSS · Vercel
              </p>

              <div className="proyecto-links">

                <a href="#" target="_blank" rel="noreferrer">
                  Ver proyecto
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>

              </div>

            </div>

          </article>


          {/* Proyecto Electricista */}

          <article className="proyecto">

            <div className="proyecto-imagen">
              <p>Imagen del proyecto</p>
            </div>

            <div className="proyecto-info">

              <h3>
                Landing Page — Electricista
              </h3>

              <p>
                Landing page diseñada para presentar los servicios de un
                profesional y facilitar el contacto con potenciales clientes.
              </p>

              <p className="proyecto-tecnologias">
                HTML · CSS · JavaScript · Vercel
              </p>

              <div className="proyecto-links">

                <a href="#" target="_blank" rel="noreferrer">
                  Ver proyecto
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>

              </div>

            </div>

          </article>


          {/* Próximo proyecto: Catálogo */}

          <article className="proyecto proyecto-futuro">

            <div className="proyecto-imagen">
              <p>Próximamente</p>
            </div>

            <div className="proyecto-info">

              <h3>
                Catálogo Online
              </h3>

              <p>
                Próximo proyecto orientado a la presentación de productos
                o servicios de forma clara, accesible y adaptada a cada negocio.
              </p>

              <p className="proyecto-tecnologias">
                React · Vite · CSS · JavaScript
              </p>

              <div className="proyecto-links">

                <a href="#contacto">
                  Próximamente
                </a>

              </div>

            </div>

          </article>


          {/* Próximo proyecto: Institucional */}

          <article className="proyecto proyecto-futuro">

            <div className="proyecto-imagen">
              <p>Próximamente</p>
            </div>

            <div className="proyecto-info">

              <h3>
                Página Institucional
              </h3>

              <p>
                Próximo proyecto destinado a presentar la identidad,
                servicios e información de una empresa o negocio.
              </p>

              <p className="proyecto-tecnologias">
                Ract . vite · CSS · JavaScript
              </p>

              <div className="proyecto-links">

                <a href="#contacto">
                  Próximamente
                </a>

              </div>

            </div>

          </article>

        </div>

      </div>

    </section>
  )
}

export default Proyectos