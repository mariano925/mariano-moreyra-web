import "./Tecnologias.css"

function Tecnologias() {
  return (
    <section className="tecnologias" id="tecnologias">

      <div className="tecnologias-contenido">

        <p className="tecnologias-subtitle">
          TECNOLOGÍAS
        </p>

        <h2>
          Herramientas con las que desarrollo mis proyectos.
        </h2>

        <div className="tecnologias-lista">

          <div className="tecnologia">
            <h3>HTML</h3>
            <p>Estructura y semántica web.</p>
          </div>

          <div className="tecnologia">
            <h3>CSS</h3>
            <p>Diseño, responsive y experiencia visual.</p>
          </div>

          <div className="tecnologia">
            <h3>JavaScript</h3>
            <p>Lógica e interacción de aplicaciones web.</p>
          </div>

          <div className="tecnologia">
            <h3>React</h3>
            <p>Desarrollo de interfaces y aplicaciones web.</p>
          </div>

          <div className="tecnologia">
            <h3>Node.js</h3>
            <p>Desarrollo del lado del servidor.</p>
          </div>

          <div className="tecnologia">
            <h3>Git & GitHub</h3>
            <p>Control de versiones y gestión de proyectos.</p>
          </div>

          <div className="tecnologia">
            <h3>Vite</h3>
            <p>Herramienta para desarrollo frontend.</p>
          </div>

          <div className="tecnologia">
            <h3>Vercel</h3>
            <p>Publicación y despliegue de proyectos web.</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Tecnologias;