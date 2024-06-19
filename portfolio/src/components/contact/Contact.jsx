import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BiMailSend } from "react-icons/bi";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contactez Moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <BiMailSend className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:dev@dev">
              Un mail par ici <HiOutlineArrowLongRight />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="votre mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
