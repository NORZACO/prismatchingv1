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

import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import PropTypes from 'prop-types';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Button onClick={handleShow}>Launch</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Auth User - Min Dashboard </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form className="row g-3">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-info mb-3">
                  Confirm 
                </button>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  model form
                </button>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-danger mb-3">
                  delete
                </button>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
        < Apple />
      </Container>
    </>
  );
}


const Album = ({ album }) => {
 const [showInfo, setShowInfo] = useState(false);

 const handleClick = () => {
    setShowInfo(!showInfo);
 };

 return (
    <div className="album" onClick={handleClick}>
      <img src={album.image} alt={album.title} />
      {showInfo && (
        <div className="album-info">
          <h2>{album.title}</h2>
          <p>{album.artist}</p>
          <p>{album.year}</p>
        </div>
      )}
    </div>
 );
};

const Apple = () => {
 const albums = [
    {
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      year: 1973,
      image: 'https://picsum.photos/seed/picsum/200/50',
    },
    {
      title: 'The Beatles',
      artist: 'The Beatles',
      year: 1968,
      image: 'https://picsum.photos/seed/picsum/200/50',
    },

    {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    year: 1973,
    image: 'https://picsum.photos/seed/picsum/200/50',
  },
  {
    title: 'The Beatles',
    artist: 'The Beatles',
    year: 1968,
    image: 'https://picsum.photos/seed/picsum/200/50',
  },
 ];

 Album.propTypes = {
  album: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,

  }).isRequired,
};



 return (
    <div className="App container">
      <h1>Album Collection</h1>
      <div className="album-grid">
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div> <br></br>
    </div>
 );
};



export default Example;
