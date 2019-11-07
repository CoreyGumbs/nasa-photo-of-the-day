import React, { useState, useEffect } from "react";
import Header from './components/HeaderComponent/Header';

function App() {
  const [apod, setApod] = useState([]);



  return (
    <div className="App">
      <Header />  
    </div>
  );
}

export default App;
