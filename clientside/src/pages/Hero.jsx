import React from "react";

import PropTypes from 'prop-types';

function GetJokes({ results }) {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis"> Random Jokes From <a href="https://v2.jokeapi.dev/joke/Any"> Jokes API </a> </h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {/* {results.setup} */}
        </p>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          { results.delivery }
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Call to action
            <svg className="bi ms-2" width="24" height="24">
              <use xlinkHref="#arrow-right-short" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

GetJokes.propTypes = {
  results: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
  }).isRequired,
};


export default function Header() {
  const URL = "https://v2.jokeapi.dev/joke/Any";
  const [jokes, setJokes] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then(setJokes)
      .then(setLoading(false))
    .catch(setError)
    // .finally(() => setLoading(false));
  }, []);

  if (loading) return <div> Loading  </div>

  if (error) return <div> Error </div>

  if (jokes)
    return (
      <>
        <GetJokes results={jokes} />
      </>
    );
}
