import './Services.css';

const services = [
  {
    title: 'Oil Change',
    description: 'Fresh oil and filters at your driveway to keep engines running clean.',
  },
  {
    title: 'Diagnostics',
    description: 'Check-engine light scans and troubleshooting to find the real issue.',
  },
  {
    title: 'Tune-Ups',
    description: 'Plugs, coils, fluids, and inspections to restore smooth performance.',
  },
  {
    title: 'Brakes',
    description: 'Pads, rotors, and inspections for confident stopping power.',
  },
];

const Services = () => (
  <section className="services" id="services">
    <div className="container">
      <p className="eyebrow">Services</p>
      <h2 className="section-title">Services</h2>
      <p className="muted">
        Mobile repairs with shop-quality standards—minus the waiting room.
      </p>
      <div className="services__grid">
        {services.map((service) => (
          <article className="card services__card" key={service.title}>
            <div className="services__icon" aria-hidden="true">
              <span>★</span>
            </div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
