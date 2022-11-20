import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Auth, API } from 'aws-amplify';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "@aws-amplify/ui-react";
import logo from "../assets/logo.png";
import { BrowserRouter as Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LightOrDarkMode from "../components/lightOrDarkMode";
import SideNav from "./SideNav"
import {useAuthenticator} from '@aws-amplify/ui-react'

export default function ButtonAppBar() {
  const {route} = useAuthenticator((context) => [context.route]);
   const loginRoute = <Route path="/login" element={<LoginPage />}></Route>;

  const showMenuIcon = loginRoute ? (
    <Image alt="Connect 4 logo" src={logo} style={{ height: "40px" }} />
  ) : (
    <MenuIcon />
  )
  
  async function signOut() {
    try {
        await Auth.signOut();
        if(route !== "authenticated"){
          <Navigate to="/dashboard" replace={true} />
        }
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar style={{ backgroundColor: "#575741" }}>
          <SideNav
          ></SideNav>
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
          <Button color="inherit">About</Button>
          <Button 
          onClick = {signOut}
          color="inherit"
          >Logout</Button>
          <LightOrDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
