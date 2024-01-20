// App.js
import React, { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alertText={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/contact' element={<Contact mode={mode} />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
