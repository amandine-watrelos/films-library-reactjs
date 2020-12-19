import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({appName}) => {

    NavBar.defaultProps = {
        appName : PropTypes.string.isRequired,
    }

    const navBarStyle = {
        backgroundColor: '#3cc3b2',
        height: '5vh',
        fontSize: '3vh',
        textAlign: 'center',
        display: 'block',
        color: '#212529'
    }

    return (
        <Link to={''} className='text-center' style={navBarStyle}>{appName}</Link>
    );
}

export default NavBar;
