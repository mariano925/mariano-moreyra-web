import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-contenido">

        <div className="footer-logo">
          <h3>Mariano Moreyra</h3>
          <p>Desarrollo Web</p>
        </div>

        <nav className="footer-links">

          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>

        </nav>

        <div className="footer-redes">

          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/usuario/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

        </div>

        <div className="footer-precios">

          <a href="#">
            Lista de precios
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