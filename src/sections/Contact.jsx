import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bl2f98o",
        "template_7hqc7oc",
        form.current,
        "f4x5uYXzJCj1c6sLl"
      )
      .then(
        () => {
          setStatus(" Message sent successfully!");
          form.current.reset();
        },
        () => setStatus(" Failed to send. Try again later.")
      );
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
          {status && <p className="status-msg">{status}</p>}
        </form>

        {/* Contact Info Buttons */}
        <div className="contact-info">
          {/* <button
            className="btn outline"
            onClick={() => window.location.href = "mailto:sanjaypro2003@gmail.com"}
          >
            Email Me
          </button> */}

          <Link
            to="https://www.linkedin.com/in/sanjay-kumar-562540266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            LinkedIn
          </Link>

          <Link
            to="https://github.com/Sanjaynick"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            GitHub
          </Link>

          <Link to="/cv.pdf" target="_blank" download className="btn outline">
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
