import React from 'react';
import './ContactDetails.css';
const ContactDetails = () => {
  return (
    <section id="contact-details">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> jake.clare.dev@gmail.com</p>
        <p><strong>Phone:</strong> +33 07 66 13 58 99</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourname
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/jakedev-hash" target="_blank" rel="noopener noreferrer">
            github.com/jakedev-hash
          </a>
        </p>
      </div>
    </section>
  );
};


export default ContactDetails;