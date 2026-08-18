import "./Tecnologias.css"

function Tecnologias() {
  return (
    <section className="tecnologias" id="tecnologias">

      <div className="tecnologias-contenido">

        <p className="tecnologias-subtitle">
          TECNOLOGÍAS
        </p>

        <h2>
          Herramientas que utilizo para crear y publicar sitios web.
        </h2>

        <div className="tecnologias-lista">

          <div className="tecnologia">
            <h3>HTML</h3>
            <p>
              Estructura y organización del contenido de cada sitio web.
            </p>
          </div>

          <div className="tecnologia">
            <h3>CSS</h3>
            <p>
              Diseño visual, adaptación a distintos dispositivos y estilos.
            </p>
          </div>

          <div className="tecnologia">
            <h3>JavaScript</h3>
            <p>
              Interacción y funcionalidades para sitios y aplicaciones web.
            </p>
          </div>

          <div className="tecnologia">
            <h3>React</h3>
            <p>
              Desarrollo de interfaces y aplicaciones web dinámicas.
            </p>
          </div>

          <div className="tecnologia">
            <h3>Node.js</h3>
            <p>
              Desarrollo de funcionalidades y aplicaciones del lado del servidor.
            </p>
          </div>

          <div className="tecnologia">
            <h3>Git & GitHub</h3>
            <p>
              Control de versiones y organización del código de los proyectos.
            </p>
          </div>

          <div className="tecnologia">
            <h3>Vite</h3>
            <p>
              Herramienta utilizada para desarrollar proyectos frontend modernos.
            </p>
          </div>

          <div className="tecnologia">
            <h3>Vercel</h3>
            <p>
              Publicación y despliegue de sitios y proyectos web.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Tecnologias