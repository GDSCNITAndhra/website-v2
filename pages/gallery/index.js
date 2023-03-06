import styles from "./Gallery.module.scss";
import Image from "next/image";
import planetGIF from "../../images/planet2.gif";
import { useState } from "react";
import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import content from "../../content/content.json";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);
import i1 from "../../images/gallery/Screenshot (1054).png";
import i2 from "../../images/gallery/Screenshot (1055).png";
import i3 from "../../images/gallery/Screenshot (1059).png";
import i4 from "../../images/gallery/Screenshot (1061).png";
import i5 from "../../images/gallery/Screenshot (1063).png";
import i6 from "../../images/gallery/Screenshot (1065).png";
import i7 from "../../images/gallery/Screenshot (1066).png";
import i8 from "../../images/gallery/Screenshot (1067).png";
import i9 from "../../images/gallery/Screenshot (1069).png";
const images = [i7, i8, i9, i5, i4, i2, i3, i6, i1];
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

function Index() {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div id={styles.galleryContainer}>
      <h1 id={styles.galleryTitle}>Gallery.</h1>

      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Autoplay, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        id={styles.gallerySwiper}
        autoplay
      >
        {images.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <Image alt="" src={elem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Index;
