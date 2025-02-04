import MagneticFrame from "./MagneticFrame";

export default function Footer() {
  return (
    <div
      className="relative h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full text-white">
        <div className="w-screen h-screen bg-zinc-800">
          <div className="text-8xl pt-40 px-64 space-mono">
            Gà Bông Team
            <div className="border-b border-white pt-40"></div>
            <div className="flex gap-12 mt-20 kanit font-[300]">
              <MagneticFrame>
                <div className="text-black inline-block text-xl px-8 py-4 bg-white border border-black rounded-full">
                  gabong@gmail.com
                </div>
              </MagneticFrame>
              <MagneticFrame>
                <div className="text-black inline-block text-xl px-8 py-4 bg-white border border-black rounded-full">
                  +84 21 7634 2344
                </div>
              </MagneticFrame>
              <MagneticFrame>
                <div className="text-black inline-block text-xl px-8 py-4 bg-white border border-black rounded-full">
                  NVH Sinh Viên DHQG TPHCM
                </div>
              </MagneticFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
