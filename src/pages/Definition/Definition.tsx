import { motion, useScroll, useTransform } from "framer-motion";
import Curve from "../../components/Curve";
import { useRef, useState } from "react";
import {
  ContentArt,
  ContentEducation,
  ContentManufacturing,
  ContentMarketing,
  ContentMedical,
  ContentTransport,
  ContentTravel,
} from "./partials/aspectContent";
import {
  baymax,
  doraemi,
  doraemon,
  googleAssitant,
  gpt,
  siri,
} from "./partials/imageLink";

export default function Definition() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const [content, setContent] = useState({
    title: "Y tế",
    description: <ContentMedical />,
  });

  return (
    <Curve>
      <div className="w-screen h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full space-mono">
          <img
            src={
              "https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex justify-center items-center absolute top-0 text-zinc-200 z-10 bg-black/60">
            <div className="absolute text-8xl text-[160px]">
              <div className="">I. Khái Niệm</div>
            </div>
          </div>
        </motion.div>
      </div>
      <>
        <div className="w-screen grid grid-cols-2 mb-10">
          <div className="p-10 mt-10">
            <div className="text-4xl space-mono">1. Định nghĩa</div>
            <div className="mt-10 text-xl space-y-8">
              <li>
                Trí tuệ nhân tạo (AI - Artificial Intelligence) là một lĩnh vực
                khoa học máy tính cho phép máy móc có khả năng học hỏi, phân
                tích và ra quyết định tương tự con người.
              </li>
              <li>
                AI có thể được ứng dụng trong nhiều lĩnh vực như nhận diện giọng
                nói, hình ảnh, chatbot, xe tự lái và hệ thống đề xuất thông
                minh. Công nghệ AI giúp tối ưu hóa quy trình làm việc, cải thiện
                hiệu suất và giảm bớt gánh nặng cho con người trong nhiều nhiệm
                vụ phức tạp.
              </li>
            </div>
            <div className="flex justify-center items-center text-7xl mt-20">
              AI ={" "}
              <img
                className="mx-8 object-cover object-center w-[140px] aspect-square"
                src="https://img.icons8.com/?size=48&id=1RueIplXPGd2&format=gif"
                alt=""
              />
              +
              <img
                className="mx-8 object-contain w-[140px] aspect-square"
                src="https://img.icons8.com/?size=80&id=4prjBhjIN59x&format=png"
                alt=""
              />
            </div>
          </div>
          <div className="px-10 pt-10 mt-10 border-l border-black">
            <div className="text-4xl space-mono">2. Phân loại</div>
            <div className="mt-10 text-xl list-disc">
              <li>
                AI Hẹp (Weak AI): Chỉ có thể thực hiện một nhiệm vụ cụ thể, ví
                dụ như ChatGPT, trợ lý ảo Siri, Google Assistant.
              </li>
              <div className="py-8 flex gap-20">
                <img className="h-[120px]" src={gpt} alt="" />
                <img className="h-[120px]" src={siri} alt="" />
                <img className="h-[120px]" src={googleAssitant} alt="" />
              </div>
              <li>
                AI Mạnh (Strong AI): Có khả năng hiểu, học hỏi và hoạt động
                giống con người ở mức độ cao, thậm chí tự suy nghĩ và đưa ra
                quyết định phức tạp.
              </li>
              <div className="pt-8 flex gap-10">
                <img className="h-[180px] aspect-auto" src={doraemon} alt="" />
                <img className="h-[180px]" src={doraemi} alt="" />
                <img className="h-[180px]" src={baymax} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen min-h-screen bg-black/10">
          <div className="text-5xl text-center pt-16 space-mono">
            3. Ứng dụng
          </div>
          <div className="mt-8 w-screen min-h-screen grid grid-cols-3 gap-10">
            <div className="px-10">
              <div className="sticky top-20 flex flex-col justify-center mt-8 gap-8">
                {aspectItems.map((item, index) => (
                  <div
                    onMouseEnter={() =>
                      setContent({
                        title: item.title,
                        description: item.content,
                      })
                    }
                    key={index}
                  >
                    <AspectItem
                      key={index}
                      title={item.title}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="px-10 text-2xl col-span-2">
              <motion.div
                key={content.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {content.description}
              </motion.div>
              {/* <ContentMedical /> */}
              {/* <div className="px-10 text-3xl text-end">Next</div> */}
            </div>
            <div></div>
          </div>
        </div>
      </>
    </Curve>
  );
}

const AspectItem = ({ title, image }) => {
  return (
    <div className="relative flex justify-center items-center text-[30px] bg-center bg-no-repeat bg-cover rounded-full overflow-hidden group hover:translate-x-10 transition-all">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-all duration-500"
        src={image}
        alt=""
      />
      <div
        className="w-full text-center text-white shadow-lg py-3 rounded-full z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        }}
      >
        {title}
      </div>
    </div>
  );
};

const aspectItems = [
  {
    title: "Y tế",
    image:
      "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentMedical />,
  },
  {
    title: "Giáo dục",
    image:
      "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentEducation />,
  },
  {
    title: "Sản xuất",
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/09/ai-la-gi-8.jpg.webp",
    content: <ContentManufacturing />,
  },
  {
    title: "Truyền thông",
    image:
      "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentMarketing />,
  },
  {
    title: "Giao thông",
    image:
      "https://images.pexels.com/photos/192364/pexels-photo-192364.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentTransport />,
  },
  {
    title: "Du lịch",
    image:
      "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentTravel />,
  },
  {
    title: "Nghệ thuật",
    image:
      "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: <ContentArt />,
  },
];
