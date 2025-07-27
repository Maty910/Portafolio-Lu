import { useState, useEffect } from "react";

import PhoneCard from "./PhoneCard"

// Si las imágenes están en la carpeta public/img, usar rutas públicas
const carousel1 = './src/assets/carousel1.jpg';
const carousel2 = './src/assets/carousel2.jpg';
const carousel3 = './src/assets/carousel3.jpg';
const carousel4 = './src/assets/carousel4.jpg';
const phone3 = './src/assets/phone3.png';
const desa2 = '/img/desa2.mp4';

const Experience = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);

  return (
    <section className="phone-section">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        preload="auto"
        src="/img/fondo.mp4"
        type="video/mp4"
        onError={(e) => console.error("Error loading video:", e)}
      ></video>
      
      {/* Teléfono 1 - Carrusel */}
      <PhoneCard type="carousel" images={[carousel1, carousel2, carousel3, carousel4]}>
        <ul>
          <li>Claridad</li>
          <li>Educativo y de valor</li>
          <li>Curiosidad</li>
        </ul>
      </PhoneCard>
      
      {/* Teléfono 2 - Video */}
      <PhoneCard type="video" video={desa2}>
        <ul>
          <li>Generar confianza</li>
          <li>Responder dudas</li>
          <li>Llamado a la acción claro</li>
        </ul>
      </PhoneCard>
      
      {/* Teléfono 3 - Imagen única */}
      <PhoneCard type="single" images={[phone3]}>
        <ul>
          <li>Urgencia</li>
          <li>CTA claro y directo</li>
        </ul>
      </PhoneCard>
    </section>
  );
}

export default Experience