import { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit (will later send data to Express backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setMsg("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://portfolio-v6zg.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMsg("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMsg("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      setMsg("Server error ❌");
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          {/* Left side: Contact info */}
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-envelope"></i> sumitnautiyal681@gmail.com
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/_sumit__nautiyal" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/sumitnautiyal681" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://in.linkedin.com/in/sumit-nautiyal-7b9015228" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a
              href="Sumit Nautiyal Resume.pdf"
              download
              className="btn btn2"
            >
              Download Resume
            </a>
          </div>

          {/* Right side: Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 Made with ❤️ by Sumit Nautiyal</p>
      </div>
    </div>
  );
};

export default Contact;
