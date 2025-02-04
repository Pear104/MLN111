import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useUIStore } from "../stores/store";
import Menu from "./Menu";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useUIStore();
  const navigate = useNavigate();
  return (
    <div className="fixed w-full flex justify-between items-center mt-12 px-12 z-30">
      <motion.div
        className="text-lg cursor-pointer px-4 py-2 bg-white rounded-full border border-black space-mono"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
          x: 10,
          y: 10,
        }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          if (isMenuOpen) toggleMenu();
          setTimeout(() => {
            navigate("/");
          }, 100);
        }}
      >
        © Gà Bông Team
      </motion.div>
      <motion.div
        className="p-8 border rounded-full border-black z-20 bg-white cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={toggleMenu}
      >
        <HiOutlineMenu />
      </motion.div>
      <Menu />
    </div>
  );
}
