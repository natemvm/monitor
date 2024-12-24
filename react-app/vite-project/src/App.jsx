import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Left Box */}
        <div className="box">
          <div className="box-content left-box"></div> {/* Left box with specific image */}
          <p className="label">Create New Setup</p>
        </div>

        {/* Right Box */}
        <div className="box">
          <div className="box-content right-box"></div> {/* Right box with specific image */}
          <p className="label">Use Existing Setup</p>
        </div>
      </div>
    </div>
  );
}

export default App;
