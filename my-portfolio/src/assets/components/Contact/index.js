import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // State variables for form fields and error message
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update state based on the input field
    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email and name
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Please provide a valid email and name.");
      return;
    }

    // Validate message
    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Handle form submission logic here

    // Clear form fields after submission
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">connect</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>hi {userName}</h3>
          <p>contact me :</p>
          <address>
            Mt. Dora, Florida <br />
            P: <a href="tel:352.988.8049">352.988.8049</a> <br />
            E:{" "}
            <a href="mailto://brongoartdecor@gmail.com">
              BrongoArtDecor@gmail.com
            </a>
          </address>
          <p>
            <strong>looking forward to hearing from you</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>contact me</h3>
          <form className="form">
            <label htmlFor="contact-name">your name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="your name"
            />

            <label htmlFor="contact-email">your email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="your email"
            />

            <label htmlFor="contact-message">message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              id="contact-message"
              placeholder="your message"
            />

            <button type="submit" onClick={handleFormSubmit}>
              submit
            </button>
          </form>
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