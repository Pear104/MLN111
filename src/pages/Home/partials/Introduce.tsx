export default function Introduce() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center">
      <div className="grid grid-cols-3 p-20 gap-10">
        <div className="col-span-2">
          <div className="uppercase text-7xl mb-16 space-mono">
            Giới thiệu dự án
          </div>
          <div className="text-2xl space-y-6">
            <li>
              Trí tuệ nhân tạo (AI) đang thay đổi nhanh chóng cách chúng ta làm
              việc, sống và tương tác xã hội.
            </li>
            <li>
              Sự phát triển này cũng kéo theo những thách thức xã hội, như mất
              việc làm, thiên vị trong AI, và quyền riêng tư.
            </li>
            <li>
              Việc phân tích các vấn đề này từ góc nhìn triết học, cụ thể là duy
              vật biện chứng, sẽ giúp chúng ta có cái nhìn sâu sắc hơn về mối
              quan hệ giữa con người và công nghệ trong bối cảnh xã hội hiện
              đại.
            </li>
            <div>{"=>"} Đó là lý do ra đời của dự án này.</div>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover bg-bottom rounded-3xl"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/beautiful-roman-figure-carving_23-2149413139.jpg?ga=GA1.1.1429202435.1738637871&semt=ais_hybrid)",
          }}
        ></div>
      </div>
    </div>
  );
}
