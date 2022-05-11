import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/FirebaseContext";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloser = () => {
    setAnchorEl(null);
  };

  async function handleClose() {
    await logout();
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloser}
            >
              <h5 style={{ textAlign: "center", padding: "10px 0" }}>🖐Hi</h5>
              <MenuItem onClick={handleCloser}>
                <Link
                  to="/add-post"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Add Post
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
