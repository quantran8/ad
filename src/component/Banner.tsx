import React from 'react'
// import bn1 from 'imgs/bn1.png'
import bn2 from 'imgs/bn2.png'
import bn3 from 'imgs/bn3.png'
import bn4 from 'imgs/bn4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Next, Prev} from 'custom/index';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev/>,
  };
const Banner = () => {
    return (
        <div className="Banner">
            <Slider {...settings}>
                  {/* <div>
                      <img src={bn1} alt='up' />
                  </div> */}
                  <div>
                      <img src={bn2} alt='up' />
                  </div>
                  <div>
                      <img src={bn3} alt='up' />
                  </div>
                  <div>
                      <img src={bn4} alt='up' />
                  </div>
            </Slider>
        </div>
    )
}

export default Banner
