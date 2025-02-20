import { useState, useEffect } from "react";

const Experience = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);

  return (
    <section className="phone-section">
    {/* <!-- Teléfono 1 --> */}
      <div className="phone-card">
      <i className="fa fa-snowflake"/>
        <img className="phone-mockup" src="./img/phone.png" alt="Teléfono 1" />
        <ul>
          <li>Claridad</li>
          <li>Educativo de valor</li>
          <li>Curiosidad</li>
        </ul>
      </div>

    {/* <!-- Teléfono 2 (con video, por ejemplo) --> */}
      <div className="phone-card">
        {/* <!-- Podés poner un video dentro de la “pantalla” del teléfono --> */}
        <img className="phone-mockup" src="./img/phone.png" alt="Teléfono 3" />
        <ul>
          <li>Generar confianza</li>
          <li>Responder dudas</li>
          <li>Llamado a la acción claro</li>
        </ul>
      </div>

    {/* <!-- Teléfono 3 --> */}
      <div className="phone-card">
      <img className="phone-mockup" src="./img/phone.png" alt="Teléfono 3" />
        <ul>
          <li>Urgencia</li>
          <li>CTA claro y directo</li>
        </ul>
      </div>
    </section>    
  )
}

export default Experience