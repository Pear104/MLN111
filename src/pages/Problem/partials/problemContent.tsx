import { useEffect } from "react";

export const ContentAutomation = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30 mb-10">
      <div id="head"></div>
      <div className="mt-20 space-y-5">
        <div className="text-2xl font-semibold">
          Amazon và hệ thống kho vận tự động
        </div>
        <div>
          Amazon đã triển khai hàng loạt robot trong các nhà kho của mình để tự
          động hóa quy trình đóng gói và giao nhận hàng hóa. Theo một báo cáo
          của The Verge năm 2019, hệ thống robot tự động của Amazon đã cắt giảm
          hàng ngàn việc làm truyền thống trong lĩnh vực kho vận. Mặc dù Amazon
          vẫn tuyển dụng nhiều nhân công, nhưng phần lớn các công việc mang tính
          chất lặp lại đang dần bị thay thế bởi robot.
        </div>
        <img
          src="https://images.ctfassets.net/hfb264dqso7g/3hNfrOvuxJUKisJjk7B3xz/c892cb02e6f38eb8cf1374c9fdd315e1/amazon_warehouse_automation.jpeg"
          alt=""
        />
        <div className="text-2xl font-semibold">Ngành sản xuất ô tô</div>
        <div>
          Các nhà máy sản xuất ô tô như Ford và Tesla đã sử dụng robot và AI để
          thay thế con người trong dây chuyền sản xuất, lắp ráp xe hơi. Điều này
          giúp tăng hiệu suất, nhưng cũng làm giảm số lượng nhân công cần thiết
          trong ngành sản xuất.
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://vnexpress.net/amazon-dung-robot-cho-kho-hang-the-nao-4479874.html"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};

export const ContentSkill = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30 mb-10">
      <div id="head"></div>
      <div className="mt-20 space-y-5">
        <div className="text-2xl font-semibold">Công nghiệp tài chính</div>
        <div>
          Tại các công ty tài chính, nhiều giao dịch viên và nhà phân tích tài
          chính đã bị AI thay thế. Ví dụ, AI đã thay thế một số công việc phân
          tích thị trường và đầu tư. JP Morgan đã sử dụng một chương trình AI có
          tên là COiN (Contract Intelligence), giúp phân tích hàng ngàn hợp đồng
          tài chính trong vài giây, thay vì mất 360.000 giờ làm việc của con
          người mỗi năm.
        </div>
        <img
          src="https://intelcorp.scene7.com/is/image/intelcorp/ai-use-cases-hero-image:1920-1080?wid=576&hei=324"
          alt=""
        />
        <div className="text-2xl font-semibold">Ngành vận tải và xe tự lái</div>
        <div>
          Công nghệ xe tự lái như của Waymo (công ty con của Alphabet) và Tesla
          đang phát triển nhanh chóng. Khi công nghệ này được triển khai đại
          trà, các tài xế xe tải và taxi sẽ đối mặt với nguy cơ mất việc làm.
          Một nghiên cứu của Đại học Oxford ước tính rằng hàng triệu tài xế trên
          khắp thế giới có thể bị ảnh hưởng bởi sự phát triển của xe tự hành.
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://www.intel.vn/content/www/vn/vi/learn/ai-in-finance.html?utm_source=chatgpt.com"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};

export const ContentLayoff = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30 mb-10">
      <div id="head"></div>
      <div className="mt-20 space-y-8">
        <div className="text-2xl font-semibold">Thung lũng Silicon</div>
        <div>
          Nhiều công ty công nghệ lớn như Google, Facebook, và Apple đã tăng
          cường đầu tư vào AI, tạo ra lợi nhuận khổng lồ. Tuy nhiên, những người
          tham gia vào phát triển AI nhận được mức lương cao trong khi các công
          việc lao động chân tay hoặc dịch vụ như trong các nhà kho của Amazon,
          công nhân dịch vụ giao hàng nhận được mức lương thấp hơn nhiều. Điều
          này làm gia tăng khoảng cách thu nhập giữa lao động có kỹ năng cao và
          lao động phổ thông.
        </div>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/667c7040f3ef28f15c1ff713/Massive-downsizing-/960x0.jpg?format=jpg&width=960"
          alt=""
        />
        <div className="text-2xl font-semibold"> Nghiên cứu của McKinsey</div>
        <div>
          Báo cáo của McKinsey Global Institute vào năm 2017 ước tính rằng đến
          năm 2030, AI và tự động hóa có thể khiến khoảng 400 đến 800 triệu việc
          làm trên toàn thế giới bị thay thế, đặc biệt là những việc làm đòi hỏi
          kỹ năng thấp.
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/driving%20impact%20at%20scale%20from%20automation%20and%20ai/driving-impact-at-scale-from-automation-and-ai.pdf?utm_source=chatgpt.com"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};

export const ContentNewJob = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30 pb-10">
      <div id="head"></div>
      <div className="mt-20 space-y-8">
        <div className="text-2xl font-semibold">Ngành y tế và AI</div>
        <div>
          AI không chỉ thay thế công việc mà còn tạo ra nhiều cơ hội mới. Trong
          lĩnh vực chăm sóc sức khỏe, AI đang được sử dụng để hỗ trợ chẩn đoán
          bệnh. IBM Watson Health đã phát triển một hệ thống AI giúp phân tích
          các dữ liệu y tế để đưa ra các phương án điều trị tối ưu, từ đó tạo ra
          nhu cầu lớn cho các chuyên gia phát triển và quản lý các hệ thống AI
          này.
        </div>
        <img
          src="https://riseapps.co/wp-content/uploads/2023/08/How-AI-is-Used-in-Healthcare.png"
          alt=""
        />
        <div className="text-2xl font-semibold">Ngành phát triển AI</div>
        <div>
          Các công việc như kỹ sư AI, chuyên gia học máy (machine learning), và
          chuyên gia dữ liệu đang có nhu cầu rất cao. Theo báo cáo của LinkedIn
          năm 2020, kỹ sư AI nằm trong số những công việc có nhu cầu tăng nhanh
          nhất, với mức tăng trưởng lên tới 74% hàng năm tại Hoa Kỳ.
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://www.intel.vn/content/www/vn/vi/learn/ai-in-finance.html?utm_source=chatgpt.com"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};

export const ContentPolicy = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30">
      <div id="head"></div>
      <div className="mt-20 space-y-8">
        <div className="text-2xl font-semibold">Chính sách ở châu Âu</div>
        <div>
          Liên minh châu Âu (EU) đã bắt đầu phát triển và triển khai những chính
          sách về AI và tự động hóa để bảo vệ quyền lợi của người lao động. Ví
          dụ, EU đã thông qua Đạo luật GDPR để bảo vệ quyền riêng tư và dữ liệu
          của người lao động trong bối cảnh AI được áp dụng rộng rãi. Tuy nhiên,
          các quy định liên quan đến việc bảo vệ quyền lợi lao động vẫn đang
          trong quá trình hoàn thiện.
        </div>
        <img
          src="https://image.nhandan.vn/w800/Uploaded/2025/yrzestsfzyr/2025_02_05/aijpg-3575.jpg.webp"
          alt=""
        />
        <div className="text-2xl font-semibold">
          Đức và mô hình sản xuất công nghiệp 4.0
        </div>
        <div>
          Đức là một trong những nước dẫn đầu về sản xuất công nghiệp với mô
          hình Industry 4.0, nơi tự động hóa và AI được áp dụng rộng rãi. Chính
          phủ Đức đã phải đưa ra các chính sách về tái đào tạo người lao động để
          giúp họ chuyển sang các công việc mới khi tự động hóa phát triển.
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://nhandan.vn/dao-luat-ai-cua-eu-chinh-thuc-co-hieu-luc-post858689.html"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};

export const ContentArt = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex justify-center px-4 z-30">
      <div id="head"></div>
      <div className="mt-20 space-y-8 pb-6">
        <div className="text-2xl font-semibold">AI và nghệ thuật</div>
        <div>
          AI đang tạo ra các sản phẩm nghệ thuật, nhạc và thiết kế mà trước đây
          chỉ có con người mới có thể làm. Ví dụ, chương trình AI DeepDream của
          Google có thể tạo ra các tác phẩm nghệ thuật thị giác phức tạp, và
          Amper Music là một nền tảng sử dụng AI để sáng tác nhạc.
        </div>
        <img
          src="https://static-cdn.toi-media.com/www/uploads/2022/12/DALL%C2%B7E-2022-12-14-00.19.28-humanoid-robot-creating-art-on-a-canvas-with-many-colors-in-art-nouveau-style-1-e1670998298608.jpeg"
          alt=""
        />
        <div className="text-2xl font-semibold">Sáng Tác và Sản Xuất Nhạc</div>
        <div className="space-y-4">
          <li>
            Amper Music: Amper Music là một nền tảng AI giúp người dùng tạo ra
            âm nhạc chất lượng cao mà không cần phải có kinh nghiệm trước đó.
            Người dùng chỉ cần chọn các yếu tố như tâm trạng, thể loại, và độ
            dài của bản nhạc, và Amper Music sẽ tự động tạo ra một bản nhạc hoàn
            chỉnh.
          </li>
          <li>
            Aiva: Aiva (Artificial Intelligence Virtual Artist) là một công cụ
            sáng tác nhạc AI chuyên tạo ra nhạc cổ điển và nhạc phim. Aiva sử
            dụng các thuật toán học sâu để phân tích và học hỏi từ các tác phẩm
            của các nhà soạn nhạc nổi tiếng, từ đó tạo ra những bản nhạc mới
            theo phong cách tương tự.
          </li>
          <li>
            OpenAI's MuseNet: MuseNet của OpenAI là một công cụ AI mạnh mẽ có
            khả năng sáng tác nhạc trong nhiều thể loại khác nhau, từ nhạc cổ
            điển đến nhạc hiện đại. MuseNet có thể kết hợp các phong cách âm
            nhạc khác nhau để tạo ra những bản nhạc độc đáo và đa dạng.
          </li>
          <li>
            Suno AI: là một nền tảng AI tiên tiến chuyên về sáng tác nhạc tự
            động. Sử dụng các thuật toán học sâu, SunoAI có khả năng phân tích
            và học từ hàng triệu bản nhạc để tạo ra các giai điệu mới, độc đáo.
            Công nghệ này cho phép sáng tác nhạc theo nhiều phong cách và thể
            loại khác nhau, từ nhạc cổ điển đến pop, đồng thời tùy chỉnh theo
            yêu cầu của người dùng.
          </li>
        </div>
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://trungtamamnhacnguyenson.com/am-nhac-va-ai-kham-pha-nhung-tiem-nang-va-ung-dung-moi"
        >
          Link bài viết
        </a>
      </div>
    </div>
  );
};
