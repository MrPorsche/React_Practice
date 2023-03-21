import './App.css';
import React, {useState} from "react";
import Counter from "./Counter";

function App() {

  const [showCounter, setShowCounter] = useState (false)

  return (
    <div className="app">
          {showCounter && (
            <div>
            <Counter/>
          </div>
          )}
          
            <div className='app-buttons'>
              <button onClick={() => setShowCounter(true)}>Mount</button>
              <button onClick={() => setShowCounter(false)}>Unmount</button>
            </div>
        </div>
  );
}

export default App;
