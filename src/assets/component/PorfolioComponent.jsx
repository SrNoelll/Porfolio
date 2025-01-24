import "./PorfolioComponent.css";
import plaxer from '../images/plaxerPage.png'
import poke from '../images/pokepage.png'
import ifif from '../images/ifif.png'
import stain from '../images/stain.png'
import key from '../images/Key.png'
import quien from '../images/quien.png'
import BurbujaComponent from "./BurbujaComponent";

const PorfolioComponent = () => {
  return (
    <div className="container px-4">
      <h1>My Works</h1>
      <div className="container-fluid row my-4 py-4">
        <div className="col-lg-6 p-4">
        <a target="_blank" href="https://srnoelll.github.io/PlaxerPage/">
            <img className="derecha" src={plaxer} alt="plaxer"/>
          </a>
        </div>
        <div className=" col-lg-6 p-4">
          <a target="_blank" href="https://srnoelll.github.io/Pokemon">
            <img className="izquierda" src={poke} alt="plaxer"/>
          </a>
        
        </div>
      </div>
      <div className="container-fluid row my-4 py-4">
        <div className="col-lg-6 p-4">
          <img className="derecha" src={ifif} alt="plaxer"/>
        </div>
        <div className=" col-lg-6 p-4">
          <a href="https://srnoelll.github.io/Stain-the-canvas/">
          <img className="izquierda" src={stain} alt="plaxer"/>
          </a>
        </div>
      </div>

      <div className="container-fluid row my-4 py-4">
        <div className="col-lg-6 p-4">
        <a target="_blank" href="https://srnoelll.github.io/Mi-pagina-web-de-teclados/">
            <img className="derecha" src={key} alt="plaxer"/>
          </a>
        </div>
        <div className=" col-lg-6 p-4">
          <a target="_blank" href="https://jsr-17.github.io/Juego-de-QuienSoy/">
            <img className="izquierda" src={quien} alt="plaxer"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PorfolioComponent;
