import React from "react";
import '../index.css'

export default function NavBar(){
    return (
        <nav className="nav-container">
            <button className="nav-item"> Homepage </button>
            <button className="nav-item"> Notes </button>
            <button className="nav-item"> Tasks </button>
            <button className="nav-item"> Calendar </button>
            <button className="nav-item"> Expenses </button>
            <button className="nav-item"> Trip Planner </button>
            <button className="nav-item"> Login </button>
            <button className="nav-item"> Register </button>
        </nav>
    );
}