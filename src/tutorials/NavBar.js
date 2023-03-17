import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './style.css'


function NavBar()
{
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light rounded navbar_2 m-2">
                <a className="navbar-brand logo" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <nav>
                <ul>
                    <li className="nav-item active ">
                        <a className="nav-link" href="#">Sign Up </a>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}

export default NavBar