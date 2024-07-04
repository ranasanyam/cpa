import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Aos from 'aos';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Quality from './pages/Quality';
import ValuableIdeas from './pages/ValuableIdeas';
import BudgetFriendly from './pages/BudgetFriendly';
import { Routes, Route } from 'react-router-dom';
import { useScrollReset } from './custom-hooks/useScrollReset';
import AccountingServices from './pages/AccountingServices';
import Taxation from './pages/Taxation';
import IRSCompliance from './pages/IRSCompliance';
import IncorporationServices from './pages/IncorporationServices';
import FinancialAdvisory from './pages/FinancialAdvisory';
import IndividualServices from './pages/IndividualServices';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useScrollReset();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};


  return (
    <div className='font-catamaran'>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quality-services" element={<Quality/>} />
        <Route path="/valuable-ideas" element={<ValuableIdeas />} />
        <Route path="/budget-friendly" element={<BudgetFriendly />} />
        <Route path="/services/accounting-services" element={<AccountingServices />} />
        <Route path="/services/taxation" element={<Taxation />} />
        <Route path='/services/irs-compliance' element={<IRSCompliance />} />
        <Route path="/services/incorporation-services" element={<IncorporationServices/> } />
        <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/services/individual-services" element={<IndividualServices />} />
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
