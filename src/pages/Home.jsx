import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import ChatMessages from "../components/ChatMessages";
import Header from "../components/Header";

const Home = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, sender) => {
    let today = new Date();

    const locale = "en";

    let time = today.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });

    const newMessage = {
      text,
      sender,
      time,
      id: messages.length + 1,
    };

    setMessages([...messages, newMessage]);

    if (sender === "You") {
      const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
            "6afcbf3b0cmshee7819c97927bdep16406bjsn958d04f6cff4",
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        },
        data: {
          from: "auto",
          to: "en",
          text: text,
        },
      };

      axios
        .request(options)
        .then((response) => {
          const translatedText = response.data.trans;

          const botMessage = {
            text: translatedText,
            sender: "Bot",
            time: time,
            id: messages.length + 2,
          };

          setMessages([...messages, newMessage, botMessage]);
        })
        .catch((error) => {
          console.error("Error translating message:", error);
        });
    }
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="flex flex-col h-screen bg-[#13141A] text-white">
            {/* Header */}
            <Header />

            {/* Chat messages */}
            <ChatMessages messages={messages} />

            {/* Message input */}
            <Input addMessage={addMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
