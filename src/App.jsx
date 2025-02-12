import React from 'react';

function App() {
  React.useEffect(() => {
    setLanguage('en');
  }, []);

  const [language, setLanguage] = React.useState('es');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      <div className="scroll-container">


      {/* <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_79e34da0.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        autoplay>
      </lottie-player> */}

        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}

        <div className='home-background'>
          <nav>
            <ul>
              <li><button><a href="#about">{language === 'es' ? 'Sobre mí' : 'About me'}</a></button></li>
              <li><button><a href="#experience">{language === 'es' ? 'Experiencia' : 'Experience'}</a></button></li>
              <li><button><a href="#contact">{language === 'es' ? 'Contactame' : 'Message me'}</a></button></li>
              <button className="language" onClick={toggleLanguage}>
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </ul>
          </nav>
          <header className={`home ${language}`} id="home">
            <div className="home-content">
              <h1 data-text={language === 'es' ? 'El verdadero crecimiento está en aprender cada día' : 'True growth lies in learning every day'}>
                {language === 'es' ? 'El verdadero crecimiento' : 'True growth'} <br/> 
                {language === 'es' ? 'está en' : 'lies in'} <br/> 
                {language === 'es' ? 'aprender' : 'learning'} <br/> 
                {language === 'es' ? 'cada día' : 'every day'}
              </h1>
              <button className="seework"><a href="#about">{language === 'es' ? '¡Ver más!' : 'Learn more!'}</a></button>
            </div>
          </header>
        </div>
        <section className="about" id="about">
          <div>
            <img src="/img/PERFIL.png" />
            <h2>Lucía Castro</h2>
            <h3>{language === 'es' ? 'Social Media Manager, Community Manager & Trafficker' : 'Social Media Manager, Community Manager & Trafficker'}</h3>
            <p>{language === 'es' ? 
              'Soy una persona proactiva, curiosa y apasionada por el aprendizaje constante. Me enfoco en conectar marcas con su audiencia de manera auténtica, optimizando cada acción para obtener resultados. Siempre estoy en busca de nuevos desafíos y estrategias para seguir creciendo profesionalmente.' : 
              'I’m a proactive, curious person with a passion for constant learning.I focus on connecting brands with their audience authentically, optimizing every action for results. I’m always seeking new challenges and strategies to keep growing professionally.'}
            </p>
            <button className="email-button">
               <a href="mailto:matychacong@gmail.com" target="_blank">{language === 'es' ? 'Enviar correo' : 'Send Email'}</a>
            </button>
          </div>
            <button className="lnkdnbutton"><a href="" target="_blank" rel="noopener noreferrer"><img src="/img/lkdn logo.png" alt="" /></a></button>
        </section>
        <section className="experience" id="experience">
          <h3>{language === 'es' ? 'Experiencia' : 'Experience'}</h3>
          <p>{language === 'es' ? 'He trabajado en diferentes empresas como Social Media Manager:' : 'I have worked in different companies as a Social Media Manager:'}</p>
          <ul>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 1' : 'Company 1'}</li>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 2' : 'Company 2'}</li>
            <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 3' : 'Company 3'}</li>
          </ul>
        </section>
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
      </div>
    </>
  )
}

export default App
