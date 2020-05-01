import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Data from "./datagather.js";
import Footer from "./footer.js";
import Header from "./header.js";

function App() {
const [nasaData, setNasaData] = useState({});

useEffect (() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=ZfSSO8HupHnaAbexuYPJBehsMLPE3xCgvqFsMAjD')
  .then ((res) => {
    setNasaData(res.data);
    
    })

    .catch(err => console.log('There is an error:'. err));
},[]);

  return (
    <div className="App">
      <Header />
      <Data nasaData={nasaData} />
      <Footer />
    </div>
  );
}

export default App;
