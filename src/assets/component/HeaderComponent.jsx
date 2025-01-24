import { Link } from "react-router-dom";
import logo from "../images/logoAjoloteTransparente.webp";
import "./HeaderComponent.css";

const HeaderComponent = (props) => {
    
    return (
        <header className="container">
            <nav className="container">
                <div className="row align-items-center">
                    <Link to={"/"} className="col">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <Link to={"/CV"} className="col opcion">
                        CV
                    </Link>
                    <Link to={"/Contact"} className="col opcion">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};
export default HeaderComponent;
