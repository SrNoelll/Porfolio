import "./SobreMiComponent.css";
import retrato from "../images/fotoCurFin.png";
import vid from "../images/teclado.mp4";
import BurbujaComponent from "./BurbujaComponent";

const SobreMiComponent = () => {
  return (
    <div className="container p-4 my-4">
      <h1>Hi, I am Noel</h1>
      <div className="row d-flex align-items-center">
        <div className="col-3 text-center">
          <img className="retrato img-fluid" src={retrato} alt="mi foto" />
        </div>
        <div className="col-4 text-center">
          <div className="my-3">
            <BurbujaComponent />
          </div>
        </div>
        <div className="col-5 row text-center">
          <div className="sketchfab-embed-wrapper">
            {" "}
            <iframe
              className="col-12"
              height={400}
              title="Flat_design_web"
              frameBorder={0}
              allowFullScreen=""
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              src="https://sketchfab.com/models/93e281bab134498fb94a70eb80eb20d5/embed?autospin=1&autostart=1&camera=0&preload=1&transparent=1&dnt=1"
            >
              {" "}
            </iframe>{" "}
          </div>
        </div>
      </div>
      <div className="container py-4 background">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 my-5">
            <h2>About me</h2>
            <div className="presentacion p-4">
              <p>
                I define myself as a highly motivated individual, eager to learn
                and take on new challenges in the technology sector as I begin
                my professional career. With 1.5 years of internship experience,
                I have gained hands-on knowledge in providing exceptional
                customer service and technical support.<br></br> My work has
                involved diagnosing and repairing a wide range of computer
                systems, ensuring they function optimally. Additionally, I have
                managed and maintained servers in both Linux and Windows
                environments, handling tasks such as system administration,
                security, and troubleshooting.<br></br> My experience has not
                only deepened my technical skills but also enhanced my ability
                to communicate effectively with clients and work in fast-paced,
                problem-solving situations.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-5">
            <h2>Work Experience</h2>
            <div className="presentacion p-4">
              <p>
                <b>IT Technician in Computer Assembly and Repair</b>
                <br></br>
                Megasur | September 2021 - May 2022<br></br>
                <ul>
                  <li>Assembly and repair of equipment.</li>
                  <li>Inventory management and control.</li>
                </ul>
                <b>IT and Multimedia Systems Technician</b>
                <br></br>
                Nopea | September 2022 - May 2023<br></br>
                <ul>
                  <li>Management and administration of operating systems.</li>
                  <li>Repair of various types of computer equipment.</li>
                  <li>Customer service.</li>
                  <li>
                    Creation of audiovisual content using Blender 3D, Photoshop,
                    and DaVinci Resolve.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-5">
            <h2>Academic Background</h2>
            <div className="presentacion p-4">
              <p>
                <b>I.E.S Alonso Cano Educational Center</b>
                <br></br>
                Higher Level Technical Certificate in Web Application
                Development | Currently Enrolled<br></br>
                <b>I.E.S Alonso Cano Educational Center</b>
                <br></br>
                Intermediate Level Technical Certificate in Microcomputer
                Systems and Networks | September 2021 - May 2023<br></br>
                <b>Fundations of Cybersecurity | Google</b>
                <br></br>
                This course is part of the Google Cybersecurity Professional
                Certificate<br></br>
                <b>Play It Safe: Manage Security Risks | Google </b>
                <br></br>
                This course is part of the Google Cybersecurity Professional
                Certificate<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMiComponent;
