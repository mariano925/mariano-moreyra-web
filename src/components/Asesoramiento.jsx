import "./Asesoramiento.css"

function Asesoramiento() {
  return (
    <section className="asesoramiento" id="asesoramiento">

      <div className="asesoramiento-contenido">

        <p className="asesoramiento-subtitle">
          ASESORAMIENTO
        </p>

        <h2>
          ¿No sabés por dónde empezar?
        </h2>

        <p className="asesoramiento-descripcion">
          Te ayudo a definir qué necesita tu negocio para tener
          una presencia web clara, profesional y adaptada a tus objetivos.
        </p>

        <div className="asesoramiento-lista">

          <div className="asesoramiento-item">
            <h3>Analizar tu necesidad</h3>
            <p>
              Entender qué querés comunicar y qué necesitás
              para tu negocio.
            </p>
          </div>

          <div className="asesoramiento-item">
            <h3>Definir la solución</h3>
            <p>
              Determinar qué tipo de sitio puede adaptarse
              mejor a tu proyecto.
            </p>
          </div>

          <div className="asesoramiento-item">
            <h3>Organizar el contenido</h3>
            <p>
              Pensar qué información, servicios, imágenes
              y formas de contacto debería tener tu sitio.
            </p>
          </div>

          <div className="asesoramiento-item">
            <h3>Orientarte en el proceso</h3>
            <p>
              Acompañarte con aspectos relacionados con
              publicación, dominio, redes sociales y mantenimiento.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Asesoramiento