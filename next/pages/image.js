import { useRouter } from 'next/router';
import BackButton from "../components/BackButton";
import { Container, Box } from "@mui/material";

const ImagePage = () => {
  const router = useRouter();
  const { src } = router.query;  // Get the `src` query parameter from the URL

  if (!src) {
    return <p>No image source provided!</p>;
  }

  return (
    <div>
      <BackButton />
      <Container className="content" maxWidth="lg">
        <Box
          style={{
            backgroundColor: "#fff",
            margin: "auto",
            borderRadius: "10px",
            marginTop: "20px",
            padding: "20px",
            boxShadow: "0 14px 8px -4px rgba(0, 0, 0, 0.1)",
          }}
        >
            <img src={src} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </Box>
      </Container>
    </div>
  );
};

export default ImagePage;
