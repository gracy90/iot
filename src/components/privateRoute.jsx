import React, { useContext, useEffect } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
function PrivateRoute(){
    const {loggedIn,checkingStatus}=useAuthStatus()
    if (checkingStatus){
        return <Spinner/>
    }
    return (
        loggedIn ? <Outlet/>: <Navigate to='/login'/>
        )

}
export default PrivateRoute;