import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// //import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home";

// // const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root");
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
//   );


// root.render(
//   <BrowserRouter>
//       <header>
//       <Link className="site-logo" to="/"> MWAMUZISCODE  </Link>
//         <nav>
//           <Link to="/"> Home  </Link>
//         </nav>
//       </header>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/about" element={<About />} />
//       <Route path="home" element={<Home />} />
      
//     </Routes>
//   </BrowserRouter>
// );

// function About() {
//   return <h1> Hello About </h1>;
// }
