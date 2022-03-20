import "./App.css";
import React from 'react';
import Sidebar from './Sidebar'
// import Main from './Main {Component}'
// import Header from "./Header";
import './css/Reset.css'
import  './css/Style.css'
import './css/fonts.css'




function App() {
  return (
    <div className="App">
      <div className="flex-dashboard">
        <Sidebar />
        {/* <Main /> */}
      </div>
    </div>
  );
}

export default App;
