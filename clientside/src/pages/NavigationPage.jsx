// import { Link} from "react-router-dom";
// import { useState } from "react";



// export default function Layout() {
//     // change button link to blue when clicked
//     const [active, setActive] = useState(false);
//     const handleToggle = () => {
//         console.log(active);
//         setActive(!active);
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 rounded">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/">
//                         MWAMUZISCODE
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li
//                                 className="nav-item"
//                                 role="presentation"
//                                 onClick={handleToggle}
//                             >
//                                 {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
//                                 <Link className="nav-link active" aria-current="page" to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 {/* <a className="nav-link" href="#">Link</a> */}
//                                 <Link className="nav-link" to="contact">
//                                     Contact
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 {/* <a className="nav-link" href="#">Link</a> */}
//                                 <Link className="nav-link" to="about">
//                                     About
//                                 </Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown </a> */}
//                                 <Link
//                                     className="nav-link dropdown-toggle"
//                                     to="/contact"
//                                     role="button"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Dropdown{" "}
//                                 </Link>
//                                 <ul className="dropdown-menu">
//                                     <li>
//                                         {/* <a className="dropdown-item" href="#">Action</a> */}
//                                         <Link className="dropdown-item" to="/contact">
//                                             Contact
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         {/* <a className="dropdown-item" href="#">Another action</a> */}
//                                         <Link className="dropdown-item" to="/blogs">
//                                             Blogs
//                                         </Link>
//                                     </li>
//                                     {/* <li><hr className="dropdown-divider" /></li> */}
//                                     <li>
//                                         {/* <a className="dropdown-item" href="#">Something else here</a> */}
//                                         <Link className="dropdown-item" to="/contact">
//                                             Contact
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         {/* <a className="dropdown-item" href="#">Something else here</a> */}
//                                         <Link className="dropdown-item" to="/blogs">
//                                             Blogs
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
//                                 <Link
//                                     className="nav-link disabled"
//                                     aria-disabled="true"
//                                     to="/contact"
//                                 >
//                                     Disabled
//                                 </Link>
//                             </li>
//                             <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
//                                 <img
//                                     className="rounded-circle me-1"
//                                     width="24"
//                                     height="24"
//                                     src="https://github.com/mdo.png"
//                                     alt="" />
//                                 Primary
//                             </span>
//                         </ul>
//                         <form className="d-flex" role="search">
//                             {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
//                             <button className="btn btn-outline-success" type="submit">
//                                 Search
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Contact from './Contact';

function Contact() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">MWAMUZISCODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="chart">Chart</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="admin">Admin</Nav.Link>
            <Nav.Link href="dashboard">Dashboard</Nav.Link> 
            
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Contact;


