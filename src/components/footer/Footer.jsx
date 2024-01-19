import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <h1>Skilled</h1>
        <button className={styles.footer_btn}>Get Started</button>
      </div>
    </footer>
  );
};
