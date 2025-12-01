import { useState } from 'react';
import './AppointmentForm.css';

const services = ['Oil Change', 'Diagnostics', 'Tune-Ups', 'Brakes'];

const initialForm = {
  name: '',
  phone: '',
  makeModel: '',
  year: '',
  service: '',
  date: '',
  notes: '',
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Appointment request submitted:', formData);
    setStatus('Request sent. Mike will reach out shortly to confirm.');
  };

  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <p className="eyebrow">Book an Appointment</p>
        <h2 className="section-title">Book an Appointment</h2>
        <p className="muted">Share a few details and we’ll schedule a visit that works for you.</p>
        <form className="appointment__form card" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                className="input"
                id="phone"
                name="phone"
                type="text"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="makeModel">Car Make/Model</label>
              <input
                className="input"
                id="makeModel"
                name="makeModel"
                type="text"
                placeholder="e.g. Honda Civic"
                value={formData.makeModel}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="year">Car Year</label>
              <input
                className="input"
                id="year"
                name="year"
                type="text"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service Needed</label>
              <select
                className="input"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="date">Preferred Date</label>
              <input
                className="input"
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-field form-field--full">
              <label htmlFor="notes">Extra Notes</label>
              <textarea
                className="input"
                id="notes"
                name="notes"
                placeholder="Anything else we should know?"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit Request
          </button>
          {status ? (
            <p className="status" role="status" aria-live="polite">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
