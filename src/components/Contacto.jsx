import "./Contacto.css"

function Contacto() {
  return (
    <section className="contacto" id="contacto">

      <div className="contacto-contenido">

        <p className="contacto-subtitle">
          CONTACTO
        </p>

        <h2>
          ¿Tenés un proyecto en mente?
        </h2>

        <p className="contacto-descripcion">
          Contame qué necesitás y podemos hablar sobre cómo llevar tu
          proyecto a la web.
        </p>

        <form className="contacto-form">

          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
            />
          </div>

          <div className="campo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              placeholder="Contame sobre tu proyecto..."
            ></textarea>
          </div>

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contacto