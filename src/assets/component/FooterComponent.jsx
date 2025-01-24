import "./FooterComponent.css";
import logo from "../images/logoAjoloteFondo.webp";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <footer className="container-fluid py-5">
            <p>Ready to turn ideas into reality?</p>
            <h2>Let's talk!</h2>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4 my-3">noelalarconpuerta@gmail.com</div>
                    <div className="col-lg-4 my-3">
                        <a id="bemail" className="my-3 bemail" href="mailto:noelalarconpuerta@gmail.com?subject=Professional%20Inquiry%20from%20My%20Portfolio&body=Write%20your%20message%20here" class="email-button">
                            Send email
                        </a>
                    </div>
                    <div className="col-lg-4 my-3">+34 603011897</div>
                </div>
                <div className="my-4 line container-fluid">
                    
                </div>
                <div className="row text-center">
                        <div className="col">
                            <a target="_blank" href="https://github.com/SrNoelll">
                            <FaGithub />
                            </a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://www.linkedin.com/in/noel-alar/">
                            <FaLinkedin />
                            </a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://www.instagram.com/noell.py">
                            <FaInstagram />
                            </a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://www.youtube.com/@noelClimb">
                            <FaYoutube />
                            </a>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
