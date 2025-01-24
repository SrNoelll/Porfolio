import React, { useEffect, useState } from "react";
import avion from "../../images/avion.png";

const FormComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const paperPlane = document.getElementById("paperPlane");
    if (!paperPlane) return;

    let posX = 0;
    let posY = 0;
    let dirX = 1;
    let dirY = 1;

    const margin = 50;

    function animatePlane() {
      posX += dirX * 2;
      posY += dirY * 2;

      if (posX > window.innerWidth - margin || posX < 0) {
        dirX *= -1;
        paperPlane.style.transform = `scaleX(${dirX}) translate(${posX}px, ${posY}px)`;
      }
      if (posY > window.innerHeight - margin || posY < 0) {
        dirY *= -1;
      }

      paperPlane.style.transform = `translate(${posX}px, ${posY}px) scaleX(${dirX})`;
      requestAnimationFrame(animatePlane);
    }

    animatePlane();
  }, [isMobile]);

  return (
    <section className="container">
      {!isMobile && (
        <div id="paperPlane" className="plane" style={{ position: "fixed", top: 0, left: 0 }}>
          <img src={avion} alt="Paper Plane" height="50" />
        </div>
      )}
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 mx-auto text-center p-4">
          <h1 className="mb-4">I'd be happy to hear your ideas. Let's get in touch!</h1>
          <div className="row g-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input className="form-control" type="text" placeholder="Your Name" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input className="form-control" type="email" placeholder="Your E-mail" />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Message"
              />
            </div>
          </div>
          <div className="my-3 col-12 d-flex justify-content-start">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
