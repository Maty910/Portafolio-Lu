// import smartphone from '../img/smartphone.png';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PhoneCard = ({ type, images, video, children }) => {
  //Configuracion basica de react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  
  return (
    <div className='phone-card'>
        {/* Mockup del smartphone */}
        <img className='phone-frame' src="./img/smartphone.png" alt="Phone Mockup" />
        {/* Contenido que va dentro de la pantalla */}
        <div className='phone-screen'>
          {
            type === 'video' && video ? (
                <>
                  <p>Debug: Video path is {video}</p> {/* Mensaje de depuración */}
                  <video autoPlay loop muted className='phone-video-background'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
            ) : type === 'carousel' ? (
              <Slider {...sliderSettings}>
                {images.map((imgSrc, index) => (
                  <div key={index}>
                    <img src={imgSrc} alt={`Slide ${index}`}/>
                  </div>
                ))}
              </Slider>
            ) : (
              /* Si no es carrusel, asumimos una sola imagen */
              images && images.length > 0 ? (
                <img src={images[0]} alt='Single' />
              ) : (
                <p>No image available</p>
              )
            )
          }
        </div>
        <div className="phone-card-content">
        {children}
      </div>
    </div>
  )
}   

export default PhoneCard