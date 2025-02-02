function App() {

  return (
    <>
      <div className="scroll-container">
        <nav>
          <ul>
            <li><button><a href="#about">About me</a></button></li>
            <li><button><a href="#experience">Experience</a></button></li>
            <li><button><a href="#contact">Message me</a></button></li>
            <button className="language">Language</button>
          </ul>
        </nav>
        <header className="home" id="home">
          <div className="home-content">
            <h1 data-text="True growth lies in learning every day">
              True growth <br/> lies in <br/> learning <br/> every day
            </h1>
            <button className="seework">See my work!</button>
          </div>
        </header>
        <section className="about" id="about">
          <div>
            <img src="/img/PERFIL.svg" />
            <h2>Lucía Castro</h2>
            <h3>Social Media Manager, <br /> Community Manager & <br />Trafficker</h3>
            <p>I'm a proactive, curious person with a passion for constant learning.
              I focus on connecting brands with their audience authentically, optimizing 
              every action for results. I'm always seeking new challenges and strategies 
              to keep growing professionally.
            </p>
            <button className="lnkdnbutton"><a href="https://www.linkedin.com/in/luc%C3%ADa-castro-84a198281/" target="_blank" rel="noopener noreferrer">Contáctame en LinkedIn</a></button>
          </div>
        </section>
        <section className="experience" id="experience">
          <div className="video-background">
            <video src="/img/BANNER.mp4" autoPlay muted loop></video>
          </div>
          <h3>Experiencia</h3>
          <p>He trabajado en diferentes empresas como Social Media Manager:</p>
          <ul>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />Empresa 1</li>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />Empresa 2</li>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />Empresa 3</li>
          </ul>
        </section>
        <section className="projects" id="projects">
          <div className="projects-list">
            <h3>Proyectos</h3>
            <p>Estos son algunos de los proyectos en los que he trabajado:</p>
            <ul>
              <li>
                <img src="" alt="" />
                <button>Proyecto 1</button>
              </li>
              <li>
                <img src="" alt="" />
                <button>Proyecto 2</button>
              </li>
              <li>
                <img src="" alt="" />
                <button>Proyecto 3</button>
              </li>
            </ul>
          </div>
        </section>
        <section className="services" id="services">
          <h3>Servicios</h3>
          <p>Estos son algunos de los servicios que ofrezco:</p>
        </section>
        <section className="contact" id="contact">
          <h3>Contacto</h3>
          <p>Si quieres contactar conmigo, puedes hacerlo a través de LinkedIn o enviándome un correo electrónico a:</p>
          <a href="mailto"> </a>
          <form action="">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <button>Enviar</button>
          </form>
        </section>
        <footer id="footer">
          <p>© 2025 Lucía Castro. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  )
}

export default App
