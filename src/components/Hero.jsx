import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="inicio">

      <p className="hero-subtitle">
        SITIOS WEB A MEDIDA
      </p>

      <h1 className="hero-title">
        Mariano Moreyra
      </h1>

      <p className="hero-description">
        Creo sitios web modernos, claros y funcionales para personas y
        proyectos que quieren tener su lugar en internet.
      </p>

      <p className="hero-location">
        Desde Gualeguay, Entre Ríos, para proyectos locales y a distancia.
      </p>

      <p className="hero-services">
        Landing pages · Sitios institucionales · Catálogos online
      </p>

      <div className="hero-buttons">
        <a href="#proyectos">Mira mis proyectos</a>
        <a href="#contacto">Escríbeme</a>
      </div>

    </section>
  )
}

export default Hero