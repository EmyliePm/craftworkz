import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.heading}>What Our Customers Say</h2>

        <p className={styles.description}>
          Trusted for reliable service, quality workmanship and straightforward
          communication.
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              detail={testimonial.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
