import React from 'react';
import logo from '../images/percivalbragg - online-logos_transparent_sized.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="home">
            <div className="container">
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...' /></a>
                <button
                    className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">major strengths</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;