import PropTypes from "prop-types";

const NavBar = ({appName}) => {

    NavBar.defaultProps = {
        appName : PropTypes.string.isRequired,
    }

    const navBarStyle = {
        backgroundColor: '#3cc3b2',
        height: '5vh',
        fontSize: '3vh',
        textAlign: 'center',
        display: 'block'
    }

    return (
        <nav className='text-center' style={navBarStyle}>{appName}</nav>
    );
}

export default NavBar;
