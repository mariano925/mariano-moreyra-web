import "./Contacto.css"

function Contacto() {
  const telefono = "5491139384849"
  const mensaje = encodeURIComponent(
    "Hola Mariano, vi tu portfolio y quisiera consultar por un proyecto web."
  )

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-contenido">
        <p className="contacto-subtitle">
          CONTACTO
        </p>

        <h2>
          ¿Tenés una idea o un proyecto en mente?
        </h2>

        <p className="contacto-descripcion">
          Contame qué tenés en mente, aunque todavía sea solo una idea.
          Podemos conversar sobre cómo llevarla a la web.
        </p>

        <div className="contacto-whatsapp">
          <h3>Hablemos por WhatsApp</h3>

          <p>
            Escribime directamente para contarme tu idea o consultar
            por mis servicios de desarrollo web.
          </p>

          <a
            className="contacto-boton-whatsapp"
            href={`https://wa.me/${telefono}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Mariano por WhatsApp"
          >
            Contactarme por WhatsApp
          </a>

          <p className="contacto-telefono">
            WhatsApp: +54 3444 634392
          </p>
        </div>

        <div className="contacto-en-construccion">
          <h3>Formulario de contacto</h3>

          <p>
            Esta sección está en construcción. Por el momento,
            podés contactarme directamente por WhatsApp.
          </p>

          <span className="contacto-estado">
            En construcción
          </span>
        </div>

        <div className="contacto-instagram">
          <h3>Instagram</h3>

          <p>
            Mi espacio profesional en Instagram estará disponible
            próximamente.
          </p>

          <span className="contacto-estado">
            Próximamente
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contacto
