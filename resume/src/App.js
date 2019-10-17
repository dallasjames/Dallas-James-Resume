import React from 'react';
import { Contact } from './Contact';
import PrevWork from './PrevWork';
import Skills from './Skills';
import useDarkMode from './Hooks/useDarkMode';
import { References } from './References';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <>
    <h1>Dallas James</h1>
      <div
        onClick={toggleMode}
        className={darkMode ? 'dark' : 'light'}
      >Dark Mode</div>
    <h2>For a job done well and in time.</h2>
    
    <Skills />
    
    <div className='refcon'>
      <PrevWork />
    </div>

    <div className='refcon'>
      <References />
      <Contact />
    </div>
    </>    
  );
}

export default App;
