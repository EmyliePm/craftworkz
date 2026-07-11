import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Reliable. Skilled. Detail-focused.</p>

          <h1>
            Property Management
            <span> Practical Solutions</span>
          </h1>

          <p className={styles.description}>
            From everyday repairs to bespoke projects, Craftworkz delivers
            practical solutions built with care.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryButton}>
              Get a Quote
            </Link>

            <Link href="#projects" className={styles.secondaryButton}>
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
