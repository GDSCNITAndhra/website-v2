import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  let images = ["https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png","https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png","https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png","https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png","https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png"]

  return (
    <AliceCarousel
      mouseTracking
      items={images.map((image, index) => (
        <div key={index}>
          <img style={{height:"10vh",width:"7vh",margin:"5px"}} src={image} alt="Carousel Image" />
        </div>
      ))}
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
      animationType="slide"
      infinite
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default Carousel;


