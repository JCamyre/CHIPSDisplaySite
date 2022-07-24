import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainButtons />
    </div>
  );
}
