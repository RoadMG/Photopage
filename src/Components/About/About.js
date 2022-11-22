import React, { useRef, useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import emailjs from "@emailjs/browser";

function About() {
  const refForm = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qodfegl",
        "template_k9m7d9f",
        refForm.current,
        "nUmS4d5mtmK7kDxxr"
      )
      .then(
        () => {
          alert("Message is successfully submitted!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to submit the message, please try again");
        }
      );
  };

  return (
    <div className="about-wrap">
      <header className="about-header">
        <p>About</p>
        <Link to="/" className="home-main">
          Mingyu Kil
        </Link>
      </header>

      <section className="about-text" id="aboutText">
        <pre>
          &nbsp;Mingyu Kil is an amateur photographer based in Korea.<br></br>
          He takes something gonna be never meet again once passed by.<br></br>
          Redeveloping cities, people around him, and cultural heritage like the
          Korean palace.
          <br />
          The cities are re-builded to enrich lives for mankind. And heritages
          are also repaired and restored to pass on.
          <br />
          <br></br>
          &nbsp;The buildings located in the cities on destroyed and re-born
          also give us a beautiful landscape, skylines and so forth.
          <br />
          However it also only shows us the appearance of the past in passing
          time.
          <br />
          He worked to take the photos of the scenes which went passing by the
          time from his own point of view as possible as beautiful.
          <br />
          <br />
          &nbsp;And also, while living in Pusan and Masan, He took photos of
          these cities' seas.
          <br />
          I tried to capture the paradoxical charm of the sea with strength and
          softness to the best of my ability.
          <br />
          <br />
          &nbsp;he hasn't done any work that has been commissioned by the client
          yet, but he is willing to do it.
          <br />
          It's not the perfect picture, but he will show you how it develops day
          by day.
          <br />
        </pre>
      </section>

      <button className="contact-button" onClick={() => setIsOpen(true)}>
        Contact Me
      </button>

      <Contact trigger={isOpen} setTrigger={setIsOpen}>
        <div className="contact-email-box">
          <form ref={refForm} onSubmit={submitEmail}>
            <ul>
              <li className="email-box-half">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="email-box-half">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="user_subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  required
                />
              </li>
              <li>
                <input
                  type="submit"
                  className="contact-email-box-btn"
                  value="Send"
                />
              </li>
            </ul>
          </form>
        </div>
      </Contact>

      <footer>
        <a
          href="https://www.instagram.com/dolroad/"
          style={{ marginRight: 20 }}
        >
          Instagram
        </a>
        <a href="https://blog.naver.com/dlfamdkf">Blog</a>
      </footer>
    </div>
  );
}

export default About;
