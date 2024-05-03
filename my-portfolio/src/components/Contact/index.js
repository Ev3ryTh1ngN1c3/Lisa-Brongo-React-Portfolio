import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Handle form submission logic here

    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage(""); // Clear error message after successful submission
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Contact me :</p>
          <address>
            Mt. Dora, Florida <br />
            Phone : <a href="tel:352.988.8049">352.988.8049</a>
            <br />
            Email :{" "}
            <a href="mailto://brongoartdecor@gmail.com">
              BrongoArtDecor@gmail.com
            </a>
          </address>
          <p>
            <strong>Looking forward to hearing from you</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
<a href="mailto:brongoartdecor@gmail.com" className="email-link" ><p className="email-text">send me an email ✉️</p></a>

          {/* <form className="form">
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="Your Message"
            />

            <button type="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </form> */}
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;