import React, { useEffect, useState } from "react";

export default function Contact() {
  const [inputStates, setInputStates] = useState({
    userName: false,
    userAge: false,
    userEmail: false,
    userPassword: false,
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const newState = structuredClone(inputStates);
    newState[id] = e.target.value.length > 0;
    setInputStates(newState);
  };

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div className="flex-grow-1 d-flex mt-5 pt-5 align-items-center flex-column w-100 bg-white">
        <div className="container py-5">
          <div className="main-color mb-4">
            <h2 className="text-uppercase text-center fs-1 fw-bolder ">
              Contact Section
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
              <div className="line bg-main"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line bg-main"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="w-75">
              <div>
                <div className="input-group my-5 mt-2">
                  <label
                    className={inputStates.userName ? "move-top" : ""}
                    htmlFor="userName"
                  >
                    User Name:
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="form-control pt-3"
                    id="userName"
                    placeholder="User Name"
                  />
                </div>
                <div className="input-group my-5">
                  <label
                    className={inputStates.userAge ? "move-top" : ""}
                    htmlFor="userAge"
                  >
                    User Age:
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="number"
                    className="form-control pt-3"
                    id="userAge"
                    placeholder="User Age"
                  />
                </div>
                <div className="input-group my-5">
                  <label
                    className={inputStates.userEmail ? "move-top" : ""}
                    htmlFor="userEmail"
                  >
                    User Email:
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="email"
                    className="form-control pt-3"
                    id="userEmail"
                    placeholder="User Email"
                  />
                </div>
                <div className="input-group mt-5 mb-4">
                  <label
                    className={inputStates.userPassword ? "move-top" : ""}
                    htmlFor="userPassword"
                  >
                    User Password:
                  </label>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="password"
                    className="form-control pt-3"
                    id="userPassword"
                    placeholder="User Password"
                  />
                </div>
              </div>
              <button className="btn btn-secondary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
