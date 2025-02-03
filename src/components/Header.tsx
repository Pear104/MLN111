import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed flex justify-between items-center mt-12 mx-16">
      <motion.div
        className="text-lg cursor-pointer"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
          x: 10,
          y: 10,
        }}
      >
        © Gà Bông Team
      </motion.div>
      <div className="">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
