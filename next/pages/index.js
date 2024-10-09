import styles from "../styles/Home.module.css";
import MainButtons, {
  getRandomPoster,
} from "../components/MainButtons";
import { getIndexSlides } from "../scripts/db";
import { useEffect } from 'react';

export default function Home({
  posterThumbnail,
  carouselImages
}) {
  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div className={styles.container}>
      <MainButtons
        posterThumbnail={posterThumbnail}
        carouselImages={carouselImages}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  // Fetch both poster thumbnail and carouselImages in parallel using Promise.all
  console.log("We waiting")
  const [posterThumbnail, carouselImages] = await Promise.all([
    getRandomPoster().then((res) => {
      if (res) return res["thumbnail"];
      return null;
    }),
    getIndexSlides(),
  ]);

  console.log("Made it", carouselImages)

  return {
    props: {
      posterThumbnail,
      carouselImages,
    },
    revalidate: 3600,  // Revalidate every hour (3600 seconds)
  };
};
