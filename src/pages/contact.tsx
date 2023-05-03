import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className={styles.formWrapper}
        >
          <input
            type="hidden"
            name="access_key"
            value="641b335d-d36d-4838-83ce-bd7b55b49874"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className={styles.name_emailBox}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Adress"
            className={styles.name_emailBox}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className={styles.messageBox}
            rows={10}
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
