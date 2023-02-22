import styles from "./Gallery.module.scss";
import Image from "next/image";
import planetGIF from "../../images/planet2.gif";
import { useState } from "react";
import demo from "../../images/demo.jpg";
import Floaters from "@/components/floatingObjects/Floaters";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

import a from "../../images/android.gif";
// import styles from "./Gallery.module.scss";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

function Index() {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div id={styles.galleryContainer}>
      <Floaters />
      <div id={styles.galleryWrapper}>
        <div id={styles.galleryTitle}>
          <h1>Gallery.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Image id={styles.galleryIcon} src={planetGIF} alt="" />
      </div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        id={styles.gallerySwiper}
      >
        <SwiperSlide>
          <Image alt="" src={demo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={demo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={demo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={a} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Index;
