import { deleteMessages } from "react-chat-widget";
import { Link } from "react-router-dom";

const ChatBot = () => {
  return (
    <>
      <Link
        to="/chatbot"
        className="btn btn-light d-flex align-items-center"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Need Help?"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "40px",
          zIndex: 1000,
          objectFit: "cover",
          transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        <img
          src="chat-bot-messge.png"
          alt="Help Icon"
          style={{
            width: "70px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </Link>
    </>
  );
};

export default ChatBot;