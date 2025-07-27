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
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
  }
  
  return (
    <div className='phone-card'>
      <div className='phone-screen'>
        {type === 'carousel' && (
          <Slider {...sliderSettings}>
            {images?.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        )}
        {type === 'video' && video && (
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        )}
        {type === 'single' && images?.[0] && (
          <img src={images[0]} alt="Single" />
        )}
      </div>
      <img className='phone-frame' src={smartphone} alt="Phone Mockup" />
      <div className="phone-card-content">
        {children}
      </div>
    </div>
  )
}

export default PhoneCard