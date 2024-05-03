import React from "react";


function Contact() {
 
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

   </div>      
      </div>
    </section>
  );
}

export default Contact;