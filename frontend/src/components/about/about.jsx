import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>
        <div className="row my-4 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-3 my-2 mx-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vishal Kumar Yadav</h5>
                <h6 class="card-subtitle text-muted my-2">21BCE1846</h6>
                <h6 class="card-subtitle text-muted my-2">
                  vishalkumar.yadav2021a@vitstudent.ac.in
                </h6>
                <Link
                  to="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                  className="btn btn-danger"
                  target="_blank"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 my-2 mx-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vaibhav Banka</h5>
                <h6 class="card-subtitle text-muted my-2">21BCE1955</h6>
                <h6 class="card-subtitle text-muted my-2">
                  Vaibhav.banka2021@vitstudent.ac.in
                </h6>
                <Link
                  to="https://www.linkedin.com/in/vaibhav-banka-828481220/"
                  className="btn btn-danger"
                  target="_blank"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 my-2 mx-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Harsh Jaiswal</h5>
                <h6 class="card-subtitle text-muted my-2">21BCE1145</h6>
                <h6 class="card-subtitle text-muted my-2">
                  harsh.jaiswal2021a@vitstudent.ac.in
                </h6>
                <Link
                  to="https://www.linkedin.com/in/harsh-jaiswal-365118239"
                  className="btn btn-danger"
                  target="_blank"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 my-2 mx-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Amrit Ranjan </h5>
                <h6 class="card-subtitle text-muted my-2">21BCE1847</h6>
                <h6 class="card-subtitle text-muted my-2">
                  amrit.ranjan2021@vitstudent.ac.in
                </h6>
                <Link
                  to="https://www.linkedin.com/in/amrit-ranjan-317473220"
                  className="btn btn-danger"
                  target="_blank"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 my-2 mx-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Suryansh Pandey</h5>
                <h6 class="card-subtitle text-muted my-2">21BCE5004</h6>
                <h6 class="card-subtitle text-muted my-2">
                  suryansh.pandey2021@vitstudent.ac.in
                </h6>
                <Link
                  to="https://www.linkedin.com/in/suryansh-pandey-67b195216/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="btn btn-danger"
                  target="_blank"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;