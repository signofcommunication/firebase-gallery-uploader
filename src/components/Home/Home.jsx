import { useAuth } from "../../utils/FirebaseContext";
import { Grid, Container, CircularProgress } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Cards from "./Card/Card";

function Home() {
  const { images } = useAuth();

  return (
    <>
      <Navbar />
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          {images ? (
            images?.map((data, i) => (
              <Grid item key={i} style={{ marginTop: "20px" }}>
                <Cards data={data} />
              </Grid>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
