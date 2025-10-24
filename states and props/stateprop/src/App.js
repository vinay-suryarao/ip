import React from 'react';
import './App.css';       // Default CSS import waapis add kar diya

// Yahaan hum assume kar rahe hain ki aapki 'stateprop.js' file
// 'StatePropsDemo' naam ka component export kar rahi hai
import StatePropsDemo from './stateprop.js'; 

// Yeh aapka original App.js function hai
function App() {

  return (
    <div className="App"> {/* 'className' waapis add kar diya */}
      <header className="App-header"> {/* 'className' waapis add kar diya */}
  
        
        <hr style={{width: "80%", margin: "30px 0", borderColor: "#555"}} />

        {/* Aapka StatePropsDemo component yahaan render ho raha hai */}
        <StatePropsDemo />

      </header>
    </div>
  );
}

export default App;

