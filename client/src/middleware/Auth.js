import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";

export const AuthorizeUser = ({children})=>{
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/'} replace={true}></Navigate>
    }

    return children;
}

export const ProtectRoutes = ({children})=>{
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Navigate to={'/'} replace={true}></Navigate>

    }

    return children;
}

export const AuthorizeLogin = ({children})=>{
    const token = localStorage.getItem('token');

    if(token){
        return <Navigate to={'/dashboard'} replace={true}></Navigate>
    }

    return children;
}