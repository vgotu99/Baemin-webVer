import "./style/MainEvent.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainEvent = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: false,
  };

  return (
    <div className="mainEvent">
      <Slider {...settings}>
        <div>
          <img src="/mainLogo.png" alt="" />
        </div>
        <div>
          <img src="/mainLogo.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default MainEvent;