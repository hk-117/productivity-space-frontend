import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function HomePage(props){
    return (
        <div>
            <NavBar/>
                <main>{props.children}</main>
            <Footer/>
        </div>
    );
}