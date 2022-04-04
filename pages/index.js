import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainMenu from "./components/MainMenu";
import Title from "./components/Title";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Developer Library App</h1>
        <div className={styles.grid}>
          <MainMenu />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
