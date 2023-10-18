// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import swal from "sweetalert2";

export function ModelForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const URL = "http://127.0.0.1:4000/authgroup/create";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      swal.fire({
        title: "Error!",
        text: "Please make sure the form is filled",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (data.status === "success") {
        swal.fire({
          title: "Success!",
          text: "Authentication Group Created Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        setName(""); // Clear the form input
      } else if (data.status === "fail") {
        swal.fire({
          title: "Error!",
          text: "Authentication Group was Not Created Successfully",
          icon: "error",
          confirmButtonText: "Not Cool",
        });
        setName(""); // Clear the form input
      }
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

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
            {error && <div className="alert alert-danger">{error}</div>}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              type="button"
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
