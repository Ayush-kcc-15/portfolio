import "./Loader.css";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const loadingSteps = [
  "Initializing Portfolio",
  "Loading Hero Section",
  "Loading About Section",
  "Loading Skills",
  "Loading Projects",
  "Loading Patents",
  "Loading Certifications",
  "Loading Education",
  "Loading Contact",
  "Loading Theme",
  "Portfolio Ready",
];

function Loader({ onFinish }) {
  const terminalCommand = "./launch-portfolio.sh";

  const [typedCommand, setTypedCommand] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [showLaunch, setShowLaunch] = useState(false);

  /* -----------------------------
        TYPE TERMINAL COMMAND
  ------------------------------*/

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedCommand(
        terminalCommand.slice(0, index + 1)
      );

      index++;

      if (index >= terminalCommand.length) {
        clearInterval(typing);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

  /* -----------------------------
        TERMINAL BOOT
  ------------------------------*/

  useEffect(() => {
    if (typedCommand !== terminalCommand) return;

    let step = 0;

    const interval = setInterval(() => {
      setCurrentStep(step);

      setProgress(
        Math.round(
          ((step + 1) / loadingSteps.length) * 100
        )
      );

      step++;

      if (step >= loadingSteps.length) {
        clearInterval(interval);

        setTimeout(() => {
          setShowLaunch(true);
        }, 400);

        setTimeout(() => {
          onFinish();
        }, 1800);
      }
    }, 420);

    return () => clearInterval(interval);
  }, [typedCommand, onFinish]);

  return (
    <AnimatePresence>

      <motion.div
        className="loader"

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        exit={{
          opacity: 0,
          scale: 1.03,
        }}

        transition={{
          duration: 0.6,
        }}
      >

        {/* Background */}

        <div className="loader-background">

          <div className="bg-circle bg1"></div>

          <div className="bg-circle bg2"></div>

          <div className="bg-circle bg3"></div>

        </div>

        {/* Terminal */}

        <div className="terminal-window">

          <div className="terminal-header">

            <div className="terminal-controls">

              <span className="red"></span>

              <span className="yellow"></span>

              <span className="green"></span>

            </div>

            <div className="terminal-title">

              ayush@portfolio:~

            </div>

          </div>

          <div className="terminal-body">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
            >
              AYUSH KUMAR
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .35 }}
            >
              Full Stack Developer • AI • Cloud • Web Development
            </motion.p>

            <div className="terminal-command">

              <span className="prompt">

                ayush@portfolio:~$

              </span>

              <span className="command">

                {typedCommand}

              </span>

              <span className="cursor">|</span>

            </div>

            <div className="terminal-output">
                        {loadingSteps.map((step, index) => (

                <motion.div
                  key={index}
                  className={`terminal-line ${
                    index <= currentStep ? "active" : ""
                  }`}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0.35,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >

                  {index <= currentStep ? (

                    <>
                      <FaCheckCircle className="check-icon" />

                      <span>{step}</span>
                    </>

                  ) : (

                    <>
                      <span className="pending-dot">•</span>

                      <span>Waiting...</span>
                    </>

                  )}

                </motion.div>

              ))}

            </div>

            {/* ==========================
                    Progress Bar
            ========================== */}

            <div className="loader-progress">

              <div className="loader-progress-track">

                <motion.div
                  className="loader-progress-fill"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: .35,
                  }}
                />

              </div>

              <span className="progress-text">

                {progress}%

              </span>

            </div>

            {/* ==========================
                  Launch Message
            ========================== */}

            <AnimatePresence>

              {showLaunch && (

                <motion.div

                  className="launch-box"

                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                  }}

                  transition={{
                    duration: .5,
                  }}

                >

                  <h3>

                    ✔ Portfolio Ready

                  </h3>

                  <p>

                    ✔ Build Successful

                  </p>

                  <span>

                    Starting Development Server...
                    

                  </span>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </motion.div>

    </AnimatePresence>

  );

}

export default Loader;