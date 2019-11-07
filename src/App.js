import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/HeaderComponent/Header';
import Card from './components/APODCard/Card';


function App() {
  const [apod, setApod] = useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=BSWV1ZHzNOhKxaqol3ehAGQwcpuIQgNhseh9N4hJ')
    .then(response => {
      setApod(response.data);
    })
    .catch( err => console.log(err))
  }, []);


  return (
    <div className="App">
      <Header />  
      <Card data={apod} />
    </div>
  );
}

export default App;
