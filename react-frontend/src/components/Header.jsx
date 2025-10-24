import { useEffect, useState } from "react";
import "../App.css";

const roles = ["Web Developer", "Competitive Programmer", "ML Enthusiast"];

const Header = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let typingSpeed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div id="header">
      <div className="header-container">
        {/* Avatar above text */}
        <div className="header-avatar">
          <img src="avatar.jpg" alt="Sumit" />
        </div>

        <div className="header-text">
          <p>Hi, I'm Sumit Nautiyal</p>
          <h1>
            I’m a <span id="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
