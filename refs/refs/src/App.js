import React, { useState } from 'react';
// import logo from './logo.svg'; // Inki zaroorat nahi hai
// import './App.css';       // Inki zaroorat nahi hai

// Hum Functional Component aur 'useState' hook ka use kar rahe hain
function App() {
  
  // 1. State banaya. Default value 'Vinay' rakhi.
  // 'name' woh variable hai jisme data store hota hai.
  // 'setName' woh function hai jisse hum 'name' ki value change karte hain.
  const [name, setName] = useState('Vinay');

  // 2. Button click par yeh function chalega
  const changeName = () => {
    // 3. 'setName' function ko call karke state ko 'Suryarao' se update kiya
    setName('Suryarao');
  };

  // Inline styling taaki page clean dikhe
  const appStyle = {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '20px',
    cursor: 'pointer'
  };

  return (
    <div style={appStyle}>
      <header>
        {/* 4. Yahaan 'name' state ki current value display ho rahi hai */}
        <h1 style={{ fontSize: '48px' }}>
          {name}
        </h1>
        
        {/* 5. Button click par 'changeName' function call hoga */}
        <button style={buttonStyle} onClick={changeName}>
          Change Text
        </button>
      </header>
    </div>
  );
}

export default App;

