import { useEffect } from "react";

export const ContentMedical = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Chẩn đoán bệnh</div>
      <div>
        Trí tuệ nhân tạo đã đạt được tiến bộ đáng kể trong việc tự động chẩn
        đoán bệnh. AI giúp tăng cường tốc độ, tiết kiệm thời gian và độ chính
        xác trong việc chẩn đoán. Dữ liệu lớn về hình ảnh y học, thông tin về
        bệnh lý và các chỉ số cơ thể được cung cấp, gắn nhãn và xử lý bởi các
        nhà khoa học.
      </div>
      <div>
        Sau đó máy tính sử dụng các dữ liệu trên để nhận diện, phân loại và đưa
        ra chẩn đoán bệnh khi tiếp cận thông tin của bệnh nhân. Nhờ vào lượng dữ
        liệu phong phú, trí tuệ nhân tạo có khả năng “học” và thực hiện các chẩn
        đoán không kém cạnh các chuyên gia.
      </div>
      <img
        src="https://images.pexels.com/photos/7089619/pexels-photo-7089619.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="text-4xl font-semibold">
        Nghiên cứu và phát triển thuốc
      </div>
      <div>
        Quá trình nghiên cứu và phát triển thuốc thường đòi hỏi nhiều tài nguyên
        và thời gian. Nhưng với sự hỗ trợ của AI, quá trình này diễn ra nhanh
        chóng hơn và tiết kiệm chi phí. AI có thể phân tích dữ liệu phức tạp để
        xác định các mô hình mới cho việc phát triển thuốc và giúp tối ưu hóa
        quá trình thử nghiệm.
      </div>
      <div className="text-4xl font-semibold">Quản lý dữ liệu sức khỏe</div>
      <div>
        Trí tuệ nhân tạo cung cấp khả năng phân tích dữ liệu sức khỏe. Đồng thời
        AI cung cấp tính năng quản lý hồ sơ y tế cá nhân, hỗ trợ y tá ảo và tạo
        điều kiện cho khám chữa bệnh từ xa. Việc này giúp cải thiện quản lý sức
        khỏe cá nhân, đồng thời tạo sự tiện lợi cho bệnh nhân và giúp chuyên gia
        y tế có thêm thông tin để đưa ra quyết định điều trị tốt nhất.
      </div>
    </div>
  );
};

export const ContentEducation = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Hướng dẫn thông minh</div>
      <div>
        AI được sử dụng để cung cấp hướng dẫn cá nhân hóa cho học viên. Nó có
        khả năng theo dõi tiến trình học tập của từng học viên. Đồng thời nó
        cũng cung cấp phản hồi, bài tập và tài liệu phù hợp với năng lực và nhu
        cầu của họ.
      </div>
      <img
        src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/09/AI-la-gi-16.jpg.webp"
        alt=""
      />
      <div className="text-4xl font-semibold">Nền tảng kỹ thuật số dùng AI</div>
      <div>
        Các nền tảng giáo dục kỹ thuật số sử dụng trí tuệ nhân tạo để hỗ trợ quá
        trình học tập. AI có thể giúp kiểm tra và xác định những khoảng trống
        trong kiến thức của học viên. Từ đó AI đề xuất nội dung bổ sung hoặc bài
        tập tùy chỉnh để giúp họ nắm vững hơn.
      </div>

      <div className="text-4xl font-semibold">
        Tiếp cận kiến thức dễ dàng hơn
      </div>
      <div>
        AI cung cấp tiện ích trong việc tiếp cận kiến thức bằng cách cung cấp
        các ứng dụng dịch thuật, tư vấn hỗ trợ thông minh. Từ đó AI giúp người
        học giải quyết khó khăn trong học tập và cung cấp khả năng sửa lỗi ngữ
        pháp tự động.
      </div>
    </div>
  );
};

export const ContentManufacturing = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Nông nghiệp </div>
      <div>
        AI có thể sử dụng dữ liệu thời tiết để dự đoán điều kiện thời tiết trong
        tương lai. Nó giúp người nông dân có thông tin cần thiết để quản lý mùa
        vụ và bảo vệ cây trồng.
      </div>
      <img
        src="https://media.istockphoto.com/id/1382273499/photo/agriculture-robotic-and-autonomous-car-working-in-smart-farm-future-5g-technology-with-smart.jpg?b=1&s=612x612&w=0&k=20&c=Nf7PLMa-uvx26C_u2S2e7RI7z-w4LOwUeA5iyNDDoDY="
        alt=""
      />
      <div className="text-4xl font-semibold">Nền tảng kỹ thuật số dùng AI</div>
      <div>
        Các nền tảng giáo dục kỹ thuật số sử dụng trí tuệ nhân tạo để hỗ trợ quá
        trình học tập. AI có thể giúp kiểm tra và xác định những khoảng trống
        trong kiến thức của học viên. Từ đó AI đề xuất nội dung bổ sung hoặc bài
        tập tùy chỉnh để giúp họ nắm vững hơn.
      </div>

      <div className="text-4xl font-semibold">
        Tiếp cận kiến thức dễ dàng hơn
      </div>
      <div>
        AI cung cấp tiện ích trong việc tiếp cận kiến thức bằng cách cung cấp
        các ứng dụng dịch thuật, tư vấn hỗ trợ thông minh. Từ đó AI giúp người
        học giải quyết khó khăn trong học tập và cung cấp khả năng sửa lỗi ngữ
        pháp tự động.
      </div>
    </div>
  );
};

export const ContentMarketing = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Nội dung số</div>
      <div>
        Trí tuệ nhân tạo có khả năng sáng tạo các nội dung truyền thông độc đáo.
        Nó phân tích và tương tác với khách hàng rồi đưa ra các đề xuất cho
        chiến lược truyền thông.
      </div>
      <img
        src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt=""
      />
      <div className="text-4xl font-semibold">Bài báo truyền thông</div>
      <div>
        AI cũng có khả năng biên tập và tạo ra các bài báo tự động. AI sử dụng
        nhiều nguồn thông tin khác nhau để tạo ra nội dung truyền thông mới và
        thú vị, bao gồm tin tức, âm thanh, hình ảnh, video và nhiều hình thức
        khác.
      </div>

      <div className="text-4xl font-semibold">Nội dung trực quan</div>
      <div>
        AI cũng có khả năng tạo ra video và hình ảnh chất lượng cao và sống
        động, bằng cách sử dụng các kỹ thuật xử lý chuyên nghiệp và độc đáo.
        Ngoài ra, nó có khả năng tạo ra các bản nhạc và bài hát mới sáng tạo
        thông qua việc áp dụng các thuật toán học máy và phân tích âm thanh.
      </div>
    </div>
  );
};

export const ContentTransport = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Quản lý giao thông</div>
      <div>
        AI được tích hợp để giải quyết một loạt các vấn đề liên quan đến giao
        thông đường bộ. Chẳng hạn như ùn tắc giao thông, đếm số lượng xe, kiểm
        soát xe cộ, phân tích mật độ giao thông, quản lý việc áp dụng các biện
        pháp xử lý vi phạm giao thông, ánh sáng tín hiệu giao thông thông minh,…
      </div>
      <div className="text-4xl font-semibold">Xe tự lái</div>
      <div>
        Xe tự lái sử dụng công nghệ AI là một bước tiến đột phá trong ngành giao
        thông vận tải. Những chiếc xe này được trang bị các cảm biến, camera và
        hệ thống AI giúp nhận diện môi trường xung quanh, từ đó tự động điều
        khiển hướng đi. Công nghệ AI có thể phân tích dữ liệu thời gian thực,
        nhận diện chướng ngại vật, dự đoán hành vi của người tham gia giao
        thông, và đưa ra quyết định một cách chính xác, nhanh chóng.
      </div>
      <img
        src="https://www.motortrend.com/uploads/sites/5/2019/12/Waymo-1.jpg?w=768&width=768&q=75&format=webp"
        alt=""
      />
      <div className="text-4xl font-semibold">Phạt nguội</div>
      <div>
        Hệ thống quản lý giao thông thông minh tích hợp các chức năng nhận diện
        biển số xe. Hệ thống này sẽ phát hiện nhanh chóng các hành vi vi phạm,
        chẳng hạn như vượt đèn đỏ, lấn làn đường, chạy ngược chiều. Đồng thời,
        nó cũng giúp đếm lưu lượng xe và cung cấp giám sát an ninh.
      </div>
    </div>
  );
};

export const ContentTravel = () => {
  useEffect(() => {
    document
      .querySelector("#head")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <div id="head"></div>

      <div className="text-4xl font-semibold">Cố vấn viên du lịch</div>
      <div>
        Trong ngành du lịch hiện nay, trí tuệ nhân tạo (AI) ngày càng phát triển
        và đóng một vai trò quan trọng. Các nhiệm vụ như lập kế hoạch, mua vé
        máy bay, đặt phòng khách sạn và quản lý thời gian di chuyển của khách
        hàng đều có thể được thực hiện bởi AI.
      </div>
      <div className="text-4xl font-semibold">Chatbot </div>
      <div>
        Một trong những cách AI xuất hiện trong ngành du lịch là thông qua việc
        sử dụng chatbot. Nhờ vào công nghệ này, không cần phải có sự hiện diện
        của con người, chúng ta vẫn có thể tương tác nhanh chóng và hiệu quả với
        khách hàng.
      </div>

      <div className="text-4xl font-semibold">
        Tiếp cận kiến thức dễ dàng hơn
      </div>
      <div>
        AI cung cấp tiện ích trong việc tiếp cận kiến thức bằng cách cung cấp
        các ứng dụng dịch thuật, tư vấn hỗ trợ thông minh. Từ đó AI giúp người
        học giải quyết khó khăn trong học tập và cung cấp khả năng sửa lỗi ngữ
        pháp tự động.
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
    <div className="flex flex-col gap-10">
      <div id="head"></div>
      <div className="text-4xl font-semibold">Âm nhạc </div>

      <div>
        Công nghệ AI đang ngày càng được ứng dụng rộng rãi trong các lĩnh vực
        nghệ thuật, mang đến những sáng tạo mới mẻ và đột phá. Trong âm nhạc, AI
        có thể sáng tác nhạc, phối khí hoặc thậm chí tạo ra những giai điệu mang
        phong cách của các nghệ sĩ nổi tiếng.
      </div>
      <div className="text-4xl font-semibold">Hội họa</div>
      <div>
        Trong hội họa, các chương trình AI giúp tạo ra những bức tranh độc đáo,
        từ việc mô phỏng các phong cách cổ điển đến việc tạo ra những tác phẩm
        hoàn toàn mới mẻ
      </div>
      <img
        src="https://bigthink.com/wp-content/uploads/2022/09/rosenberg1.jpg"
        alt=""
      />

      <div className="text-4xl font-semibold">Điện ảnh</div>
      <div>
        Bên cạnh đó, AI cũng hỗ trợ trong việc chỉnh sửa video, sản xuất phim và
        thiết kế đồ họa, mở ra một thế giới sáng tạo vô tận, nơi con người và
        máy móc có thể hợp tác để tạo ra những tác phẩm nghệ thuật ấn tượng.
      </div>
    </div>
  );
};
