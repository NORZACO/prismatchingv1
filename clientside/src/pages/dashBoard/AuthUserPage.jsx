// // import { useState } from "react";
// import { Button, Container } from "react-bootstrap";
// // import Modal from "react-bootstrap/Modal";

// function AuthUserPage() {
//   return (
//     <>
//     <Container  className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
//       <h1>AuthUserPage</h1>
//       <Button>AuthUserPage</Button>

//     </Container>
//     </>
//   );
// }

// export default AuthUserPage;

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Container> 
      <Button onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    </>
  );
}

export default Example;
