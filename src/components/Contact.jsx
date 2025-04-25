import React, { useState } from 'react';

const Contact = () => {
  const [formMsg, setFormMsg] = useState("");

  // Substitua o valor da variável abaixo pelo seu link do Google Apps Script
  const scriptURL = '< add your own link here >';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        setFormMsg("Message sent successfully");
        setTimeout(() => {
          setFormMsg("");
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fas fa-paper-plane"></i> pedrosangy2@gmail.com</p>
            <p><i className="fas fa-phone-square-alt"></i> (416) 578-5548</p>
            <div className="social-icons">
              <a href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{formMsg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
