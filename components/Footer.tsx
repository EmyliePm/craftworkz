import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Craftworkz. All rights reserved.</p>

        <a
          href="https://periotdigital.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
        >
          Designed &amp; Built by <span>Periot Digital ↗</span>
        </a>
      </div>
    </footer>
  );
}
