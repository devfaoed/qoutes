import React from "react"
import './App.css';

import db from "./qoutes"


function App() {
  
  const [qoutes, setQoutes] = React.useState( "Instead of worrying about what you cannot control, shift your energy to what you can create.")

  function random(){
    const data = db
    const randomQoutes = Math.floor(Math.random() * data.length)
    const rand = data[randomQoutes].qoutes
  
    setQoutes((prevQoutes) => {
      return rand
    })
  } 

  return (
    <div className="back">
      <main>
      <h4>Qoutes App</h4>
      <p className="qoutes">"{qoutes}"</p>

      <p className="break">------------------||------------------</p>
      <br />

       <button onClick={random} className="btn">GO</button>
      </main>
     
    </div>
  );
}

export default App;