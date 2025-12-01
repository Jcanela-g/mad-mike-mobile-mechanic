import "./Hero.css";

const Hero = () => (
  <header className="hero" id="hero">
    <div className="container hero__container">
      <div className="hero__visual">
        <div className="hero__logo" aria-hidden="true">
          <span>MM</span>
        </div>
        <div className="hero__badge">
          <span className="pill">Mobile mechanic</span>
          <p className="muted">Reliable help at your driveway or curb.</p>
        </div>
      </div>
      <div className="hero__content">
        <p className="eyebrow">On-site automotive care</p>
        <h1>Mad Mikes Mobile Mechanic</h1>
        <p className="tagline">Fast, reliable, on-site automotive services.</p>
        <div className="hero__actions button-stack">
          <a className="btn btn-primary" href="tel:4073074878">
            Call Now
          </a>
          <a className="btn btn-secondary" href="sms:4073074878">
            Text Us
          </a>
          <a className="btn btn-outline" href="#appointment">
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
