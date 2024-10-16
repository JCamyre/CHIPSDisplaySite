import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons, {
  getRandomArticle,
  getRandomPerson,
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
  let personThumbnail;
  await getRandomPerson()
    .then((res) => {
      personThumbnail = res["img"];
    })
    .catch((err) => {
      console.log(err);
    });
  const articleThumbnail = await getRandomArticle().then((res) => {
    if (res)
      return res["img"];
    return null;
  });
  const posterThumbnail = await getRandomPoster().then((res) => {
    if (res)
      return res["thumbnail"];
    return null;
  });

  return {
    props: {
      personThumbnail,
      articleThumbnail,
      posterThumbnail,
    },
    revalidate: 900,
  };
};
