import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Auth } from 'aws-amplify';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightOrDarkMode from "../components/lightOrDarkMode";
import SideNav from "./SideNav"
import {useAuthenticator} from '@aws-amplify/ui-react'


export default function ButtonAppBar() {
  const {route} = useAuthenticator((context) => [context.route]);
  
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
          <Button color="inherit">About</Button>
          <Button color="inherit">{<LightOrDarkMode />}</Button>
          <Button 
          onClick = {signOut}
          color="inherit"
          >Logout</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
