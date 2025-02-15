import { useEffect, useState } from "react";

const Home = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);
  
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <div className='home-background'>
      <nav>
        <ul>
          <li>
            <a href="#about">{language === 'es' ? 'Sobre mí' : 'About me'}</a>
          </li>
          <li>
            <a href="#experience">{language === 'es' ? 'Experiencia' : 'Experience'}</a>
          </li>
          <li>
            <a href="#contact">{language === 'es' ? 'Contactame' : 'Message me'}</a>
          </li>
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
          <button className="seework">
            <a href="#about">{language === 'es' ? '¡Ver más!' : 'Learn more!'}</a>
          </button>
          <img className="arrows" src="./img/arrows.png" alt="" />
        </div>
      </header>
    </div>
  )
}

export default Home