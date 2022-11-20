import {useEffect} from "react"
import { 
  Authenticator, 
  useAuthenticator,
  Image,
  useTheme,
  View,
  Text,
  Heading,
  Button,
  Grid
 } from "@aws-amplify/ui-react";
import {useNavigate, useLocation} from "react-router"
import "@aws-amplify/ui-react/styles.css";
import Paper from "@mui/material/Paper";
import homelessPleaseHelp from "../assets/homelessPleaseHelp.jpeg";


export function Login(){
    const {route} = useAuthenticator((context) => [context.route])
    const location = useLocation();
    const navigate = useNavigate();
    /*
        If someone goes to aprotected route,
        remember it, and check if authenticated otherwise
         redirect them to login, 
        
         If authenticated,
         go to one of those protecte routes
    */

    //use this state to look at the last place a user was at
    let from = location.state?.from?.pathname || "/dashboard";

    useEffect(() => {
        // logs last place user was out if they were on of the protected routes otherwise go to root
        if(route === "authenticated"){
            navigate(from, {replace: true});
        }
    }, [route, navigate, from ]);

    const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Image
                alt="Connect 4 logo"
                src="/logo.png"
              />
            </View>
          );
        },
      
        Footer() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Text color={tokens.colors.neutral[80]}>
                &copy; All Rights Reserved
              </Text>
            </View>
          );
        },
      
        SignIn: {
          Header() {
            const { tokens } = useTheme();
      
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Sign in to your account
              </Heading>
            );
          },
          Footer() {
            const { toResetPassword } = useAuthenticator();
      
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toResetPassword}
                  size="small"
                  variation="link"
                >
                  Reset Password
                </Button>
              </View>
            );
          },
        },
      
        SignUp: {
          Header() {
            const { tokens } = useTheme();
      
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Create a new account
              </Heading>
            );
          },
          Footer() {
            const { toSignIn } = useAuthenticator();
      
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toSignIn}
                  size="small"
                  variation="link"
                >
                  Back to Sign In
                </Button>
              </View>
            );
          },
        },
        ConfirmSignUp: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        SetupTOTP: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ConfirmSignIn: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ResetPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
        ConfirmResetPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Enter Information:
              </Heading>
            );
          },
          Footer() {
            return <Text>Footer Information</Text>;
          },
        },
      };
      
      const formFields = {
        signIn: {
          username: {
            placeholder: 'Enter your email',
          },
        },
        signUp: {
          password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
          },
          confirm_password: {
            label: 'Confirm Password:',
            order: 1,
          },
        },
        forceNewPassword: {
          password: {
            placeholder: 'Enter your Password:',
          },
        },
        resetPassword: {
          username: {
            placeholder: 'Enter your email:',
          },
        },
        confirmResetPassword: {
          confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
          },
          confirm_password: {
            placeholder: 'Enter your Password Please:',
          },
        },
        setupTOTP: {
          QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
          },
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
        confirmSignIn: {
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
      };
      

    return (
      <>
       <Paper
         sx={{
           backgroundImage: `url(${homelessPleaseHelp})`,
           backgroundSize: "cover",
           height: "100vh",
           weight: "100vw",
           overflow: "hidden",
         }}
       >
         <Grid
           item
           xs={12}
           paddingTop="130px"
           paddingRight="15%"
           container
           justifyContent="flex-end"
         >
           <Authenticator
             formFields={formFields}
             components={components}
           ></Authenticator>
         </Grid>
       </Paper>
     </>
    )
    
}