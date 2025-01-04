import React, { useEffect, useState } from "react";
import port_1 from "../../assets/port1.png";
import port_2 from "../../assets/port2.png";
import port_3 from "../../assets/port3.png";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([
    { src: port_1, alt: "Portfolio Image 1" },
    { src: port_2, alt: "Portfolio Image 2" },
    { src: port_3, alt: "Portfolio Image 3" },
    { src: port_1, alt: "Portfolio Image 1" },
    { src: port_2, alt: "Portfolio Image 2" },
    { src: port_3, alt: "Portfolio Image 3" },
  ]);
  const [currentImage, setCurrentImage] = useState(null);

  const handleModalDisplay = (index) => {
    setIsModalOpen(true);
    setCurrentImage(images[index]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <div className="flex-grow-1 d-flex mt-5 pt-5 align-items-center flex-column w-100 bg-white">
        <div className="container py-5">
          <div className="main-color mb-2">
            <h2 className="text-uppercase text-center fs-1 fw-bolder ">
              Portfolio Component
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
              <div className="line bg-main"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line bg-main"></div>
            </div>
          </div>
          <div className="row g-5 pt-2">
            {images.map((image, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card" onClick={() => handleModalDisplay(index)}>
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <i className="plus_icon text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <div
            className="modal-layer d-flex justify-content-center align-items-center"
            onClick={handleCloseModal}
          >
            <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImage?.src}
                alt={currentImage?.alt}
                className="img-fluid"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
