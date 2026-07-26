import services from "../data/services";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.heading}>Our Services</h2>
        <p className={styles.description}>
          From everyday repairs to complete property care, Craftworkz provides
          reliable maintenance, carpentry and practical improvements for
          homeowners, landlords and holiday lets. From pool and exterior
          maintenance to bespoke projects and urgent repairs, we take care of
          the jobs that keep your property looking its best and working as it
          should.
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
