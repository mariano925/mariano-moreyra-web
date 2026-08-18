import "./Hero.css"
function Hero() {
  return (
    <section className="hero" id="inicio">

      <p className="hero-subtitle">
        DESARROLLO WEB
      </p>

      <h1 className="hero-title">
        Mariano Moreyra
      </h1>

      <p className="hero-description">
        Creo sitios web para emprendedores y pequeños negocios.
      </p>

      <p className="hero-services">
        Landing pages · Sitios institucionales · Catálogos
      </p>

      <div className="hero-buttons">
        <a href="#proyectos">Mira mis proyectos</a>
        <a href="#contacto">Escríbeme</a>
      </div>

    </section>
  )
}

export default Hero;