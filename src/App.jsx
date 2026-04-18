import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import BookingBanner from './components/BookingBanner';
import Fleet from './components/Fleet';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <BookingBanner />
        <Fleet />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
