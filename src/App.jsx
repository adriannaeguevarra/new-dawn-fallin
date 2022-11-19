//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import Box from '@mui/material/Box';
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import ButtonAppBar from "./components/navbar";
import SwipeableTemporaryDrawer from "./components/sidenav";
import FileUpload from "./components/fileUpload";

function App() {
  return (
    <div>
      <FileUpload />
    </div>
  );
}

export default App;
