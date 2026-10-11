import "./Footer.css"

function Footer() {
  const telefono = "543444634392"
  const mensaje = encodeURIComponent(
    "Hola Mariano, visité tu portfolio y quisiera consultar por tus servicios de desarrollo web."
  )

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-logo">
          <h3>Mariano Moreyra</h3>
          <p>Desarrollo web</p>
        </div>

        <nav className="footer-links" aria-label="Navegación del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-redes" aria-label="Canales de contacto">
          <a
            href={`https://wa.me/${telefono}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Mariano por WhatsApp"
          >
            WhatsApp
          </a>

          <span
            className="footer-red-proximamente"
            aria-label="Instagram próximamente"
          >
            Instagram · Próximamente
          </span>
        </div>

        <div className="footer-precios">
          <a href={`https://wa.me/${telefono}?text=${encodeURIComponent(
            "Hola Mariano, quisiera consultar los precios de tus servicios de desarrollo web."
          )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar precios
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Mariano Moreyra. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
