import styles from "./Gallery.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import demo from "../../images/demo.jpg";
import Floaters from "@/components/floatingObjects/Floaters";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = () => {
  return (
    <div className={styles.imageCard}>
      <Image src={demo} alt=""></Image>
    </div>
  );
};

function index() {
  return (
    <div id={styles.galleryContainer}>
      <Floaters></Floaters>
      <div id={styles.imageCards}>
        <div id={styles.galleryTitle}>
          <h1>Gallery.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div id={styles.firstImageCard}>
          <Image src={demo} alt=""></Image>
        </div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default index;
