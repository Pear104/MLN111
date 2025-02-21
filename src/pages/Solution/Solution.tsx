import { useRef } from "react";
import Curve from "../../components/Curve";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Solution() {
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
              "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }
            alt="image"
            className="w-full h-full object-cover bg-black/60"
          />
          <div className="w-full h-full flex justify-center items-center absolute top-0 text-zinc-200 z-10 bg-black/60 space-mono">
            <div className="absolute text-8xl text-[160px]">
              <div className="mt-10 text-[160px]">IV. Giải pháp</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-screen pb-20 overflow-hidden">
        <div></div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 text-2xl space-y-10 mt-20 px-20">
            <div className="text-3xl font-semibold">
              1. Điều chỉnh lại cơ sở hạ tầng để tương thích với sự phát triển
              của AI
            </div>
            <div className="space-y-4">
              <div className="font-semibold">Giải pháp:</div>
              <li>Cải cách cơ cấu tổ chức sản xuất và phân phối.</li>
              <li>
                Xây dựng lại mô hình quan hệ sản xuất để phù hợp với sự phát
                triển của công nghệ.
              </li>
              <li>
                Mô hình chia sẻ giá trị thặng dư, nơi lợi nhuận từ AI được phân
                chia lại cho người lao động.
              </li>
            </div>
            <div className="space-y-4">
              <div className="font-semibold">Kết quả mong đợi:</div>
              <li>
                Mô hình quan hệ sản xuất sẽ thích nghi với sự phát triển của AI.
              </li>
              <li>
                Cân bằng giữa phát triển công nghệ và bảo vệ quyền lợi người lao
                động.
              </li>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover bg-left rounded-bl-[200px]"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/342008/pexels-photo-342008.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3 my-10">
        <div
          className="bg-no-repeat bg-cover bg-right rounded-l-full flip"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
        <div className="col-span-2 text-2xl space-y-10 mt-10 px-20">
          <div className="text-3xl font-semibold">
            2. Giải quyết mâu thuẫn giữa AI và lao động thông qua cải cách chính
            sách lao động
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Giải pháp:</div>
            <li>
              Tăng cường điều chỉnh chính sách lao động để bảo vệ quyền lợi
              người lao động trong thời đại AI.
            </li>
            <li>
              Tái cấu trúc công việc và lao động, giúp người lao động bị mất
              việc do AI chuyển đổi nghề nghiệp.
            </li>
            <li>Phát triển mô hình lao động linh hoạt, bảo vệ xã hội.</li>
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Kết quả mong đợi:</div>
            <li>
              Giảm thiểu tác động tiêu cực của AI đối với thị trường lao động.
            </li>
            <li>
              Cơ hội tái hòa nhập và phát triển nghề nghiệp cho người lao động
              bị ảnh hưởng.
            </li>
          </div>
        </div>
      </div>
      {/* <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3">
        <div className="col-span-2 text-2xl space-y-10 mt-20 px-20">
          <div className="text-3xl font-semibold">
            3. Cải cách quy luật giá trị thặng dư và phân phối lại lợi nhuận
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Giải pháp:</div>
            <li>
              Tái phân phối giá trị thặng dư và lợi ích từ AI để đảm bảo công
              bằng xã hội.
            </li>
            <li>
              Áp dụng thuế đối với AI và tự động hóa để tài trợ cho các chương
              trình tái đào tạo và hỗ trợ người lao động.
            </li>
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Kết quả mong đợi:</div>
            <li>
              Tạo ra nền kinh tế công bằng hơn, nơi lợi ích từ AI được chia sẻ
              giữa doanh nghiệp, lao động, và xã hội.
            </li>
            <li>
              Giảm bớt sự bất bình đẳng do AI tạo ra giữa các tầng lớp lao động.
            </li>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover bg-left rounded-l-full"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
      </div> */}
      <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3">
        <div className="col-span-2 text-2xl space-y-10 mt-20 px-20 pb-10">
          <div className="text-3xl font-semibold">
            3. Phát triển các hình thức lao động mới và đổi mới sáng tạo
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Giải pháp:</div>
            <li>
              Khuyến khích đổi mới sáng tạo và phát triển các ngành nghề mới
              trong kỷ nguyên AI.
            </li>
            <li>
              Đầu tư vào nghiên cứu và phát triển (R&D) để tạo ra các cơ hội mới
              trong ngành công nghệ cao.
            </li>
          </div>
          <div className="space-y-4">
            <div className="font-semibold">Kết quả mong đợi:</div>
            <li>
              Hình thành thị trường lao động mới với các công việc có giá trị
              gia tăng cao.
            </li>
            <li>Sự phát triển bền vững và sáng tạo của nền kinh tế.</li>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover bg-left rounded-tl-[200px]"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
      </div>
    </Curve>
  );
}
