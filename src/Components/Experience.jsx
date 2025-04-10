import { useState, useEffect } from "react";

import PhoneCard from "./PhoneCard"

import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import carousel4 from '../assets/carousel4.jpg'
import phone3 from '../assets/phone3.png'

const desa2 = '/img/desa2.mp4';

const carousel11 = '../assets/carousel1.jpg';
const carousel22 = '../assets/carousel2.jpg';
const carousel33 = '../assets/carousel3.jpg';
const carousel44 = '../assets/carousel4.jpg';


const Experience = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage('en');
  }, []);

  // const carouselImages = [
  //   '.img/phone1.jng'
  // ]

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
      {/* <!-- Teléfono 1 --> */}
      <PhoneCard type="carousel" images={[carousel11, carousel22, carousel33, carousel44]}>
        <ul>
          <li>Claridad</li>
          <li>Educativo y de valor</li>
          <li>Curiosidad</li>
        </ul>
      </PhoneCard>
      {/* <!-- Teléfono 2 (con video, por ejemplo) --> */}
      <PhoneCard type="video" video={desa2}>
        <ul>
          <li>Generar confianza</li>
          <li>Responder dudas</li>
          <li>Llamado a la acción claro</li>
        </ul>
      </PhoneCard>
      {/* <!-- Teléfono 3 --> */}
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