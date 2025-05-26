import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    try {
      const response = await axios.post("https://interior-design-website-backend.onrender.com/chatbot", {
        message: input,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #fffdfa 100%, #f7e7d7 100%)",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "100%",
          maxWidth: "480px",
          borderRadius: "2rem",
          border: "none",
          background: "rgba(255,255,255,0.98)",
        }}
      >
        <div
          className="card-header text-center"
          style={{ background: "transparent", border: "none" }}
        >
          <h2
            style={{ color: "#cd8f52", fontWeight: 700, letterSpacing: "1px" }}
          >
            <span role="img" aria-label="help">
              💬
            </span>{" "}
            Need Design Help?
          </h2>
          <div style={{ fontSize: "1rem", color: "#888" }}>
            Ask me anything about interior design!
          </div>
        </div>
        {/* Chat Messages */}
        <div
          className="card-body overflow-auto"
          style={{
            height: "400px",
            background: "#f9f6f2",
            borderRadius: "1.5rem",
            border: "1px solid #f1e3d1",
            margin: "0 0.5rem",
            boxShadow: "0 2px 8px rgba(205,143,82,0.06)",
          }}
        >
          {messages.length === 0 && (
            <div
              className="text-center text-muted mt-5"
              style={{ fontSize: "1.1rem" }}
            >
              👋 Hi! How can I help you with your interior design today?
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-2 ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 px-3 rounded-4 shadow-sm`}
                style={{
                  maxWidth: "75%",
                  background: msg.sender === "user" ? "#cd8f52" : "#fff",
                  color: msg.sender === "user" ? "#fff" : "#444",
                  borderBottomRightRadius:
                    msg.sender === "user" ? "0.5rem" : "2rem",
                  borderBottomLeftRadius:
                    msg.sender === "user" ? "2rem" : "0.5rem",
                  fontSize: "1.05rem",
                  boxShadow:
                    msg.sender === "user"
                      ? "0 2px 8px rgba(205,143,82,0.10)"
                      : "0 2px 8px rgba(180,180,180,0.08)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {/* Chat Input */}
        <div className="card-footer bg-transparent border-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              style={{
                borderRadius: "2rem 0 0 2rem",
                border: "1.5px solid #cd8f52",
                background: "#fffdfa",
                fontSize: "1.08rem",
              }}
            />
            <button
              className="btn"
              style={{
                background: "#cd8f52",
                color: "#fff",
                borderRadius: "0 2rem 2rem 0",
                fontWeight: 600,
                fontSize: "1.1rem",
                border: "1.5px solid #cd8f52",
              }}
              onClick={sendMessage}
              disabled={!input.trim()}
              title="Send"
            >
              <IoSend color="white" size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
