import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ImportantDates />
      <Speakers />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
