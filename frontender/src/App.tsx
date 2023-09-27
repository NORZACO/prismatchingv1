import React from "react";

// type { "users": [ { "id": number, "name": string }, { "id": 2, "name": "Mudo Studio" }, { "id": 3, "name": "Content Modulator" } ] }

function Car(props: {
  brand:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <li>I am a {props.brand}</li>;
}

function Garage(): any {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}

// USER
function User(props: {
  name: string;
  age: number;
  email: string;
  address: string;
}) {
  return (
    <li>
      {props.name} {props.age} {props.email} {props.address}
    </li>
  );
}
const users = [
  {
    name: "Mudo Studio",
    age: 10,
    email: "",
    address: ""
  },
  {
    name: "Content Modulator",
    age: 10,
    email: "",
    address: ""
  }
];

function Users() {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <User name={user.name} age={user.age} email={user.email} address={""} />
        ))}
      </ul>
    </>
  );
}

export default function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data === null) return <h1>Hello</h1>;

  return (
    <>
      <p>{JSON.stringify(data, null, 2)}</p>
      <Garage />
      <hr />
      <Users />
    </>
  );
}
