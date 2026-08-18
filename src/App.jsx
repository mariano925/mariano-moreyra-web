import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import SobreMi from "./components/SobreMi.jsx"
import Servicios from "./components/Servicios.jsx"
import Asesoramiento from "./components/Asesoramiento.jsx"
import Proyectos from "./components/Proyectos.jsx"
import Tecnologias from "./components/Tecnologias.jsx"
import Contacto from "./components/Contacto.jsx"
import Footer from "./components/Footer.jsx"

import "./App.css"

import "./Responsive.css"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SobreMi />
      <Servicios />
      <Asesoramiento />
      <Proyectos />
      <Tecnologias />
      <Contacto />
      <Footer />
    </>
  )
}

export default App