import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-auto py-5">
        <div className="container ">
          <div className="row g-4">
            <div className="col-12 col-sm-4">
              <div className="inner-content text-center pt-4">
                <h3 className="text-uppercase">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="inner-content text-center pt-4">
                <h3 className="text-uppercase">Around The Web</h3>
                <ul className="list-unstyled d-flex gap-2 justify-content-center">
                  <li>
                    <i className="fa-brands fa-facebook circle"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter circle"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin circle"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe circle"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="inner-content text-center pt-4">
                <h3 className="text-uppercase">About Freelancer</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center py-2 m-0">
          <p className="m-0 py-2">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
