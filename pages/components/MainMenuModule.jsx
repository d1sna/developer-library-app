import styles from "../../styles/Home.module.css";

export default function MainMenuModule({ info }) {
  return (
    <a className={styles.card}>
      <h2>{info.title} </h2>
      <p>{info.description}</p>
      {info.text}
    </a>
  );
}
