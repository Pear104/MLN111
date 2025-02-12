import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WhatWeHave() {
  const links = [
    {
      name: "Khái niệm",
      href: "/definition",
      description: (
        <div className="flex flex-col text-3xl gap-20 justify-center">
          <li>Triết học là gì?</li>
          <li>Lịch sử ra đời của Triết học?</li>
          <li>Trí tuệ nhân tạo là gì?</li>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/greek-statue-engraving-style_53876-126884.jpg?t=st=1738657114~exp=1738660714~hmac=124a8ea52c3a757bada58a087680764a96f2476c1ab67d90d05dd4f664f9ef4a&w=1380",
    },
    {
      name: "Vấn đề việc làm",
      href: "/problem",
      description: (
        <div className="flex flex-col text-3xl gap-20 justify-center">
          <li>AI của hiện tại?</li>
          <li>Vấn đề việc làm nổi cộm?</li>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mối quan hệ biện chứng",
      href: "/relation",
      description: (
        <div className="flex flex-col text-3xl gap-20 justify-center">
          <li>Triết học của hiện tại?</li>
          <li>AI của hiện tại?</li>
          <li>Vấn đề xã hội nổi bật?</li>
        </div>
      ),
      image: "/images/home-page-banner.jpg",
    },
    {
      name: "Giải pháp",
      href: "/solution",
      description: (
        <div className="flex flex-col text-3xl gap-20 justify-center">
          <li>Giải pháp đưa ra?</li>
          <li>Tính thực tiễn?</li>
          <li>Tính hiệu quả?</li>
        </div>
      ),
      image:
        "https://img.freepik.com/free-photo/gypsum-bust-coral-background-with-geometric-shapes_23-2149588224.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    },
    // {
    //   name: "Kết nối",
    //   href: "/connect",
    //   description: (
    //     <div className="flex flex-col text-5xl gap-20 justify-center">
    //       <div>Triết học của hiện tại?</div>
    //       <div>AI của hiện tại?</div>
    //       <div>Vấn đề xã hội nổi bật?</div>
    //     </div>
    //   ),
    //   image:
    //     "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413158.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    // },
    // {
    //   name: "Về chúng tôi",
    //   href: "/about",
    //   description: (
    //     <div className="flex flex-col text-5xl gap-20 justify-center">
    //       <div>Thành viên</div>
    //       <div>Giảng viên hướng dẫn</div>
    //       <div>Liên hệ</div>
    //     </div>
    //   ),
    //   image:
    //     "https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413140.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid_sidr",
    // },
  ];

  const [content, setContent] = useState({
    description: links[0].description,
    name: links[0].name,
  });
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col justify-center py-4">
      <div className="grid grid-cols-3 px-20 gap-10">
        <motion.div
          className="flex items-center"
          key={content.name}
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
            backgroundImage: `url(${links[0].image})`,
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
                  setContent((pre) => ({
                    ...pre,
                    description: link.description,
                    title: link.name,
                    // image: link.image,
                  }))
                }
                key={link.href}
                onClick={() => navigate(link.href)}
              >
                <NavItem key={link.href} name={link.name} image={link.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ name, image }) => {
  return (
    <div className="uppercase transition-all py-4 px-8 group relative hover:translate-x-6 cursor-pointer">
      <div className="relative z-20 group-hover:text-zinc-200">{name}</div>{" "}
      {/* Ensure text is on top */}
      <div
        className="z-0 w-0 h-full absolute bottom-0 left-0 group-hover:bottom-0 group-hover:h-full group-hover:w-full transition-all duration-500 rounded-3xl bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-full h-full bg-black/60 rounded-3xl"></div>
      </div>
    </div>
  );
};
