import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import smartphone from './../../public/img/smartphone.png'

const PhoneCard = ({ type, images, video, children }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false // Asegurar altura fija
  }
  
  return (
    <div className='phone-card'>
      {/* Marco del teléfono */}
      <img className='phone-frame' src={smartphone} alt="Phone Mockup" />
      
      {/* Pantalla del teléfono con contenido */}
      <div className='phone-screen'>
        {type === 'carousel' && (
          <Slider {...sliderSettings}>
            {images?.map((img, index) => (
              <div key={index}>
                <img 
                  src={img} 
                  alt={`Slide ${index}`}
                  style={{ 
                    // width: '100%', 
                    // height: '100%', 
                    // objectFit: 'cover',
                    // objectPosition: 'center'
                  }}
                />
              </div>
            ))}
          </Slider>
        )}
        
        {type === 'video' && video && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ 
              // width: '100%', 
              // height: '100%', 
              // objectFit: 'cover',
              // objectPosition: 'center'
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
        
        {type === 'single' && images?.[0] && (
          <img 
            src={images[0]} 
            alt="Single"
            style={{ 
              // width: '100%', 
              // height: '100%', 
              // objectFit: 'cover',
              // objectPosition: 'center'
            }}
          />
        )}
      </div>
      
      {/* Contenido descriptivo */}
      <div className="phone-card-content">
        {children}
      </div>
    </div>
  )
}

export default PhoneCard