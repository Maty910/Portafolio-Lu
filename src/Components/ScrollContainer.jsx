import { useRef, useEffect } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollContainer = ({ children }) => {
  const ScrollContainerRef = useRef(null)  

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: ScrollContainerRef.current,
      smooth: true, 
      inertia: 0.8, //ajustar valor de la inercia
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    })

    return () => {
      if (locoScroll) locoScroll.destroy()
    }
  }, [])

  return <div data-scroll-container ref={ScrollContainerRef}>
    {children}
  </div>
};

export default ScrollContainer;