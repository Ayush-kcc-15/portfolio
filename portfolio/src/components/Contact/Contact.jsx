import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <h4>CONTACT</h4>

      <h2>Let's Connect</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        />

        <button>
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;