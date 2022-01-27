import "./App.css";
// import React, {Component} from 'react';
import Sidebar from './Sidebar'
import Main from './Main'
import './css/Reset.css'
import  './css/Style.css'

function App() {
  return (
    <div className="App">
      <div className="flex-dashboard">
        <Sidebar />
        
        <Main />
      </div>
    </div>
  );
}

export default App;
