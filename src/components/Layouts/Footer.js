import React from "react";

export default function Footer(props){
    return (
        <footer className={`py-3 my-4 ${props.footerClass}`}>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Contact</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
        </footer>
    );
}