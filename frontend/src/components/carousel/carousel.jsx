import React from "react";
import img1 from "../Assets/slide1.jpg";
import img2 from "../Assets/slide2.png";
import img3 from "../Assets/slide3.jpg";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src={img1} alt="" className="carousel-img"/>
          </div>
          <div className="embla__slide">
            <img src={img2} alt="" className="carousel-img"/>
          </div>
          <div className="embla__slide">
            <img src={img3} alt="" className="carousel-img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;