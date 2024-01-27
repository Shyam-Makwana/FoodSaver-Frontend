import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const auth = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/donate"><Navbar.Brand>FoodSaver</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home"><Nav.Link>Home</Nav.Link></Link>
                    {auth.isLoggedIn && (<Link to="/donate"><Nav.Link>Donate</Nav.Link></Link>)}
                    {auth.isLoggedIn && (<Link to="/reqforfood"><Nav.Link>Request For Food</Nav.Link></Link>)}
                    <Link to="/contributors"><Nav.Link>Contributors</Nav.Link></Link>
                    <Link to="/contact"><Nav.Link>Contact Us</Nav.Link></Link>
                </Nav>
                <Nav >
                    {!auth.isLoggedIn && (<Link to="/login"><Button variant="danger">Login</Button></Link>)}
                    {!auth.isLoggedIn && (<Link to="/signup"><Button variant="danger">SignUp</Button></Link>)}
                    {auth.isLoggedIn && <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Profile
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/viewprofile">View Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userdonfood">Donated Food</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/userrecfood">Received Food</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {auth.isLoggedIn && (
                        <Button variant="danger" onClick={auth.logout}>Logout</Button>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;