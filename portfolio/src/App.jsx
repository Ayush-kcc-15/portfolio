import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <TechStack />
    </>
  );
}

export default App;