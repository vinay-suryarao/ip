

// --- Yahaan aapke components import karein ---
import FuncComponent from './func.js'; 
import ClassComponent from './class.js';
// ---------------------------------------------

function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <hr style={{width: "80%", margin: "20px 0"}} />

        {/* Functional Component ko yahaan display kiya */}
        <div style={{ border: '1px solid #61DAFB', padding: '10px 20px', margin: '15px', borderRadius: '8px', width: '80%' }}>
          <FuncComponent />
        </div>

        {/* Class Component ko yahaan display kiya */}
        <div style={{ border: '1px solid #61DAFB', padding: '10px 20px', margin: '15px', borderRadius: '8px', width: '80%' }}>
          <ClassComponent />
        </div>
        
      </header>
    </div>
  );
}

export default App;

