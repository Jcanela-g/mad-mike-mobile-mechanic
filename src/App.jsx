import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import AppointmentForm from './components/AppointmentForm.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Gallery />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
