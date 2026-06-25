import "./Hero.css";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPython,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";

function CodeWindow() {
  return (
    <div className="code-window">

      <div className="window-header">

        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>

        <p>developer.js</p>

      </div>

      <div className="window-body">

        <pre>

<span className="keyword">const</span>{" "}
<span className="variable">developer</span>{" "}
={" {"}

{"\n"}

&nbsp;&nbsp;
<span className="property">name</span>:
<span className="string">"Ayush Kumar"</span>,

{"\n"}

&nbsp;&nbsp;
<span className="property">role</span>:

<span className="string">

<Typewriter

words={[
"Full Stack Developer",
"Cloud Enthusiast",
"AI Explorer",
"React Developer",
"Problem Solver",
]}

loop={0}

cursor

cursorStyle="|"

typeSpeed={70}

deleteSpeed={35}

delaySpeed={1800}

/>

</span>,

{"\n"}

&nbsp;&nbsp;
<span className="property">skills</span>: [

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="string">"React"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="string">"Node"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="string">"MongoDB"</span>,

{"\n"}

&nbsp;&nbsp;&nbsp;&nbsp;
<span className="string">"AWS"</span>

{"\n"}

&nbsp;&nbsp;],

{"\n"}

&nbsp;&nbsp;
<span className="property">status</span>:
<span className="string">"Available for Internship"</span>

{"\n"}

{"}"}

        </pre>

      </div>

      <div className="tech-strip">

        <FaReact />

        <FaNodeJs />

        <SiMongodb />

        <FaAws />

        <SiPython />

        <FaGitAlt />

      </div>

    </div>
  );
}

export default CodeWindow;