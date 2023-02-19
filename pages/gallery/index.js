import styles from "./Gallery.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import demo from "../../images/demo.jpg";
import ellipse from "../../images/Ellipse.svg";
import square from "../../images/Rectangle.svg";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={styles.imageCard}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Image src={demo} alt=""></Image>
    </motion.div>
  );
};

function index() {
  return (
    <div id={styles.galleryContainer}>
      <div className={styles.animation_1} />
      <div className={styles.animation_2} />
      <div className={styles.animation_3} />
      <div id={styles.imageCards}>
        <div id={styles.galleryTitle}>
          <h1>Gallery.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
        <Box num={1} />
      </div>
    </div>
  );
}

export default index;
