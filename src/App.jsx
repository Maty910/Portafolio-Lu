import { useEffect,useState } from 'react';
// import ScrollContainer from './Components/ScrollContainer';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';

function App() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);

  return (
    <>
      {/* <ScrollContainer>  */}
        <Home/>
        <About/>
        <Experience />
        <section className="projects" id="projects">
          <div className="projects-list">
            <h3>{language === 'es' ? 'Proyectos' : 'Projects'}</h3>
            <p>{language === 'es' ? 'Estos son algunos de los proyectos en los que he trabajado:' : 'These are some of the projects I have worked on:'}</p>
            <ul>
              <li>
                <img src="" alt="" />
                <button>{language === 'es' ? 'Proyecto 1' : 'Project 1'}</button>
              </li>
              <li>
                <img src="" alt="" />
                <button>{language === 'es' ? 'Proyecto 2' : 'Project 2'}</button>
              </li>
              <li>
                <img src="" alt="" />
                <button>{language === 'es' ? 'Proyecto 3' : 'Project 3'}</button>
              </li>
            </ul>
          </div>
        </section>
        <section className="services" id="services">
          <h3>{language === 'es' ? 'Servicios' : 'Services'}</h3>
          <p>{language === 'es' ? 'Estos son algunos de los servicios que ofrezco:' : 'These are some of the services I offer:'}</p>
        </section>
        <section className="contact" id="contact">
          <h3>{language === 'es' ? 'Contacto' : 'Contact'}</h3>
          <p>{language === 'es' ? 'Si quieres contactar conmigo, puedes hacerlo a través de LinkedIn o enviándome un correo electrónico a:' : 'If you want to contact me, you can do so through LinkedIn or by sending me an email at:'}</p>
          <a href="mailto:ejemplo@gmail.com"> mail</a>
          <form action="">
            <input type="text" placeholder={language === 'es' ? 'Nombre' : 'Name'} />
            <input type="email" placeholder={language === 'es' ? 'Correo electrónico' : 'Email'} />
            <textarea name="" id="" cols="30" rows="10" placeholder={language === 'es' ? 'Mensaje' : 'Message'}></textarea>
            <button>{language === 'es' ? 'Enviar' : 'Send'}</button>
          </form>
        </section>
        <footer id="footer">
          <p>© 2025 Lucía Castro. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </footer>
      {/* </ScrollContainer> */}
    </>
  )
}

export default App
