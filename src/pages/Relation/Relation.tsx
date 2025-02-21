import { motion, useScroll, useTransform } from "framer-motion";
import Curve from "../../components/Curve";
import { useRef } from "react";

export default function Relation() {
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
              "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
            className="w-full h-full object-cover bg-black/60"
          />
          <div className="w-full h-full flex justify-center items-center absolute top-0 text-zinc-200 z-10 bg-black/60 space-mono">
            <div className="absolute text-8xl text-[160px]">
              <div className="">
                <div>III. Quan hệ</div>
                <div className="mt-10 text-[200px]">Biện chứng</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3">
        <div
          className="bg-no-repeat bg-cover bg-center rounded-br-[200px]"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
        <div className="col-span-2 text-xl space-y-8 mt-10 px-20">
          <div className="text-4xl font-semibold">1. Quan hệ biện chứng</div>
          <li>
            AI đại diện cho sự tiến bộ của lực lượng sản xuất (công nghệ cao, tự
            động hóa, trí tuệ nhân tạo). Sự phát triển của AI làm thay đổi
            phương thức sản xuất và phân phối, tạo ra các tác động mạnh mẽ đến
            quan hệ sản xuất, cơ cấu lao động, và quyền sở hữu tư liệu sản xuất.
          </li>
          <li>
            Theo triết học Mác, cơ sở hạ tầng là nền tảng vật chất của xã hội,
            bao gồm quan hệ sản xuất và lực lượng sản xuất. Kiến trúc thượng
            tầng phản ánh và điều chỉnh mâu thuẫn trong cơ sở hạ tầng, bao gồm
            các thể chế, pháp luật, chính trị, tư tưởng, v.v.
          </li>
          <li>
            Mâu thuẫn giữa lực lượng sản xuất đã phát triển vượt bậc (với công
            nghệ AI) và quan hệ sản xuất hiện tại, buộc xã hội phải điều chỉnh
            kiến trúc thượng tầng để thích nghi, ví dụ như thay đổi chính sách
            lao động, tái đào tạo và cập nhật kỹ năng cho người lao động.
          </li>
          <li>
            Sự phát triển không đồng đều giữa lực lượng sản xuất và quan hệ sản
            xuất là nguyên nhân cơ bản. Công nghệ AI phát triển nhanh chóng,
            trong khi xã hội và quan hệ sản xuất chưa kịp thích nghi, dẫn đến sự
            bất bình đẳng trong cơ hội việc làm và thu nhập.
          </li>
        </div>
      </div>
      <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3 my-20">
        <div className="col-span-2 text-lg space-y-12 mt-20 px-20">
          <div className="text-4xl font-semibold">
            2. Nguyên lý mâu thuẫn và phát triển
          </div>
          <div>
            <div className="font-semibold">Mâu thuẫn giữa AI và lao động</div>
            <li>
              AI thay thế lao động: AI không chỉ thay thế công việc lặp đi lặp
              lại mà còn thay thế cả những công việc phức tạp, trí tuệ.
            </li>
            <li>
              Mâu thuẫn giữa người lao động và máy móc: Những người lao động có
              kỹ năng truyền thống sẽ đối diện với sự cạnh tranh từ AI.
            </li>
          </div>
          <div>
            <div className="font-semibold">Phát triển thông qua mâu thuẫn</div>
            <li>
              Dự báo mâu thuẫn: Mâu thuẫn này tạo ra động lực cho xã hội phải
              tìm ra các phương án dung hòa, chẳng hạn như thúc đẩy tái đào tạo
              lao động, tạo ra các ngành nghề mới liên quan đến quản lý và phát
              triển công nghệ AI.
            </li>
          </div>
          <div>
            <div className="font-semibold">Nguyên nhân sâu xa</div>
            <li>
              Sự phát triển của AI là kết quả của quy luật phát triển lực lượng
              sản xuất nhằm tối ưu hóa năng suất lao động. Tuy nhiên, mâu thuẫn
              nảy sinh khi quyền lợi của người lao động bị đe dọa, đặc biệt
              trong các ngành có thể thay thế hàng loạt công việc.
            </li>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover bg-right rounded-r-full flip"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/5616237/pexels-photo-5616237.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
      </div>
      {/* <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3">
        <div
          className="bg-no-repeat bg-cover bg-left rounded-r-full"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/128428/pexels-photo-128428.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
        <div className="col-span-2 text-xl space-y-10 mt-20 px-20">
          <div className="text-4xl font-semibold">
            3. Quy luật giá trị thặng dư và sự tích lũy tư bản
          </div>
          <div>
            <div className="font-semibold">AI và giá trị thặng dư: </div>
            <li>
              Việc áp dụng AI giúp doanh nghiệp giảm chi phí lao động và tăng
              giá trị thặng dư. AI có thể làm việc không ngừng, không cần lương
              thưởng, điều kiện làm việc, hay phúc lợi xã hội như con người, dẫn
              đến sự tích lũy tư bản mạnh mẽ.
            </li>
          </div>
          <div>
            <div className="font-semibold">Hệ quả: </div>
            <li>
              Điều này tạo ra sự phân hóa lớn giữa các tầng lớp lao động. Những
              lao động không thể thích nghi với công nghệ mới dễ bị mất việc,
              trong khi tầng lớp tư bản sở hữu công nghệ và tư liệu sản xuất lại
              hưởng lợi.
            </li>
          </div>
          <div>
            <div className="font-semibold">Nguyên nhân: </div>
            <li>
              AI giúp tối ưu hóa lợi nhuận trong nền kinh tế tư bản, nhưng đồng
              thời tạo ra sự bất bình đẳng giữa các nhóm lao động và tầng lớp xã
              hội.
            </li>
          </div>
        </div>
      </div> */}
      <div className="w-screen min-h-screen overflow-hidden grid grid-cols-3 mt-10">
        <div
          className="bg-no-repeat bg-cover bg-left rounded-tr-[200px]"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=1200")`,
          }}
        ></div>
        <div className="col-span-2 text-xl space-y-10 mt-20 px-20">
          <div className="text-4xl font-semibold">
            3. Sự phát triển của các hình thức lao động mới
          </div>
          <div>
            <div className="font-semibold">Tích cực của sự phát triển</div>
            <li>
              AI tạo ra cơ hội mới cho người lao động trong các công việc sáng
              tạo, phân tích dữ liệu, và các kỹ năng kỹ thuật cao. Các công việc
              truyền thống có thể bị thay thế, nhưng cũng mở ra ngành nghề mới
              như kỹ sư AI, chuyên gia phân tích dữ liệu, lập trình viên AI.
            </li>
          </div>
          <div>
            <div className="font-semibold">Tái đào tạo lao động </div>
            <li>
              Một giải pháp quan trọng là thúc đẩy tái đào tạo và nâng cao kỹ
              năng cho người lao động để họ có thể tham gia vào các ngành nghề
              mới và thích ứng với những thay đổi do AI mang lại.
            </li>
          </div>
          <div>
            <div className="font-semibold">Nguyên nhân của hiện trạng</div>
            <li>
              Sự phát triển của lực lượng sản xuất, nhất là công nghệ AI, đòi
              hỏi xã hội phải điều chỉnh để phù hợp với quá trình phát triển và
              vận động của công nghệ.
            </li>
          </div>
        </div>
      </div>
    </Curve>
  );
}
