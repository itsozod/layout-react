import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <h2>Skilled</h2>
        <button>Get Started</button>
      </div>
    </header>
  );
};
