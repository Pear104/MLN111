export default function Introduce() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-center">
      <div className="grid grid-cols-3 p-20 gap-10">
        <div className="col-span-2">
          <div className="uppercase text-8xl mb-20 space-mono">
            Giới thiệu dự án
          </div>
          <div className="text-3xl space-y-10 kanit font-[300]">
            <p>
              Trí tuệ nhân tạo (AI) đang thay đổi nhanh chóng cách chúng ta làm
              việc, sống và tương tác xã hội.
            </p>
            <p>
              Sự phát triển này cũng kéo theo những thách thức xã hội, như mất
              việc làm, thiên vị trong AI, và quyền riêng tư.
            </p>
            <p>
              Việc phân tích các vấn đề này từ góc nhìn triết học, cụ thể là duy
              vật biện chứng, sẽ giúp chúng ta có cái nhìn sâu sắc hơn về mối
              quan hệ giữa con người và công nghệ trong bối cảnh xã hội hiện
              đại.
            </p>
            <p>Đó là lý do ra đời của dự án này.</p>
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
