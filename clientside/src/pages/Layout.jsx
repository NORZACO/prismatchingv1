import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom"

import Footer from './Footer';
import NavigationPage from './NavigationPage'




export default function LayOut() {

    return (
        <>
            <NavigationPage /> 
            <Outlet />
            <Footer /> 
           
        </>
    )
}