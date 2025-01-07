import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";  // Importing the styles
import { getImageUrl } from "../../utils";
import emailjs from "@emailjs/browser"; // Ensure this dependency is installed.

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");  // State to track success or error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jkdy1sf", // Your EmailJS Service ID
        "template_vqus287", // Your EmailJS Template ID
        form.current,
        "-Eio6YoYE8vB25wW3" // Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ message: "SUCCESS! Email sent.", success: true });  // Success message with success status
          form.current.reset();  // Reset the form after submission
        },
        (error) => {
          setStatus({ message: `FAILED... ${error.text}`, success: false });  // Failure message with failure status
        }
      );
  };

  const validateName = (e) => {
    const nameField = e.target;
    const namePattern = /^[A-Za-z\s]+$/; // Only allows letters and spaces
    if (!namePattern.test(nameField.value)) {
      nameField.setCustomValidity("Enter a valid character for name.");
    } else {
      nameField.setCustomValidity(""); // Clear error message
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3>Send a message</h3>
        
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="user_name"
            required
            onInput={validateName} 
            pattern="[A-Za-z\s]+"
            title="Only alphabetic characters and spaces are allowed"
            className={styles.input} 
          />
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="user_email"
            required
            className={styles.input} // Apply the correct input styling
          />
          <label className={styles.label}>Message</label>
          <textarea
            name="message"
            required
            className={styles.textarea} // Apply the correct textarea styling
          />
          <button type="submit" className={styles.submit}>Send</button>
        </form>

        {/* Display status message */}
        {status.message && (
          <div className={`${styles.status} ${status.success ? styles.success : styles.error}`}>
            <span className={styles.icon}>
              {status.success ? "✔️" : "❌"}
            </span>
            {status.message}
          </div>
        )}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("mail.png")} alt="Email icon" />
          <a href="mailto:aswathrs78@gmail.com">aswathrs78@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("linkedin.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/aswath-rs-3465a9240">
            linkedin.com/Aswath.Rs
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("github.png")} alt="GitHub icon" />
          <a href="https://www.github.com/aswath0001">
            github.com/aswath0001
          </a>
        </li>
      </ul>
    </footer>
  );
};
