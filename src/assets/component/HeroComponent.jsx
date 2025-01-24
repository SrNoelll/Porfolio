import "./HeroComponent.css";
import logo from "../images/logoAjoloteFondo.webp";
const HeroComponent = () => {
    return (
        <div className=" hero container">
           <img src={logo} className="arriba" alt="logo" />
            <h1> Noel Alarcón</h1>
            <h1>Full Stack Developer</h1>
            <p>I am passionate about technology and development, eager to learn and start my professional career.</p>
            <img className="abajo" src={logo} alt="logo" />
        </div>
    );
};
export default HeroComponent