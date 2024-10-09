import { useRouter } from 'next/router';

const ImagePage = () => {
  const router = useRouter();
  const { src } = router.query;  // Get the `src` query parameter from the URL

  if (!src) {
    return <p>No image source provided!</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Detail Page</h1>
      {/* Display the image based on the `src` query parameter */}
      <img src={src} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
    </div>
  );
};

export default ImagePage;
