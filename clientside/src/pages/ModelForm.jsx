// import { Alert } from "bootstrap";
import React from "react";
import swal from "sweetalert2";

// import { Link } from "react-router-dom";
export function ModelForm() {
  const [getName, setName] = React.useState({ name: "" });
  // error
  const [error, setError] = React.useState(null);
  const URL = "http://127.0.0.1:4000/authgroup/create";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getName.name === "") {
      swal.fire({
        title: "Error!",
        text: "Please, Make sure the form is filled ",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    console.log(getName);
    // fetch post
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getName),
    })
    .then((response) => response.json())
    .then(function (data) {
    //create if data.status === sucess
    if (data.status === "success") {
      swal.fire({
        title: "Success!",
        text: "Authentication Group Created Successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
      // clear the form
      setName({ name: "" });
    }
    })
    .catch((error) => {
      setError(error);
      // console.error("Error:", error);
      swal.fire({
        title: "Error!",
        text: "Authentication Group Already Exist",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
    );
    };


    // create if data.status === error
    // if (data.status === "fail") {
    //   swal.fire({
    //     title: "Error!",
    //     text: "Authentication Group Already Exist",
    //     icon: "error",
    //     confirmButtonText: "Cool",
    //   });
    // }

    // clear the form


  // http://127.0.0.1:4000/authgroup/create

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Auth Group
            </h1>
            {/* error */}
            {error && <Alert variant="danger">{error}</Alert>}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Add New Authentication Group:
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  value={getName.name}
                  onChange={(e) => setName({ name: e.target.value })}
                  // onChange={(e) => setName({...getName, name : e.target.value })}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
