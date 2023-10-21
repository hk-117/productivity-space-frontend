import React from "react";
import NavBar from "./NavBar";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function HomePage(){
    return (
        <div>
            <NavBar/>
            <MainBody/>
            <Footer/>
        </div>
    );  
}