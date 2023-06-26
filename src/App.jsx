import React, { useEffect } from 'react';

// routing
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// components
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Privacy from './components/Privacy/Privacy';
import About from './components/About/About';
import Covid19 from './components/Covid19/Covid19';
import Apply from './components/Apply/Apply';
import Impact from './components/Impact/Impact';
import Nourishing from './components/Articles/Nourishing';
import Others from './components/Articles/Others';
import Education from './components/Articles/Education';
import TreePlanting from './components/Articles/TreePlanting';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/Donate';
import ApplyForm from './components/Form/ApplyForm';
import AdminAuths from './AdminAuth';


function App() {

  // Custom ScrollToTop component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/covid-19' element={<Covid19 />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/apply-now' element={<Apply />} />
          <Route path="/xyzadmin123" element={<AdminAuths />} />
          <Route path="/application-form" element={<ApplyForm />} />
          <Route path="/our-impact" element={<Impact />} />
          <Route path="/our-impact/nourishing-live" element={<Nourishing />} />
          <Route path="/our-impact/empowering-change" element={<Others />} />
          <Route path="/our-impact/afforestation" element={<TreePlanting />} />
          <Route path="/our-impact/power-of-education" element={<Education />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
