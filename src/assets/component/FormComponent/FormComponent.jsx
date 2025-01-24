import React, { useEffect, useState } from "react";
import avion from "../../images/avion.png"; // Reemplaza con la ruta correcta de la imagen

const FormComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta si es móvil al cargar
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();

    // Escucha cambios en el tamaño de la ventana
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Si es móvil, no activa la animación

    const paperPlane = document.getElementById("paperPlane");
    if (!paperPlane) return; // Evita errores si el elemento no existe

    let posX = 0; // Posición inicial en X
    let posY = 0; // Posición inicial en Y
    let dirX = 1; // Dirección inicial en X
    let dirY = 1; // Dirección inicial en Y

    const margin = 50; // Margen de los bordes (evita que toque los bordes de la pantalla)

    function animatePlane() {
      posX += dirX * 2; // Velocidad del avión en X
      posY += dirY * 2; // Velocidad del avión en Y

      // Cambia dirección al alcanzar los límites del viewport
      if (posX > window.innerWidth - margin || posX < 0) {
        dirX *= -1; // Invertir dirección en X
        paperPlane.style.transform = `scaleX(${dirX}) translate(${posX}px, ${posY}px)`;
      }
      if (posY > window.innerHeight - margin || posY < 0) {
        dirY *= -1; // Invertir dirección en Y
      }

      paperPlane.style.transform = `translate(${posX}px, ${posY}px) scaleX(${dirX})`;
      requestAnimationFrame(animatePlane); // Repetir animación
    }

    animatePlane(); // Inicia la animación
  }, [isMobile]);

  return (
    <section className="container">
      {!isMobile && ( // Solo renderiza el avión si no es móvil
        <div id="paperPlane" className="plane" style={{ position: "fixed", top: 0, left: 0 }}>
          <img src={avion} alt="Paper Plane" height="50" />
        </div>
      )}
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 mx-auto text-center p-4">
          <h1 className="mb-4">Don't shy to Contact us.</h1>
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
          <div className="col-12 d-flex justify-content-start">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
