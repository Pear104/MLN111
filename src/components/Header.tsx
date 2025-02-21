// import { motion } from "framer-motion";
// import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { useUIStore } from "../stores/store";
import Menu from "./Menu";

const links = [
  { name: "Trang chủ", href: "/" },
  { name: "Khái niệm", href: "/definition" },
  { name: "Vấn đề việc làm", href: "/problem" },
  { name: "Quan hệ biện chứng", href: "/relation" },
  { name: "Giải pháp", href: "/solution" },
  { name: "Trợ lí ảo", href: "/assistant" },
  // { name: "Kết nối", href: "/connect" },
  // { name: "Về dự án", href: "/about" },
];

export default function Header() {
  // const { isMenuOpen, toggleMenu } = useUIStore();
  // const navigate = useNavigate();
  return (
    <div className="w-full fixed left-0 top-0 flex justify-between items-center py-2.5 px-12 z-50 bg-black">
      {/* <div className="fixed w-full flex justify-between items-center mt-12 px-12 z-30"> */}
      {/* <motion.div
        className="text-lg cursor-pointer px-4 py-2 bg-white rounded-full border border-black space-mono z-50"
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
      </motion.div> */}
      <div className="flex text-white font-semibold gap-10">
        {links.map((link) => (
          <Link to={link.href} key={link.href} className="group">
            {link.name}
            <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300"></div>
          </Link>
        ))}
        <a
          target="_blank"
          href="https://forms.gle/rGVA5KZQfkgrNWSJ7"
          className="group"
        >
          Góp ý
          <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300"></div>
        </a>
      </div>
      {/* <motion.div
        className="p-8 border rounded-full border-black z-50 bg-white cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={toggleMenu}
      >
        <HiOutlineMenu />
      </motion.div> */}
      <Menu />
    </div>
  );
}
