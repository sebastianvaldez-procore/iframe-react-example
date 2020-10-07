import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Procore embbeded iFrame create-react-app example
        </p>
      <small>This was deployed to gh-pages</small>
      <p>
        My github: 
        <a href='https://github.com/sebastianvaldez-procore' _target='blank' alt='Github User pages'>sebastianvaldez-procore.com</a>
      </p>
      </header>
    </div>
  );
}

export default App;
