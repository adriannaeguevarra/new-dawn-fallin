import {useLocation, Navigate} from 'react-router-dom'
import {useAuthenticator} from '@aws-amplify/ui-react'

// going to surround the children if route not authenticated the redire to login
export function RequireAuth({children}){
    const location = useLocation();
    const {route} = useAuthenticator((context) => [context.route]);

    if(route !== "authenticated"){
        return <Navigate to="/login" state={{ from: location}} replace></Navigate>
    }

    return children;
    
}