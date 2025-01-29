function App() {

  return (
    <>
      <nav>
        <ul>
          {/* <li><button>Inicio</button></li>
          <li><button>Proyectos</button></li>
          <li><button>Experiencia</button></li>
          <li><button>Contacto</button></li> */}
          <li><button>Language</button></li>
        </ul>
      </nav>
      <header>
          {/* <img src="/img/Fondo abstracto.jpg" alt="Fondo abstracto" /> */}
          {/* <h1>Lucía Castro</h1>
          <h2>Social Media Manager</h2>
          <h4>Community Manager</h4> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque quisquam odio, tempora repellat nisi eius error quo dolore asperiores aspernatur aliquid sequi facilis nesciunt enim pariatur! Dolore, at velit.</p>
      </header>
      <section className="about">
        <div>
        <img src="/img/Fondo abstracto.jpg" alt="Fondo abstracto" />
          <h3>¡Hola! Soy Lucía Castro, Social Media Manager! lore</h3>
          <p>Me dedico a la gestión de redes sociales desde hace 5 años. Me apasiona el mundo digital y me encanta ayudar a las empresas a crecer en el mundo online. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis tempore nam quos necessitatibus possimus quidem et exercitationem dolore. Earum reprehenderit libero accusamus corrupti laborum ipsam. Distinctio quisquam quae rerum error.</p>
        </div>
        <button><a href="https://www.linkedin.com/in/luc%C3%ADa-castro-84a198281/" target="_blank" rel="noopener noreferrer">Contáctame en LinkedIn</a></button>
      </section>
      <section>
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
      </section>
      <section>
        <h3>Experiencia</h3>
        <p>He trabajado en diferentes empresas como Social Media Manager:</p>
        <ul>
          <li>Empresa 1</li>
          <li>Empresa 2</li>
          <li>Empresa 3</li>
        </ul>
      </section>
      <section>
        <h3>Servicios</h3>
        <p>Estos son algunos de los servicios que ofrezco:</p>
      </section>
      <section>
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
      <footer>
        <p>© 2025 Lucía Castro. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
