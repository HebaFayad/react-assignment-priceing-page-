import React from 'react';
import logo from './logo.svg';
import './App.css';
import New from "./New.js";

function App() {
  return (
    <div>
      <div className="title">
           <h1>Pricing Page Using React</h1>
       </div>
       <div className="App">
     <New title={"Plan A"} access={"Unlimited Access"} describe={"10$"} btn={"GET BASIC"} />
     <New title={"Plan B"} access={"Unlimited Access"} describe={"30$"} btn={"GET PRO"} />
     <New title={"Plan C"} access={"Unlimited Access"} describe={"60$"} btn={"GET PREMIUM"} />
    </div>
    </div>
  );
}

export default App;
