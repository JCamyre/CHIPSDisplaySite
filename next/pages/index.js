import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons, {
  getRandomPoster,
} from "../components/MainButtons";
import { useEffect } from 'react';

export default function Home({
  personThumbnail,
  articleThumbnail,
  posterThumbnail,
}) {
  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div className={styles.container}>
      <MainButtons
        personThumbnail={personThumbnail}
        posterThumbnail={posterThumbnail}
        articleThumbnail={articleThumbnail}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const posterThumbnail = await getRandomPoster().then((res) => {
    if (res)
      return res["thumbnail"];
    return null;
  });

  return {
    props: {
      posterThumbnail,
    },
    revalidate: 900,
  };
};
