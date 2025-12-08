import { useState } from "react";
import "./AppointmentForm.css";

const services = ["Oil Change", "Diagnostics", "Tune-Ups", "Brakes", "Other"];

const initialForm = {
  name: "",
  phone: "",
  makeModel: "",
  year: "",
  service: "",
  date: "",
  notes: "",
  otherDetails: "",
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setSuccessMessage("");
      return;
    }

    if (digitsOnly.length < 10) {
      setErrorMessage(
        "Please enter a valid phone number (at least 10 digits)."
      );
      setSuccessMessage("");
      return;
    }

    if (!formData.service) {
      setErrorMessage("Please select a service.");
      setSuccessMessage("");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    const payload = {
      name: formData.name,
      phone: digitsOnly,
      carMakeModel: formData.makeModel,
      carYear: formData.year,
      serviceNeeded: formData.service,
      preferredDate: formData.date,
      extraNotes: formData.notes,
      otherDetails: formData.service === "Other" ? formData.otherDetails : "",
    };

    try {
      const response = await fetch("https://formspree.io/f/xwpgnqjv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Appointment request submitted:", payload);
        setFormData(initialForm);
        setSuccessMessage(
          "Thanks! Your request has been received. We'll contact you soon."
        );
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      setErrorMessage(
        "Something went wrong sending your request. Please try again or call/text us directly."
      );
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <p className="eyebrow">Book an Appointment</p>
        <h2 className="section-title">Book an Appointment</h2>
        <p className="muted">
          Share a few details and we’ll schedule a visit that works for you.
        </p>
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
            {formData.service === "Other" && (
              <div className="form-field form-field--full">
                <label htmlFor="otherDetails">
                  Describe the requested service
                </label>
                <textarea
                  className="input"
                  id="otherDetails"
                  name="otherDetails"
                  placeholder="Tell Mike more about what you need"
                  rows="4"
                  value={formData.otherDetails}
                  onChange={handleChange}
                />
              </div>
            )}
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
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Request"}
          </button>
          {errorMessage ? (
            <p className="status status--error" role="status" aria-live="polite">
              {errorMessage}
            </p>
          ) : null}
          {successMessage ? (
            <p
              className="status status--success"
              role="status"
              aria-live="polite"
            >
              {successMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
