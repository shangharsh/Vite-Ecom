import {Button, Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { successToast } from '../services/toast.service';


const NavMenu = () =>{
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to='/' className='text-decoration-none text-dark fs-5'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
            <NavDropdown title="More" id="basic-nav-dropdown" className='text-secondary'>
              <NavDropdown.Item>
                <Link to='/users' className='text-decoration-none text-dark'>Users Details</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to='/products' className='text-decoration-none text-dark'>Product Details</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to='/counter' className='text-decoration-none text-dark'>Counter</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to='/live-counter' className='text-decoration-none text-dark'>Live Counter</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavMenu;