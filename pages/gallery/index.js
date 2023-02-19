import styles from "./Gallery.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import galleryTornPage from "../../images/";
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
      <h1>Box {num} </h1>
    </motion.div>
  );
};

function index() {
  return (
    <div id={styles.galleryContainer}>
      <div id={styles.imageCards}>
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
