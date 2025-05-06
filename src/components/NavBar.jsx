import React from "react";

function NavBar(){
    return (
        <div className="manage-nav">
            <nav className="navbar">
                <div className="logo">SyncUp</div>
                <div className="nav-links">
                    <a href="#">Features</a>
                    <a href="#">How it works</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                </div>
                <a className="nav-link-highlight" href="#">Get Started</a>
            </nav>
        </div>
    )
}

export default NavBar;