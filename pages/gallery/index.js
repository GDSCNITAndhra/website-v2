import Top from "@/components/gallery/Top";
import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import isf from "../../images/arrow.png";

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  let images = [
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
    isf,
  ];

  return (
    <>
      <Top />
      <div className="container" style={{ marginTop: "10vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis
        possimus repellendus aut reiciendis tempore iusto sapiente debitis rerum
        accusantium temporibus cumque quos, minima fugiat officia nostrum modi,
        asperiores fugit?
      </div>
      <AliceCarousel
        mouseTracking
        items={images.map((image, index) => (
          <div key={index}>
            <Image
              style={{
                height: "30vh",
                width: "30vw",
                marginTop: "10vh",
                border: "2px solid black",
                borderRadius: "4px",
                marginBottom: "10vh",
              }}
              src={image}
              alt="Carousel Image"
            />
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
    </>
  );
};

export default Carousel;
