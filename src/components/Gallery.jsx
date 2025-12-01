import { useState } from 'react';
import './Gallery.css';

const items = [
  { title: 'Brake refresh', note: 'Pads and rotors swapped curbside.', tone: '#e63946' },
  { title: 'Diagnostics', note: 'Tracked a hard start to a bad sensor.', tone: '#ef476f' },
  { title: 'Oil + filter', note: 'Clean oil change with disposal included.', tone: '#f25f5c' },
  { title: 'Tune-up', note: 'Plugs, coils, and a fresh air filter.', tone: '#ff7b72' },
  { title: 'Battery save', note: 'Emergency jump and terminal clean.', tone: '#ff9e80' },
  { title: 'Fluid top-off', note: 'Brake and coolant levels checked.', tone: '#ffa48f' },
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="eyebrow">Recent Work</p>
        <h2 className="section-title">Recent Work</h2>
        <p className="muted">A few snapshots from driveways and parking lots around town.</p>
        <div className="gallery__grid">
          {items.map((item, index) => (
            <button
              type="button"
              className="gallery__card"
              key={item.title}
              onClick={() => setActive(item)}
              aria-label={`View ${item.title}`}
            >
              <div
                className="gallery__image"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${item.tone}, rgba(12, 14, 20, 0.9))`,
                }}
              />
              <div className="gallery__caption">
                <span className="pill">Job #{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="gallery__modal" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="gallery__modal-image"
              style={{
                backgroundImage: `linear-gradient(135deg, ${active.tone}, rgba(12, 14, 20, 0.9))`,
              }}
              aria-label={active.title}
            />
            <div className="gallery__modal-body">
              <p className="kicker">Recent Work</p>
              <h3>{active.title}</h3>
              <p className="muted">{active.note}</p>
              <button type="button" className="btn btn-secondary" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
