import { useState } from "react";
import { motion } from "framer-motion";

import Loader from "./components/Loader/Loader";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import TechStack from "./components/Techstack/Techstack";
import Projects from "./components/Projects/Projects";
import Patents from "./components/Patents/patents";
import Certifications from "./components/Certifications/Certifications";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>

      {loading ? (

        <Loader
          onFinish={() => setLoading(false)}
        />

      ) : (

        <motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>

  <Navbar />

  <Hero />

  <Stats />

  <About />

  <Skills />

  <TechStack />

  <Projects />

  <Patents />

  <Certifications />

  <Achievements />

  <Education />

  <Contact />

  <Footer />

</motion.div>
      )}

    </>
  );
}

export default App;