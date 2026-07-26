import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export default function TestimonialCard({
  quote,
  name,
  detail,
}: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.quoteMark}>“</span>

      <p className={styles.quote}>{quote}</p>

      <div className={styles.customer}>
        <strong>{name}</strong>
        <span>{detail}</span>
      </div>
    </article>
  );
}
