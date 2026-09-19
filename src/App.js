import './App.css';
import {Route, Routes} from 'react-router-dom';

import Articles from './pages/articles';
import Home from './pages/home';
import Publications from './pages/publications';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import InterestsAndExperience from './pages/interests-and-experience';

import { useState, useEffect } from 'react';

function App() {
  const [mobileNavMode, setMobileNavMode] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
        <Route path='/projects' element={<Portfolio mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
        <Route path='/experience' element={<InterestsAndExperience mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
        <Route path='/resume' element={<Resume mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
        <Route path='/publications' element={<Publications mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
        <Route path='/articles' element={<Articles mobileNavMode={mobileNavMode} setMobileNavMode={setMobileNavMode} />} />
      </Routes>
    </>
  );
}

export default App;
