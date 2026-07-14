import services from "../data/services";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <p className={styles.description}>
          Reliable property maintenance and handyman services <br />
          for homeowners, landlords and holiday lets
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
