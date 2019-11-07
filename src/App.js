import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/HeaderComponent/Header';
import Card from './components/APODCard/Card';


function App() {
  const [apod, setApod] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=BSWV1ZHzNOhKxaqol3ehAGQwcpuIQgNhseh9N4hJ')
  //   .then(response => {
  //     console.log(response.data);
  //   })
  // }, []);

  return (
    <div className="App">
      <Header />  
      <Card />
    </div>
  );
}

export default App;
