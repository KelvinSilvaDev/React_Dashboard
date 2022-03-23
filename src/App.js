import "./App.css";
import React, { Component } from "react";
import Sidebar from './Sidebar'
// import Main from './Main {Component}'
// import Header from "./Header";
import './css/Reset.css'
import  './css/Style.css'
import './css/fonts.css'
// import { render } from '@testing-library/react';




class App extends Component {
  
  constructor (){
    super();
    this.state = {
      clientes: []
    }
  }
  
  render(){
  
  return (
    
    <div className="App">
      <div className="flex-dashboard">
        <Sidebar />
        {/* <Main /> */}
      </div>
    </div>
  );
}
}
export default App;
