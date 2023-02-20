import Image from "next/image";
import loaderGIF from "../../images/loader.gif";
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div id={styles.loader}>
      <Image src={loaderGIF} alt="" />
    </div>
  );
}

export default Loader;
