import React from "react";

function GetJokes({ results }) {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Jumbotron with icon</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {results.setup } 
          {/* <code>.col-*</code>  */}

        </p>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {results.delivery }
          {/* <code>.col-*</code>  */}

        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Call to action
            <svg className="bi ms-2" width="24" height="24">
              <use xlinkHref="#arrow-right-short"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const URL = "https://v2.jokeapi.dev/joke/Any";
  const [jokes, setJokes] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then(setJokes);
    setLoading(false);
    // .catch((error) => setError(error))
    // .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading...";

  // if (error) return "Error!";

  if (jokes)
    return (
      <>
        <GetJokes results={jokes} />
      </>
    );
}
