import { useRef } from "react";
import Curve from "../../components/Curve";
import { useScroll, useTransform, motion } from "framer-motion";
import Introduce from "./partials/Introduce";
import WhatWeHave from "./partials/WhatWeHave";

export default function Home() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <Curve>
      <div className="w-screen h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full">
          <img
            src={
              "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413180.jpg?t=st=1738637949~exp=1738641549~hmac=0da9265e8d7b8c13154fdbc91dcaa6504c77a278f56320facb90bdbccda486c8&w=1380"
            }
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 text-black z-20">
            <div className="absolute top-56 left-10 text-8xl">
              <div className="space-mono text-[100px]">Triết học</div>
              <div className="orbitron pt-16 text-[200px]">& AI</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* This component make an redundant space in the x-axis that make the whole page overflow-x */}
      <div className="w-screen h-screen overflow-hidden flex flex-col justify-center">
        <Slide
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
          word={"Trí Tuệ Nhân Tạo"}
        />
        <Slide
          direction={"right"}
          left={"-60%"}
          progress={scrollYProgress}
          word={"Triết học Mác-Lênin"}
        />
        <Slide
          direction={"left"}
          left={"-70%"}
          progress={scrollYProgress}
          word={"Trí Tuệ Nhân Tạo"}
        />
        <Slide
          direction={"right"}
          left={"-30%"}
          progress={scrollYProgress}
          word={"Triết học Mác-Lênin"}
        />
      </div>
      <Introduce />
      <WhatWeHave />
    </Curve>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap items-center"
    >
      {Array.from({ length: 4 }, (_, i) => (
        <>
          <div className={"px-20 flex gap-5 items-center"} key={i + props.word}>
            <p className="text-[7.5vw] space-mono">{props.word}</p>
          </div>
          <span className="text-[100px] font-bold">{"  ·  "}</span>
        </>
      ))}
    </motion.div>
  );
};
