import { motion } from "framer-motion";

// const text = {
//   initial: {
//     opacity: 1,
//   },
//   enter: {
//     opacity: 0,
//     top: -100,
//     transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
//     transitionEnd: { top: "47.5%" },
//   },
//   exit: {
//     opacity: 1,
//     top: "40%",
//     transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
//   },
// };

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children }) {
  // const routes = {
  //   "/": "Trang ch",
  //   "/definition": "Khái niệm",
  //   "/problem": "Vấn đề xã hội",
  //   "/relation": "Mối quan hệ biện chứng",
  //   "/solution": "Giải pháp",
  //   "/connect": "Kết nối",
  //   "/about": "Về chúng tôi",
  // };

  return (
    <div className="page curve" key={window.location.pathname}>
      <div
        style={{ opacity: window.innerWidth == null ? 1 : 0 }}
        className="background"
      ></div>
      <SVG height={window.innerHeight} width={window.innerWidth} />
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  const translate = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const curve = (initialPath, targetPath) => {
    return {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
