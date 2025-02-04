import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track the mouse position
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      {/* Outer Circle (Border) */}
      <motion.div
        className="z-30"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 50, // Size of the border
          height: 50,
          borderRadius: "50%",
          border: "2px solid black", // Border style
          pointerEvents: "none",
          transformOrigin: "center",
        }}
        animate={{
          x: cursorPos.x - 25, // Adjust for center
          y: cursorPos.y - 25, // Adjust for center
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
      />

      {/* Inner Circle (Dot) */}
      <motion.div
        className="z-30"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12, // Size of the dot
          height: 12,
          borderRadius: "50%",
          backgroundColor: "black", // Dot color
          pointerEvents: "none",
          transformOrigin: "center",
        }}
        animate={{
          x: cursorPos.x - 5, // Adjust for center
          y: cursorPos.y - 5, // Adjust for center
        }}
        transition={{
          type: "spring",
          stiffness: 300, // Faster movement
          damping: 30,
        }}
      />
    </>
  );
};

export default Cursor;
