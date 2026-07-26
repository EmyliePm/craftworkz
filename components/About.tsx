import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>About Craftworkz</p>

            <h2>
              Practical experience.
              <span>Quality first.</span>
            </h2>
          </div>

          <div className={styles.content}>
            <p>
              Craftworkz is built on a hands-on approach, attention to detail
              and a genuine commitment to doing the job properly.
            </p>

            <p>
              Jack has a varied background spanning hospitality, accountancy and
              professional driving, and he and his team bring a broad mix of
              practical experience, organisation and customer service to every
              project.
            </p>

            <p>
              Multi-skilled and quality-focused, Craftworkz takes a
              straightforward, customer-first approach to property maintenance,
              repairs, improvements and bespoke work.
            </p>

            <div className={styles.values}>
              <span>Hands-on & practical</span>
              <span>Multi-skilled</span>
              <span>Customer first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
