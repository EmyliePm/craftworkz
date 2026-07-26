import styles from "./Contact.module.css";

export default function Contact() {
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
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">What can we help with?</label>
              <textarea id="message" name="message" rows={6} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="images">Attach photos</label>
              <input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Enquiry
            </button>
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
              <span>Email: contact@cratfworkz.co.uk</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
