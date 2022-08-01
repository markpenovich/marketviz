import React, { useState, useEffect } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState("");



  useEffect(() => {
    const getData = async()=> {
      fetch('/time').then(res => res.json()).then(data => {
        console.log(data);
        setCurrentTime(data.time);
      });
    }

    getData();

    const interval = setInterval(()=> {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
