import styles from "./Gallery.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import demo from "../../images/demo.jpg";
import Floaters from "@/components/floatingObjects/Floaters";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const ImageCard = ({ description }) => {
  return (
    <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
      <div className={styles.imageCard}>
        <Image src={demo} alt="" />
        <div className={styles.galleryImageInfo}>
          <p>{description}</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

function index() {
  return (
    <div id={styles.galleryContainer}>
      <Floaters />
      <div id={styles.imageCards}>
        <div id={styles.galleryTitle}>
          <h1>Gallery.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div id={styles.firstImageCard}>
          <Image src={demo} alt="" />
          <div className={styles.galleryImageInfo}>
            <p>
              sefe ssefes sefe ssefes sefe ssefes sefe ssefes sefe ssefes sefe
              ssefes sefe ssefes sefe ssefes sefe ssefes sefe ssefes sefe ssefes
              sefe ssefes sefe ssefes sefe ssefes sefe ssefes sefe ssefes sefe
            </p>
          </div>
        </div>
        <ImageCard description={"Hi"} />
        <ImageCard description={"Hi"} />
        <ImageCard description={"Hi"} />
        <ImageCard description={"Hi"} />
        <ImageCard description={"Hi"} />
        <ImageCard description={"Hi"} />
      </div>
    </div>
  );
}

export default index;
