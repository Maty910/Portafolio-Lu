import PhoneCard from "./PhoneCard"

// Importa las imágenes correctamente
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import phone3 from '../assets/phone3.png';

const Experience = () => {
  return (

    <section className="phone-section">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => console.error("Error loading video:", e)}
      >
        <source src="/img/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
      
      {/* Teléfono 1 - Carrusel */}
      <PhoneCard type="carousel" images={[carousel1, carousel2, carousel3, carousel4]}>
        <ul>
          <li>Claridad</li>
          <li>Educativo y de valor</li>
          <li>Curiosidad</li>
        </ul>
      </PhoneCard>
      
      {/* Teléfono 2 - Video */}
      <PhoneCard type="video" video="/img/desa2.mp4">
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