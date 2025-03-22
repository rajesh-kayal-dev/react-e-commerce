import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingProducts } from '../context/Data'
import Slider from 'react-slick';
const Trnding_slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false
  };
  return (
    <>
      <div className="slider-container my-5">
        <Slider {...settings}>
          {trendingProducts.map((product, index) => <div key={index} className='slide'>
            <img src={product.image} alt="s"
            className='slide-image'
            style={{width:'180px',height:'180px',border:'1px solid blue'}} />
          </div>)}
        </Slider>
      </div></>
  )
}

export default Trnding_slider