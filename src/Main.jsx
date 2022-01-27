import React, {Component} from "react";
import './css/Main.css';
import Header from "./Header";

import Dashboard from './Dashboard';




class Main extends Component{
    render(){
        return (
            <main id="mainContent">
                <Header />
                <div className="main-content-title">
                    <h2>Dashboard</h2>
                </div>
            </main>
        );
    }
}

export default Main;