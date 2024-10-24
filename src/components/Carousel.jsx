import Slider from "react-slick";
import PropTypes from 'prop-types';

function Responsive({array}) {

  const handleSlidesToShow = () => {
    return array.length > 6 ? 6 : array.length;
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    slidesToShow: handleSlidesToShow(),
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-10/12 mx-auto py-4">
        {array.map((item, index) => (
          <img 
            key={index}
            src={item} 
            alt="logo" 
            className="h-[110px] max-sm:h-[90px] object-contain" 
          />
        ))}
      </Slider>
    </div>
  );
}

Responsive.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Responsive;
