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

    // Pehle user ka message UI par show karein
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/chatbot", {
        message: input,
      });

      // Phir bot ka response UI par show karein
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="container d-flex flex-column align-items-center vh-100 bg-light">
      <h1 className="text-center my-4">Interior Design Chatbot</h1>

      <div className="card shadow-lg w-100" style={{ maxWidth: "450px" }}>
        {/* Chat Messages */}
        <div className="card-body overflow-auto" style={{ height: "400px" }}>
          {messages.map((msg, index) => (
            <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
              <div className={`p-2 rounded shadow-sm my-2 ${msg.sender === "user" ? "bg-primary text-white" : "bg-secondary text-light"}`} style={{ maxWidth: "75%" }}>
                <p className="m-0">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about interior design..."
            />
            <button className="btn btn-dark" onClick={sendMessage}>
              <IoSend color="white" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;