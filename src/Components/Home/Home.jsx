// Home.jsx
import { useEffect } from "react";
import Avatar from "../../assets/avatar.svg";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="container my-5 pt-5">
        <div className="row h-100 ">
          <div className="col ">
            <div className="inner-content text-center d-flex flex-column align-items-center justify-content-center">
              <div className="img-container">
                <img className="img-fluid" src={Avatar} alt="" />
              </div>
              <h2 className="pt-4 text-uppercase fs-1 fw-bolder">
                Start Framework
              </h2>
              <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
                <div className="line"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line"></div>
              </div>
              <div>Graphic Artist - Web Designer - Illustrator</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
