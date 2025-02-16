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
            src={"/images/home-page-banner.jpg"}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 z-20 text-zinc-200 bg-black/60">
            <div className="absolute top-56 left-10 text-8xl">
              <div className="space-mono text-[100px]">Triết học</div>
              <div className="orbitron pt-16 text-[200px]">& AI</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* This component make an redundant space in the x-axis that make the whole page overflow-x */}
      <div className="w-screen overflow-hidden flex flex-col justify-center pt-10">
        <div className="uppercase text-center pb-10 text-3xl font-semibold">
          thành viên
        </div>
        <Slide />
      </div>
      <Introduce />
      <WhatWeHave />
    </Curve>
  );
}

const Slide = () => {
  // const direction = props.direction == "left" ? -1 : 1;

  // const translateX = useTransform(
  //   props.progress,
  //   [0, 1],
  //   [150 * direction, -150 * direction]
  // );

  return (
    <motion.div
      // style={{ x: translateX, left: props.left }}
      className="relative"
    >
      <div className="relative grid whitespace-nowrap items-center grid-cols-4 gap-16 px-16 space-mono">
        <div
          className="team-member"
          style={{
            backgroundImage: `url("https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:s3%3A%2F%2Fmedia-private.canva.com%2FhY2JU%2FMAGbzthY2JU%2F1%2Fp.jpg/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAAMccxfercf-3JMIRJ4ApjK3GxFrIi1Iad3nvidzAXhYp&exp=1739676193&osig=AAAAAAAAAAAAAAAAAAAAAJWCuzJZEtmuIgA7a3Rz9NkbBwtUAuzjS9ICOHdmzukL&signer=media-rpc&x-canva-quality=screen")`,
          }}
        >
          <div className="rounded-b-3xl text-white absolute bottom-0 w-full text-center py-4 bg-linear-to-r from-cyan-500 to-blue-500">
            <div>Nhất</div>
            <div>Nội dung</div>
          </div>
        </div>
        <div
          className="team-member"
          style={{
            backgroundImage: `url("https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:s3%3A%2F%2Fmedia-private.canva.com%2FBLhEc%2FMAGcaoBLhEc%2F1%2Fp.jpg/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAAFFrBnu_HpNA1iIO5vVrmhUUirvI5ISuNGS6G6u8cSUr&exp=1739674650&osig=AAAAAAAAAAAAAAAAAAAAALP-vpP_PBuPKoCvWbnSQ23VUTkQ-OXHx0QT5K0no_cR&signer=media-rpc&x-canva-quality=screen")`,
          }}
        >
          <div className="rounded-b-3xl text-white absolute bottom-0 w-full text-center py-4 bg-linear-to-r from-cyan-500 to-blue-500">
            <div>Trí</div>
            <div>Coder</div>
          </div>
        </div>
        <div
          className="team-member"
          style={{
            backgroundImage: `url("https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:s3%3A%2F%2Fmedia-private.canva.com%2FPTzZM%2FMAGcb-PTzZM%2F1%2Fp.jpg/watermark:F/width:193?csig=AAAAAAAAAAAAAAAAAAAAAKiVLan2Kqq97-s43mJqFMcZTx2u4UbiUIaElnJ_OGRD&exp=1739675985&osig=AAAAAAAAAAAAAAAAAAAAAKX5EzY3xHOYXwPMPF78yO4KyV_2HGqKCQFKNGgknlab&signer=media-rpc&x-canva-quality=thumbnail")`,
          }}
        >
          <div className="rounded-b-3xl text-white absolute bottom-0 w-full text-center py-4 bg-linear-to-r from-cyan-500 to-blue-500">
            <div>Đạt</div>
            <div>Truyền thông</div>
          </div>
        </div>
        <div
          className="team-member"
          style={{
            backgroundImage: `url("./images/truong.jfif")`,
          }}
        >
          <div className="rounded-b-3xl text-white absolute bottom-0 w-full text-center py-4 bg-linear-to-r from-cyan-500 to-blue-500">
            <div>Trường</div>
            <div>Coder</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
