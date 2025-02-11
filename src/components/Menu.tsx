import { ReactNode } from "react";
import { useUIStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticFrame from "./MagneticFrame";
import { GoDotFill } from "react-icons/go";

const links = [
  { name: "Trang chủ", href: "/" },
  { name: "I. Khái niệm", href: "/definition" },
  { name: "II. Vấn đề việc làm", href: "/problem" },
  { name: "III. Quan hệ biện chứng", href: "/relation" },
  { name: "IV. Giải pháp", href: "/solution" },
  // { name: "Kết nối", href: "/connect" },
  // { name: "Về dự án", href: "/about" },
];

export default function Menu() {
  const { isMenuOpen } = useUIStore();
  return (
    <motion.div
      className={`fixed top-0 right-0 w-1/3 h-screen bg-zinc-800 flex flex-col items-center justify-center transition-all duration-500 z-10 ${
        isMenuOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-[800px] opacity-0"
      }`}
    >
      <div>
        <div className="flex justify-start w-full border-b border-zinc-600 pb-10 text-zinc-500 mb-10 text-lg space-mono">
          Mục lục
        </div>
        <div className="flex flex-col text-white text-4xl font-semibold gap-10">
          {links.map((link) => (
            <MenuItem to={link.href} key={link.href}>
              {link.name}
            </MenuItem>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const MenuItem = ({ children, to }: { children: ReactNode; to: string }) => {
  const navigate = useNavigate();
  const { toggleMenu } = useUIStore();
  return (
    <MagneticFrame>
      <div
        onClick={() => {
          toggleMenu();
          setTimeout(() => {
            navigate(to);
          }, 100);
        }}
        className="flex gap-4 items-center group cursor-pointer space-mono"
      >
        <GoDotFill
          size={20}
          className="transition-all opacity-0 group-hover:opacity-100 duration-500"
        />
        <div className="text-2xl">{children}</div>
      </div>
    </MagneticFrame>
  );
};
