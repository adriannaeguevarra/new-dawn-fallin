import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "@aws-amplify/ui-react";
import logo from "../assets/logo.png";
import { BrowserRouter as Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function ButtonAppBar() {
  const loginRoute = <Route path="/login" element={<LoginPage />}></Route>;

  const showMenuIcon = loginRoute ? (
    <Image alt="Connect 4 logo" src={logo} style={{ height: "40px" }} />
  ) : (
    <MenuIcon />
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar style={{ backgroundColor: "#575741" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {showMenuIcon}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit">Become a Sponsor</Button>
          <Button color="inherit">Donate</Button>
          <Button href="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
