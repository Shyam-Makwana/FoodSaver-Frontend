import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const auth = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/donate">FoodSaver</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    {auth.isLoggedIn && (<Nav.Link><Link to="/donate">Donate</Link></Nav.Link>)}
                    {auth.isLoggedIn && (<Nav.Link><Link to="/reqforfood">Request For Food</Link></Nav.Link>)}
                    <Nav.Link><Link to="/contributors">Contributors</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                </Nav>
                <Nav >
                    {!auth.isLoggedIn && (<Link to="/login"><Button variant="danger">Login</Button></Link>)}
                    {!auth.isLoggedIn && (<Link to="/signup"><Button variant="danger">SignUp</Button></Link>)}
                    {auth.isLoggedIn && <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Profile
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to="/viewprofile">View Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userdonfood">Donated Food</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userrecfood">Received Food</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {auth.isLoggedIn && (
                        <a><Button variant="danger" onClick={auth.logout}>Logout</Button></a>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;