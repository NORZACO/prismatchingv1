// import { ModelForm } from "./ModelForm";
// import { Button } from "react-bootstrap";
import React from "react";

export default function AlbumPage() {
  const URL = "http://127.0.0.1:4000/authgroup";
  const [auth_group, setAuthGroup] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  // chnageColor onlick
  // const [changeColor, setChangeColor] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then(setAuthGroup)
      .then(setLoading(false))
      .catch(setError);
  }, []);

  const LoadingStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    // make bigger
    width: "3rem",
    height: "3rem",
    // move to center
    marginLeft: "-1.5rem",
    marginTop: "-1.5rem",
  };

  if (loading) {
    // center loading bootstrap
    return (
      <div
        style={LoadingStyle}
        className="spinner-border text-primary"
        role="status"
      >
        <span className="visually-hidden"> Loading...</span>
      </div>
    );
  }

  if (error)
    {
      return (
        <>
        <br />
        <div className="container-fluid">
          <div className="alert alert-danger" role="alert">
            error: {error.message}
          </div>
          </div>
        </>
      );
    }

  console.log(auth_group);

  if (auth_group) {
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {auth_group.data[" result"].map((album) => (
              <div key={album.id} className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/seed/picsum/200/50"
                    alt={album.name}
                  />
                  <div className="card-body">
                    <p className="card-text">{album.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">{album.id}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


