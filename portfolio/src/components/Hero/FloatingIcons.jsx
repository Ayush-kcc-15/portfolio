import "./Hero.css";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiMongodb,
  SiFirebase,
  SiPython,
  SiOpenai,
} from "react-icons/si";

function FloatingIcons() {
  return (
    <>
      <div className="floating react">
        <FaReact />
      </div>

      <div className="floating node">
        <FaNodeJs />
      </div>

      <div className="floating mongo">
        <SiMongodb />
      </div>

      <div className="floating aws">
        <FaAws />
      </div>

      <div className="floating python">
        <SiPython />
      </div>

      <div className="floating docker">
        <FaDocker />
      </div>

      <div className="floating firebase">
        <SiFirebase />
      </div>

      <div className="floating ai">
        <SiOpenai />
      </div>

      <div className="floating git">
        <FaGitAlt />
      </div>
    </>
  );
}

export default FloatingIcons;