import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../utils/FirebaseContext";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Paper,
  Grid,
  Typography,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin() {
    const success = txt => toast(txt);
    const checkPassword = txt => toast(txt);
    const checkEmail = txt => toast(txt);

    try {
      if (email && password) {
        await login(email, password);
        success("Login Successful");
        navigate("/");
      }
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        checkPassword("Please check the password");
      } else if (err.code === "auth/user-not-found") {
        checkEmail("Please check the Email");
      }
    }
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      elevation={4}
      style={{ height: "100vh" }}
      className="container"
    >
      <ToastContainer />
      <Grid item lg={4}>
        <Paper style={{ padding: "80px 40px" }}>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              style={{ textAlign: "center", color: "#E8EF94" }}
            >
              Login to Gallery
            </Typography>
            <InputLabel htmlFor="email" style={{ margin: "40px 0 10px 0" }}>
              Email
            </InputLabel>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputLabel htmlFor="password" style={{ margin: "20px 0 10px 0" }}>
              Password
            </InputLabel>
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              style={{ margin: "20px 0" }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/forgot-password" style={{ margin: "10px 0" }}>
                Forgot Password?
              </Link>
              <Link to="/signup">Dont have account yet? Signup Here</Link>
            </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
