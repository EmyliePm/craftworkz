import styles from "./Navbar.module.css";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/logo.png"
        alt="Craftworkz Logo"
        width={200}
        height={200}
        className={styles.logo}
      />
      <ul className={styles.navLinks}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <a href="/contact" className={styles.quoteButton}>
        Get a Quote
      </a>
    </nav>
  );
}
