import { useState } from "react"
import "./Header.css"

function Header() {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <header className="header">

      <nav className="navbar">

        {/* =========================
            LOGO
        ========================= */}

        <div className="navbar-logo">
          <a href="#inicio" onClick={cerrarMenu}>
            Mariano Moreyra
          </a>
        </div>


        {/* =========================
            BOTÓN MENÚ MÓVIL
        ========================= */}

        <button
          className="navbar-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =========================
            NAVEGACIÓN
        ========================= */}

        <div
          className={`navbar-links ${
            menuAbierto ? "navbar-links--abierto" : ""
          }`}
        >

          <a href="#inicio" onClick={cerrarMenu}>
            Inicio
          </a>

          <a href="#sobre-mi" onClick={cerrarMenu}>
            Sobre mí
          </a>

          <a href="#servicios" onClick={cerrarMenu}>
            Servicios
          </a>

          <a href="#proyectos" onClick={cerrarMenu}>
            Proyectos
          </a>

          <a href="#contacto" onClick={cerrarMenu}>
            Contacto
          </a>

        </div>

      </nav>

    </header>
  )
}

export default Header

