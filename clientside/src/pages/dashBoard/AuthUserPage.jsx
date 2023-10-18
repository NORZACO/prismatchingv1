import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AuthUserPage() {
  //   const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setSmShow(true)} className="me-2"> 
        Small modal
      </Button>
      */}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      {/* <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div
              className="offcanvas offcanvas-start show"
              tabIndex="-1"
              id="offcanvas"
              aria-labelledby="offcanvasLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                Content for the offcanvas goes here. You can place just about
                any Bootstrap component or custom elements here.
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
             height: `7500vh`,
             width : `700vh`,

        }}>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-body" style={
                {
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "bold" ,
                }
            }>
              <p>
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>
          <hr />
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Offcanvas right
                    </h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <p>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </p>
                    <p className="text-muted">
                        It&apos;s like, you know, that feeling when you&apos;re right about to give
                        someone a shoulder massage, and they turn around and you realize you&apos;re
                        massaging a complete stranger. Awkward.
                    </p>
                </div>
            </div>
            <hr />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthUserPage;
