import {
  Box,
  FormControl,
  Paper,
  Grid,
  IconButton,
  styled,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { useAuth } from "../../utils/FirebaseContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.css";

const Input = styled("input")({
  display: "none",
});

function AddPost() {
  const [imagePath, setImagePath] = useState();
  const navigate = useNavigate();

  const { imageUpload } = useAuth();

  function handleSubmit() {
    const warn = txt => toast(txt);

    if (imagePath) {
      imageUpload(imagePath.name, imagePath);
      navigate("/");
    } else {
      warn("Please upload an image!");
    }
  }

  return (
    <>
      <Navbar />
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        style={{ height: "100vh" }}
        className={styles.container}
      >
        <ToastContainer />
        <Grid item lg={4}>
          <Paper className={styles.paper}>
            <Box>
              <FormControl>
                <label htmlFor="icon-button-file" className={styles.camera}>
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={e => setImagePath(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                <Button
                  type="submit"
                  variant="contained"
                  component="span"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Upload
                </Button>
              </FormControl>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default AddPost;
