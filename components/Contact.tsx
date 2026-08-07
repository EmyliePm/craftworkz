"use client";

import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Thanks! Your enquiry has been sent.");
        form.reset();
      } else {
        setStatus("Sorry, something went wrong. Please try again.");
      }
    } catch {
      setStatus("Sorry, something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.headingBlock}>
          <h2>Contact Us</h2>

          <p>
            Tell us what you need, attach a few photos and we’ll get back to you
            as soon as possible.
          </p>
        </div>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                Email address <span className={styles.required}>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">What can we help with?</label>

              <textarea id="message" name="message" rows={6} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="images">
                Attach photos (up to 3, 15 MB total)
              </label>

              <input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
              />
            </div>

            <p className={styles.formNote}>
              <strong>* Required.</strong> Please provide an email address so we
              can get back to you about your enquiry. Your details will only be
              used to respond to your request and will never be shared with
              third parties.
            </p>

            <button type="submit" className={styles.submitButton}>
              Send Enquiry
            </button>

            {status && <p className={styles.statusMessage}>{status}</p>}
          </form>

          <aside className={styles.directContact}>
            <p className={styles.eyebrow}>Prefer to message?</p>

            <h3>Chat directly with Jack</h3>

            <p>
              Send a message on WhatsApp with a quick description of the job and
              any photos you have.
            </p>

            <a
              href="https://wa.me/447910772252"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              WhatsApp Jack
            </a>

            <div className={styles.contactDetails}>
              <span>Email: contact@craftworkz.co.uk</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
