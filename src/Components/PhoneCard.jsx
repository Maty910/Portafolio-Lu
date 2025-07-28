import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import smartphone from "./../../public/img/smartphone.png"

const PhoneCard = ({ type, images = [], video, children }) => {
  const sliderSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    dots: false
  }

  return (
    <div className="phone-card">
      {/* 1) Wrapper principal - simula el teléfono completo */}
      <div className="screen-wrapper">
        {/* 2) Área de contenido de la pantalla */}
        <div className="screen-content">
          {type === "carousel" && (
            <Slider {...sliderSettings}>
              {images.map((src, i) => (
                <div key={i} className="slide">
                  <img className="slide-img" src={src} alt={`Slide ${i+1}`} />
                </div>
              ))}
            </Slider>
          )}
          
          {type === "video" && (
            <video className="slide-img" autoPlay loop muted playsInline>
              <source src={video} type="video/mp4" />
            </video>
          )}
          
          {type === "single" && (
            <img className="slide-img" src={images[0]} alt="Single" />
          )}
        </div>
        
        {/* 3) Frame del teléfono - exactamente encima */}
        <img className="phone-frame" src={smartphone} alt="Phone Frame" />
      </div>
      
      {/* 4) Texto descriptivo debajo */}
      <div className="phone-card-content">
        {children}
      </div>
    </div>
  )
}

export default PhoneCard