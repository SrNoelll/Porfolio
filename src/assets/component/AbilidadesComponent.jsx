import "./AbilidadesComponent.css";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const AbilidadesComponent = () => {
    return (
      <div className="abilidades container text-center">
  <div className="row">
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.java.com" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaJava />
        <span className="icon-name">Java</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.php.net" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaPhp />
        <span className="icon-name">PHP</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaPython />
        <span className="icon-name">Python</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer" className="icon-container">
        <SiGnubash />
        <span className="icon-name">Bash</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaJs />
        <span className="icon-name">JavaScript</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaFigma />
        <span className="icon-name">Figma</span>
      </a>
    </div>
  </div>
  <h1>Abilities</h1>
  <div className="row">
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaCss3Alt />
        <span className="icon-name">CSS3</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" className="icon-container">
        <GrMysql />
        <span className="icon-name">MySQL</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaWordpress />
        <span className="icon-name">Wordpress</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://en.wikipedia.org/wiki/XML" target="_blank" rel="noopener noreferrer" className="icon-container">
        <LuCodeXml />
        <span className="icon-name">XML</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaDocker />
        <span className="icon-name">Docker</span>
      </a>
    </div>
    <div className="col-md-2 col-sm-4 col-4">
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="icon-container">
        <FaReact />
        <span className="icon-name">React</span>
      </a>
    </div>
  </div>
</div>

    
    );
};
export default AbilidadesComponent;
