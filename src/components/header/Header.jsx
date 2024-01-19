import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <h1>Skilled</h1>
        <button className={styles.header_btn}>Get Started</button>
      </div>
    </header>
  );
};
