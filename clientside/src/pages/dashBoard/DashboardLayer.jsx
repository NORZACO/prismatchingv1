import "bootstrap/dist/css/bootstrap.min.css";
// import { ModelForm } from "../ModelForm";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavigaterLayerForDashboard } from "./NavigaterLayerForDashboard";

export default function DashboardLayer() {
  return (
    <>
      {/* */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h1 className="card-title">Dashboard</h1>
                <p className="card-text">
                  This is a dashboard page. You can add, edit, delete and view
                  data from this page.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button
                    variant="primary"
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add New
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigaterLayerForDashboard />
      <Outlet />
    </>
  );
}


