import React from 'react'
import {
    Link
  } from "react-router-dom";
  
 const Navbar=()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Movies Hut</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/top_rated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/now_playing">Now Playing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
