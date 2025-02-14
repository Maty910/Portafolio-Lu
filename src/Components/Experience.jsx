import { useState, useEffect } from "react";

const Experience = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);

  return (
    <section className="experience" id="experience">
      <h3>{language === 'es' ? 'Experiencia' : 'Experience'}</h3>
      <p>{language === 'es' ? 'He trabajado en diferentes empresas como Social Media Manager:' : 'I have worked in different companies as a Social Media Manager:'}</p>
      <ul>
        <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 1' : 'Company 1'}</li>
        <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 2' : 'Company 2'}</li>
        <li><img src="/img/\Fondo abstracto.jpg" alt="" />{language === 'es' ? 'Empresa 3' : 'Company 3'}</li>
      </ul>
    </section>       
  )
}

export default Experience