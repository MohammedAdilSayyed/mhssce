import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Committee from './components/comittee';
import Registration from './components/Registration';
import Journal from './components/Journal';
import Mumbai from './components/Mumbai';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PaperSubmissionPage from './pages/PaperSubmissionPage';

function App() {
  return (
    //uncomment below when build and comment basename="/"
    //<Router basename="/smartssd"></Router>
    <Router basename="/">
    
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <ImportantDates />
              <Committee />
              <Registration />
              <Journal />
              <Mumbai />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/papersubmission" element={
            <PaperSubmissionPage />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
