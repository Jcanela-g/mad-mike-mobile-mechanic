import "./Contact.css";

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <div className="contact__card card">
        <div className="contact__text">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Contact</h2>
          <p className="muted">Call or text to schedule your next service.</p>
          <p className="contact__number">407-307-4878</p>
        </div>
        <div className="contact__actions button-stack">
          <a className="btn btn-primary" href="tel:4073074878">
            Call Now
          </a>
          <a className="btn btn-secondary" href="sms:4073074878">
            Text Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
