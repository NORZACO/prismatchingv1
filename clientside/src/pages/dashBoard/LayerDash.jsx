import "bootstrap/dist/css/bootstrap.min.css";
// import { ModelForm } from "../ModelForm";
import { Button } from "react-bootstrap";

import { Link, Outlet } from "react-router-dom"


function DashBoardPage() {
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
          Auth Group PageS
        </h3>
        <br />
        {/* add button */}
        <Link
          style={{
            marginLeft: "20px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold", 
            textDecoration: "underline"
          }}
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            // data-bs-whatever="@mdo"
            to="authuser">Add New</Link>
            {/* <hr/> */}
        
  
        {/* add button */}
        <Button
          style={{
            marginLeft: "20px",
            backgroundColor: "danger",
            color: "white",
            fontWeight: "bold" /*className="dropdown-item"*/,
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          href={"#"}
          variant="danger"
        >
          Add New Auth Group
        </Button>
  
        {/* add button */}
        <Button
          style={{
            marginLeft: "20px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold" /*className="dropdown-item"*/,
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          href="/homework"
          variant="primary"
        >
         homework
        </Button>
  
        {/* add button */}
        <Button
          style={{
            marginLeft: "20px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold" /*className="dropdown-item"*/,
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          href={"#"}
          variant="primary"
        >
          Add New Auth Group
        </Button>
  
        {/* add button */}
        <Button
          style={{
            marginLeft: "20px",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold" /*className="dropdown-item"*/,
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          href={"#"}
          variant="primary"
        >
          Add New Auth Group
        </Button>
        {/* <ModelForm /> */}
      </>
    );
  }




export default function LayOut() {

    return (
        <>
            {/* <NavigationPage />  */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                   < DashBoardPage />
                    </div>
                </div>
            </div>
            <Outlet />
            {/* <Footer />  */}
           
        </>
    )
}