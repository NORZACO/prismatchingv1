import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ErrorBoundary from "./ErrorBoundary";

export default function Contact() {
  const [userData, setuserData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:4000")
      .then((response) => response.json())
      .then(setuserData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (error) return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Error</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {error.message}
        </p>
      </div>
    </div>
  );

  console.log("User--->", userData.users);

  const userDataResult = userData?.users?.map((user) => {
    return {
      name: user.name,
      id: user.id,
    };
  });

  console.log("User Data Result--->", userDataResult);

  if (loading) return <h1>Loading.....</h1>;

  return (
    <ErrorBoundary>
      <div className="wrapper">
        <BarChart width={800} height={300} data={userDataResult}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="id" />
          <Tooltip />
          <Legend />
          <Bar dataKey="id" fill="#8884d8" />
        </BarChart>
      </div>
    </ErrorBoundary>
  );
}
