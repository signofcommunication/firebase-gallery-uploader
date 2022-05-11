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

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleRegister() {
    const success = txt => toast(txt);
    const emailAlreadyinUse = txt => toast(txt);

    try {
      if (username && email && password) {
        await register(email, password);
        success("Success");
        navigate("/login");
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        emailAlreadyinUse("Email Already in Use");
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
              SignUp
            </Typography>
            <InputLabel htmlFor="name" style={{ margin: "20px 0 10px 0" }}>
              Name
            </InputLabel>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <InputLabel htmlFor="email" style={{ margin: "20px 0 10px 0" }}>
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              style={{ margin: "20px 0" }}
              onClick={handleRegister}
            >
              SignUp
            </Button>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/login" style={{ margin: "10px 0" }}>
                Already have an account? Login Here
              </Link>
            </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Register;
