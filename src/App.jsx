import LightOrDarkMode from "./components/lightOrDarkMode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Donate from './pages/Donate';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import { RequireAuth } from './components/RequireAuth'
import { Login } from './components/Login'

import { Amplify } from 'aws-amplify';
import { 
  Authenticator,
 } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function App() {
  return (
    <Authenticator.Provider>
    <Router>
      {/* <nav>
        <Link to='/'> Home </Link>
        <Link to='/donate'> Donate </Link>
      </nav> */}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path='/donate' element={<RequireAuth><Donate /></RequireAuth>} />
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='/layout' element={<RequireAuth><Layout /></RequireAuth>} />
          <Route path='/settings' element={<RequireAuth><Settings /></RequireAuth>} />
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<RequireAuth><PageNotFound /></RequireAuth>} />
      </Routes>
    </Router>
    </Authenticator.Provider>
    
  );
}
