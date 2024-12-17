import React, { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function Index() {
  const navigate = useNavigate();
  const [showHello, setShowHello] = useState(true);
  const [showNewText, setShowNewText] = useState(false);

  useEffect(() => {
    const fadeOutHello = setTimeout(() => {
      setShowHello(false);
      setShowNewText(true);
    }, 2000);

    return () => clearTimeout(fadeOutHello);
  }, []);

  useEffect(() => {
    if (showNewText) {
      const navigateTimeout = setTimeout(() => {
        navigate("/3d-experience");
      }, 7000);

      return () => clearTimeout(navigateTimeout);
    }
  }, [showNewText, navigate]);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontFamily: '"Meow Script", serif',
      fontWeight: 200,
      fontSize: "4rem",
      fontStyle: "normal",
      position: "relative",
      overflow: "hidden",
    },
    text: {
      position: "absolute",
      animation: "fadeIn 3s ease-in forwards, fadeOut 3s 3s ease-out forwards",
    },
    newText: {
      position: "absolute",
      opacity: 0,
      animation: "fadeIn 2s 2s ease-in forwards", // Delay new text fade-in after 3s
    },
  };

  // Inject dynamic keyframes
  const keyframesStyle = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.95);
      }
    }
  `;

  return (
    <>
      {/* Inject keyframes */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Meow+Script&family=Pacifico&family=Playwrite+NL+Guides&display=swap');
          ${keyframesStyle}
        `}
      </style>

      <div style={styles.container}>
        {showHello && <div style={styles.text}>Hello Gresi!!</div>}
        {showNewText && <div style={styles.newText}>Kya Haal hai ?</div>}
      </div>
    </>
  );
}
