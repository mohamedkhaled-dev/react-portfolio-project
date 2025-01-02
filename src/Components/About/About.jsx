import React, { useEffect } from "react";

export default function About() {
    useEffect(() => {
      document.title = "About";
    }, []);
  
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col ">
            <div className="inner-content text-center">
              <h2 className="text-uppercase fs-1 fw-bolder">About Component</h2>
              <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
                <div className="line"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-1">
          <div className="col-md-6">
            <p className="inner-text px-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="inner-text px-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
