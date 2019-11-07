import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/HeaderComponent/Header';
import Card from './components/APODCard/Card';
import moment from 'moment';
import { Normalize } from 'styled-normalize'


function App() {
  const [apod, setApod] = useState('');
  const [newDate, setNewDate] = useState('');

  const addNewDate = date =>{
    const formatDate = moment(date).format('YYYY-MM-DD')
    setNewDate(formatDate);
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=BSWV1ZHzNOhKxaqol3ehAGQwcpuIQgNhseh9N4hJ&date=${newDate}`)
    .then(response => {
      setApod(response.data);
    })
    .catch( err => console.log(err))
  }, [newDate]);

  return (
    <div className="App">
      <Normalize />
      <Header />  
      <Card data={apod}  addNewDate={addNewDate}/>
    </div>
  );
}

export default App;
