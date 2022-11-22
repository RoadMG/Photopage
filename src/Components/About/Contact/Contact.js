import React from "react";
import "./contact.css";

const Contact = (props) => {
  return props.trigger ? (
    <div className="contact-popup">
      <div className="contact-popup-inner">
        <button
          className="contact-close-btn"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}``
      </div>
    </div>
  ) : (
    ""
  );
};

export default Contact;
