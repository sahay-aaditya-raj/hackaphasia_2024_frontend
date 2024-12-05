'use client'
import Header from "@/components/header";
import Footer from "@/components/footer";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [inputAtBottom, setInputAtBottom] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setInputAtBottom(true);

    try {
      // Send the user's input to the backend
      const response = await fetch("http://192.168.152.118:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from server");
      }

      const data = await response.json();

      // Add the AI's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: data.message },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: "Sorry, I couldn't fetch the response. Please try again." },
      ]);
    }
  };

  const handleCloseChat = () => {
    setMessages([]);
    setInput("");
    setInputAtBottom(false);
  };

  return (
    <div className="flex flex-col h-screen bg-primary text-secondary">
      <Header />
      <main className="flex-1 flex flex-col p-4 overflow-hidden md:mx-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[25px] font-medium">Ask AI About Schemes</h2>
          <button
            onClick={handleCloseChat}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-primaryHover rounded-lg shadow-inner">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-sm p-3 rounded-lg text-white ${
                  msg.sender === "user" ? "bg-secondary" : "bg-secondaryHover"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            inputAtBottom ? "mt-4 w-full p-4  " : "flex-1 flex items-center justify-center"
          }`}
        >
          <div className="flex items-center space-x-4 w-full max-w-4xl mx-auto">
            <input
              type="text"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-3 bg-secondary text-white rounded-lg hover:bg-secondaryHover"
            >
              Send
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
