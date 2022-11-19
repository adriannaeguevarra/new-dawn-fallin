import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Box from '@mui/material/Box';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Donate from './pages/Donate';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';

// import { Amplify } from 'aws-amplify';
// import { 
//   Authenticator,
//   Image,
//   useTheme,
//   View,
//   Text,
//   Heading,
//   useAuthenticator,
//   Button
//  } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import SwipeableTemporaryDrawer from './components/sidenav';  

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// const components = {
//   Header() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Image
//           alt="Connect 4 logo"
//           src="/logo.png"
//         />
//       </View>
//     );
//   },

//   Footer() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Text color={tokens.colors.neutral[80]}>
//           &copy; All Rights Reserved
//         </Text>
//       </View>
//     );
//   },

//   SignIn: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Sign in to your account
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toResetPassword } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toResetPassword}
//             size="small"
//             variation="link"
//           >
//             Reset Password
//           </Button>
//         </View>
//       );
//     },
//   },

//   SignUp: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Create a new account
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toSignIn } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toSignIn}
//             size="small"
//             variation="link"
//           >
//             Back to Sign In
//           </Button>
//         </View>
//       );
//     },
//   },
//   ConfirmSignUp: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   SetupTOTP: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ConfirmSignIn: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ResetPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ConfirmResetPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
// };

// const formFields = {
//   signIn: {
//     username: {
//       placeholder: 'Enter your email',
//     },
//   },
//   signUp: {
//     password: {
//       label: 'Password:',
//       placeholder: 'Enter your Password:',
//       isRequired: false,
//       order: 2,
//     },
//     confirm_password: {
//       label: 'Confirm Password:',
//       order: 1,
//     },
//   },
//   forceNewPassword: {
//     password: {
//       placeholder: 'Enter your Password:',
//     },
//   },
//   resetPassword: {
//     username: {
//       placeholder: 'Enter your email:',
//     },
//   },
//   confirmResetPassword: {
//     confirmation_code: {
//       placeholder: 'Enter your Confirmation Code:',
//       label: 'New Label',
//       isRequired: false,
//     },
//     confirm_password: {
//       placeholder: 'Enter your Password Please:',
//     },
//   },
//   setupTOTP: {
//     QR: {
//       totpIssuer: 'test issuer',
//       totpUsername: 'amplify_qr_test_user',
//     },
//     confirmation_code: {
//       label: 'New Label',
//       placeholder: 'Enter your Confirmation Code:',
//       isRequired: false,
//     },
//   },
//   confirmSignIn: {
//     confirmation_code: {
//       label: 'New Label',
//       placeholder: 'Enter your Confirmation Code:',
//       isRequired: false,
//     },
//   },
// };

export default function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/donate'> Donate </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Donate />} />

        {/* <Authenticator formFields={formFields} components={components}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>} */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/settings' element={<Settings />} />
        {/* </Authenticator> */}

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
    
    
  );
}
