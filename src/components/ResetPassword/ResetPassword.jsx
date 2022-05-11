import {
  Box,
  Paper,
  Grid,
  Typography,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

function ResetPassword() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      elevation={4}
      style={{ height: "100vh" }}
      className="container"
    >
      <Grid item lg={4}>
        <Paper style={{ padding: "80px 40px" }}>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              style={{ textAlign: "center", color: "#E8EF94" }}
            >
              Reset Password
            </Typography>
            <InputLabel htmlFor="email" style={{ margin: "20px 0 10px 0" }}>
              Email
            </InputLabel>
            <TextField id="email" label="Email" variant="outlined" fullWidth />
            <Button variant="contained" fullWidth style={{ margin: "20px 0" }}>
              Reset
            </Button>
            <Link to="/login" style={{ margin: "10px 0" }}>
              Login
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/login" style={{ margin: "10px 0" }}>
                Need an account? Sign Up
              </Link>
            </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
