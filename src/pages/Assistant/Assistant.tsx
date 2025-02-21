import { marked } from "marked";
import React, { useRef, useState } from "react";
import Curve from "../../components/Curve";

type MessageItemProps = {
  content: string;
  sender: string;
};

type SuggestionItemProps = {
  title: string;
  question: string;
};

export default function Assistant() {
  const [messages, setMessages] = useState<MessageItemProps[]>([]);
  const [suggestions, setSuggestions] = useState<SuggestionItemProps[]>([
    {
      title: "Marketing",
      question: "Mình đang học Marketing, bạn có đề xuất gì cho mình không?",
    },
    {
      title: "Kinh tế",
      question: "Mình đang học kinh tế, bạn có đề xuất gì cho mình không?",
    },
    {
      title: "Truyền thông",
      question:
        "Mình đang học Truyền thông đa phương tiện, bạn có đề xuất gì cho mình không?",
    },
    {
      title: "Kỹ thuật",
      question:
        "Mình đang học Kỹ thuật phần mềm, bạn có đề xuất gì cho mình không?",
    },
    {
      title: "Thiết Kế Đồ Họa",
      question:
        "Mình đang học về Thiết Kế Đồ Họa, bạn có đề xuất gì cho mình không?",
    },
    {
      title: "Triết học",
      question:
        "Mình đang học Triết học, mình cần tìm 1 sư phụ, bạn có đề xuất gì cho mình trong lĩnh vực này không?",
    },
    {
      title: "Y học",
      question: "Mình đang học Y, bạn có đề xuất gì cho mình không?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (messageEndRef.current) {
  //     messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messages]);

  const SuggestItem = ({ data }: { data: SuggestionItemProps }) => {
    return (
      <p
        className="inline-block min-w-14 m-1 py-2 px-3 text-[16px] rounded-xl text-start justify-start bg-zinc-300 hover:bg-zinc-700 cursor-pointer transition-all hover:scale-[1.02] hover:text-white text-zinc-700"
        style={{
          wordWrap: "break-word",
        }}
        onClick={async () => {
          setMessages((prev) => [
            ...prev,
            {
              content: data.question,
              sender: "me",
            },
          ]);
          setIsLoading(true);
          const answer = await getAnswer([
            ...messages,
            {
              content: data.question,
              sender: "me",
            },
          ]);
          // console.log(answer);
          const suggestions = await getSuggestions(answer);
          console.log(suggestions);

          setMessages((prev) => [
            ...prev,
            {
              content: answer,
              sender: "model",
            },
          ]);
          const a = suggestions.replaceAll("```json", "").replaceAll("```", "");
          setSuggestions(JSON.parse(a));
          setIsLoading(false);
        }}
      >
        {data.title}
      </p>
    );
  };

  return (
    <Curve>
      <div className="flex flex-col w-screen h-screen text-center items-center justify-start">
        <div className="w-1/2 mt-20 flex items-center">
          <img
            className="aspect-square h-20 rounded-3xl"
            src="/images/pippo.webp"
            alt=""
          />
          <div className="pl-6 text-left">
            <div className="text-xl font-bold">Trợ lí Gà Bông 🐥</div>
            <div className="">
              Chào bạn, mình là gà bông - bạn đồng hành giúp bạn mang AI vào
              đời. Mình có thể cố vấn cho bạn 1 vài mẹo sử dụng AI dựa trên
              chuyên ngành làm việc của bạn
            </div>
          </div>
        </div>
        <div
          data-lenis-prevent-wheel
          className="small-scrollbar w-2/4 grow h-64 overflow-y-scroll border border-black rounded-xl mt-4 px-2 py-1 relative"
        >
          {messages.map((message: MessageItemProps, index: number) => (
            <MessageItem key={index} data={message} />
          ))}
          {isLoading && (
            <div className="flex flex-col justify-center items-center mt-4 gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-600"></div>
              <span className="text-zinc-500 pb-8">
                Gà bông đang suy nghĩ ...
              </span>
            </div>
          )}
          {!isLoading && (
            <>
              <div className="my-2">Gợi ý</div>
              <div className="flex flex-wrap bottom-4 left-4">
                {suggestions.map((suggestion: SuggestionItemProps) => (
                  <SuggestItem key={suggestion.title} data={suggestion} />
                ))}
              </div>
            </>
          )}
          <div className="" ref={messageEndRef}></div>
        </div>
        <textarea
          className="py-2 px-2 my-4 w-2/4 border border-black rounded-lg"
          placeholder="Enter your message..."
          rows={2}
          onKeyDown={async (e) => {
            if (e.key === "Enter" && e.shiftKey) {
              return;
            }
            if (e.key === "Enter") {
              const messageContent = (e.target as HTMLTextAreaElement).value;
              if (messageContent.trim() === "") return;
              e.preventDefault();
              setMessages((prev) => [
                ...prev,
                {
                  content: messageContent,
                  sender: "me",
                },
              ]);
              setIsLoading(true);
              const answer = await getAnswer(messages);
              setMessages((prev) => [
                ...prev,
                {
                  content: answer,
                  sender: "you",
                },
              ]);
              setIsLoading(false);
              (e.target as HTMLTextAreaElement).value = "";
            }
          }}
        />
      </div>
    </Curve>
  );
}
const MessageItem = ({ data }: { data: MessageItemProps }) => {
  const parsedContent = marked(data.content);
  return (
    <div
      className={`flex gap-2 ${
        data.sender === "me" ? "justify-end" : "message-p "
      }`}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: parsedContent }}></div> */}
      <p
        className={`min-w-14 m-0.5 py-2 px-3 text-[16px] rounded-2xl text-start ${
          data.sender === "me"
            ? "justify-end bg-emerald-600 dark:bg-emerald-600 text-white"
            : "justify-start bg-zinc-300"
        }`}
        style={{
          wordWrap: "break-word",
          maxWidth: "80%",
        }}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      ></p>
    </div>
  );
};

// Modify the getAnswer function to handle stream response
const getAnswer = async (messages: MessageItemProps[]) => {
  const body = {
    system_instruction: {
      parts: {
        text: "Bạn là trợ lí ảo gà bông, bạn có sư phụ tên là Kiều Thị Thu Chung, bạn và cô Chung rất thân, bạn sẽ giúp mọi người khám phá các tiềm năng để có thể áp dụng AI vào cuộc sống của mọi người, dựa trên các lĩnh vực và chuyên ngành mà người dùng đang làm việc, hãy đề xuất những ứng dụng mà người dùng có thể sử dụng AI trong cuộc sống của họ",
      },
    },
    contents: messages.map((item) => ({
      role: item?.sender === "me" ? "user" : "model",
      parts: [
        {
          text: item?.content,
        },
      ],
    })),
  };

  // Make the request to the model API
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBDX1bPxSJl5U3riYSjS9JCs1pyfb3B4AE`,
    {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return (await response.json()).candidates[0].content?.parts[0].text;
};

const getSuggestions = async (question: string) => {
  const body = {
    system_instruction: {
      parts: {
        text: `Tạo các câu hỏi gợi ý theo dựa trên câu trả lời mà model đã gửi và trả về các câu hỏi gợi ý dưới dạng json: {title: "",question:""} tối đa 4 câu hỏi gợi ý, dùng nhân xưng là bạn, attribute title nên tóm tắt nhất có thể`,
        // , bạn sẽ hỏi 2 câu hỏi, câu đầu tiên sẽ hỏi về chuyên ngành người ấy đang làm, câu thứ 2 sẽ hỏi là bạn muốn làm gì trong tương lai, trong mỗi câu hỏi sẽ gợi ý 1 vài ví dụ và câu thứ 3 sẽ là trả lời cho người dùng những cách áp dụng AI vào cuộc sống của họ, trả lời theo từng đợt, không được gom vào chung 1 lần trả lời
      },
    },
    contents: {
      role: "user",
      parts: [
        {
          text: question,
        },
      ],
    },
  };

  // Make the request to the model API
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBDX1bPxSJl5U3riYSjS9JCs1pyfb3B4AE`,
    {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return (await response.json()).candidates[0].content?.parts[0].text;
};
