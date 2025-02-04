import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WhatWeHave() {
  const links = [
    {
      name: "Khái niệm",
      href: "/definition",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Triết học là gì?</div>
          <div>Lịch sử ra đời của Triết học?</div>
          <div>Trí tuệ nhân tạo là gì?</div>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/greek-statue-engraving-style_53876-126884.jpg?t=st=1738657114~exp=1738660714~hmac=124a8ea52c3a757bada58a087680764a96f2476c1ab67d90d05dd4f664f9ef4a&w=1380",
    },
    {
      name: "Vấn đề xã hội",
      href: "/problem",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Triết học của hiện tại?</div>
          <div>AI của hiện tại?</div>
          <div>Vấn đề xã hội nổi bật?</div>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413139.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid",
    },
    {
      name: "Mối quan hệ biện chứng",
      href: "/relation",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Triết học của hiện tại?</div>
          <div>AI của hiện tại?</div>
          <div>Vấn đề xã hội nổi bật?</div>
        </div>
      ),
      image: "/images/home-page-banner.jpg",
    },
    {
      name: "Giải pháp",
      href: "/solution",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Giải pháp đưa ra?</div>
          <div>Tính thực tiễn?</div>
          <div>Tính hiệu quả?</div>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/gypsum-bust-coral-background-with-geometric-shapes_23-2149588224.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    },
    {
      name: "Kết nối",
      href: "/connect",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Triết học của hiện tại?</div>
          <div>AI của hiện tại?</div>
          <div>Vấn đề xã hội nổi bật?</div>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413158.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    },
    {
      name: "Về chúng tôi",
      href: "/about",
      description: (
        <div className="flex flex-col text-5xl gap-20 justify-center">
          <div>Thành viên</div>
          <div>Giảng viên hướng dẫn</div>
          <div>Liên hệ</div>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413140.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    },
  ];

  const [content, setContent] = useState({
    description: links[0].description,
    image: links[0].image,
  });
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center">
      <div className="grid grid-cols-3 p-20 gap-10">
        <motion.div
          className="flex items-center"
          key={content.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {content.description}
        </motion.div>
        <div
          className="col-span-1 bg-no-repeat bg-cover bg-bottom rounded-3xl group image-container"
          style={{
            backgroundImage: `url(${content.image})`,
          }}
        ></div>
        <div className="col-span-1">
          <div className="uppercase text-8xl mb-20 space-mono">
            Dự án này có?
          </div>
          <div className="text-3xl space-y-4 kanit font-[300]">
            {links.map((link) => (
              <div
                onMouseEnter={() =>
                  setContent({
                    description: link.description,
                    image: link.image,
                  })
                }
                key={link.href}
                onClick={() => navigate(link.href)}
              >
                <NavItem key={link.href} name={link.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ name }) => {
  return (
    <div className="uppercase transition-all p-4 group relative hover:translate-x-6">
      <div className="z-20">{name}</div> {/* Ensure text is on top */}
      <div className="z-10 w-0 h-full absolute bottom-0 left-0 group-hover:bottom-0 group-hover:bg-slate-800/10 group-hover:h-full group-hover:w-full transition-all duration-500 rounded-3xl"></div>
    </div>
  );
};
