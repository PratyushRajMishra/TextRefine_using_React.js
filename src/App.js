import React, { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message, 
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* Corrected prop name from "alert" to "alertText" */}
      <Alert alertText= {alert} />
      <div className='container my-5'>
        <TextForm showAlert={showAlert} mode={mode} />
      </div>
    </div>
  );
}

export default App;
