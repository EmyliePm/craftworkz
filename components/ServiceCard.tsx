import styles from "./ServiceCard.module.css";

export default function ServiceCard(props) {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
