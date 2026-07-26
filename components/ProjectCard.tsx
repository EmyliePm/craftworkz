import Image from "next/image";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
};

export default function ProjectCard({
  title,
  category,
  beforeImage,
  afterImage,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.images}>
        <div className={styles.imageWrapper}>
          <Image
            src={beforeImage}
            alt={`${title} before`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
          <span className={styles.label}>Before</span>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={afterImage}
            alt={`${title} after`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
          <span className={styles.label}>After</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>{category}</p>
        <h3>{title}</h3>
      </div>
    </article>
  );
}
