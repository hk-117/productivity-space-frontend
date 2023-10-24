import React from "react";

export default function NavBar(){
    let isLogged = localStorage.getItem('isLogged');
    const notLoggedItems = (
        <>
            <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/login">LogIn</a>
            </li>
        </>
        );

    function logOut(){
        localStorage.clear();
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MyDailySpace</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Notes</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Tasks</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Calendar</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Expenses</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Trips</a>
                    </li>
                    {isLogged ?
                     (<>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Zubayer
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" onClick={logOut} href="/">Logout</a></li>
                        </ul>
                        </li>
                    </>)
                     : 
                     notLoggedItems
                     }
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}