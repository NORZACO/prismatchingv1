import { ModelForm } from "./ModelForm";
import { Button } from "react-bootstrap";
import React from "react";

function AlbumPage() {
  const URL = "http://127.0.0.1:4000/authgroup";
  const [auth_group, setAuthGroup] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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
    return (
      <div className="alert alert-danger" role="alert">
        error: {error.message}
      </div>
    );

  console.log(auth_group);

  if (auth_group)
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {auth_group.data[" result"].map((album) => (
              <div key={album.id} className="col">
                <div className="card shadow-sm">
                  {/* <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    {album.name}
                    </text>
                  </svg> */}
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

//   return (
//     <div className="album py-5 bg-body-tertiary">
//       <div className="container">
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//           <div className="col">
//             <div className="card shadow-sm">
//               <svg
//                 className="bd-placeholder-img card-img-top"
//                 width="100%"
//                 height="225"
//                 xmlns="http://www.w3.org/2000/svg"
//                 role="img"
//                 aria-label="Placeholder: Thumbnail"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#55595c"></rect>
//                 <text x="50%" y="50%" fill="#eceeef" dy=".3em">
//                   Thumbnail
//                 </text>
//               </svg>
//               <div className="card-body">
//                 <p className="card-text">
//                   This is a wider card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="btn-group">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-outline-secondary"
//                     >
//                       View
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-outline-secondary"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                   <small className="text-body-secondary">9 mins</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function DashBoardPage() {
  return (
    <>
      <br />
      <br />
      <h3
        style={{
          textAlign: "center",
          color: "blue",
          fontSize: "50px",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontStyle: "italic",

          // textDecoration: "underline"
        }}
      >
        Auth Group Page
      </h3>
      <br />
      {/* add button */}
      <Button
        style={{ marginLeft: "20px", backgroundColor: "blue", color: "white", fontWeight: "bold",/*className="dropdown-item"*/ }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        href={"#"}
        variant="primary"
      >
        Add New Auth Group
      </Button>

      <AlbumPage />
      <ModelForm />
    </>
  );
}
