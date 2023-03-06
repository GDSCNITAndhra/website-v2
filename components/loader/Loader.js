import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div id={styles.loader}>
      <div id={styles.circles}>
        <div id={styles.circle1} />
        <div id={styles.circle2} />
        <div id={styles.circle3} />
      </div>
    </div>
  );
}

export default Loader;
