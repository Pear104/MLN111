import { motion, useScroll, useTransform } from "framer-motion";
import Curve from "../../components/Curve";
import { useRef, useState } from "react";
import {
  ContentArt,
  ContentAutomation,
  ContentLayoff,
  ContentNewJob,
  ContentPolicy,
  ContentSkill,
} from "./partials/problemContent";

export default function Problem() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  const [background, setBackground] = useState(
    "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg"
  );

  const [content, setContent] = useState({
    title: "Vấn đề",
    description: <ContentAutomation />,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Curve>
      <div className="w-screen h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full space-mono">
          <img
            src={
              "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }
            alt="image"
            className="w-full h-full object-cover bg-black/60"
          />
          <div className="w-full h-full flex justify-center items-center absolute top-0 text-zinc-300 z-10 bg-black/80">
            <div className="absolute text-8xl text-[160px]">
              <div className="">
                <div>II. Vấn đề</div>
                <div className="text-[240px]">việc làm</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-screen min-h-screen grid grid-cols-3">
        <div
          className={`bg-no-repeat bg-cover ${
            isOpen ? "col-span-2" : "col-span-3"
          }`}
        >
          <div
            className="px-10 h-screen sticky top-0 flex flex-col justify-center gap-8 bg-no-repeat bg-cover overflow-hidden image-container"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>
            <div className="space-y-4">
              {problemItems.map((item, index) => (
                <div
                  // onMouseEnter={() => setBackground(item.background)}
                  onClick={() => {
                    setIsOpen(true);
                    setBackground(item.background);
                    setContent({
                      title: item.title,
                      description: item.content,
                    });
                  }}
                  key={index}
                >
                  <ProblemItem key={index} title={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`px-4 text-base ${isOpen ? "col-span-1" : "hidden"}`}>
          <motion.div
            className="relative"
            key={content.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {content.description}
          </motion.div>
        </div>
      </div>
    </Curve>
  );
}

const ProblemItem = ({ title }) => {
  return (
    // <div className="text-6xl group z-20 text-zinc-200 select-none">
    //   <span className="rounded-full px-8 hover:bg-zinc-500 transition-all group-hover:translate-x-20">
    //     {title}
    //   </span>
    // </div>
    <div className="uppercase transition-all py-3 px-8 group  hover:-translate-x-10 relative cursor-pointer">
      <span className="text-4xl relative z-10 text-zinc-200 px-4 py-2">
        {title}
        <span className="-z-10 w-0 h-full absolute bottom-0 left-0 group-hover:bottom-0 group-hover:h-full group-hover:w-full transition-all duration-500 rounded-3xl bg-white/40"></span>
      </span>{" "}
    </div>
  );
};

const problemItems = [
  {
    title: "Tự động hóa",
    background: "./images/gears-cogs-machine-machinery-159298.jpg",
    content: <ContentAutomation />,
  },
  {
    title: "Chuyển dịch nhu cầu",
    background: "./images/germany-duisburg-tiger-turtle-106155.jpg",
    content: <ContentSkill />,
  },
  {
    title: "Gia tăng bất bình đẳng",
    background: "./images/pexels-photo-9830808.webp",
    content: <ContentLayoff />,
  },
  {
    title: "Công việc mới",
    background: "./images/pexels-photo-327540.webp",
    content: <ContentNewJob />,
  },
  {
    title: "Bất định trong pháp lý",
    background: "./images/pexels-photo-5668473.webp",
    content: <ContentPolicy />,
  },
  {
    title: "Khả năng sáng tạo",
    background: "./images/pexels-photo-102127.webp",
    content: <ContentArt />,
  },
];
