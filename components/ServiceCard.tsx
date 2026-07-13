import type { LucideIcon } from "lucide-react";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <Icon className={styles.icon} aria-hidden="true" />
    </article>
  );
}
