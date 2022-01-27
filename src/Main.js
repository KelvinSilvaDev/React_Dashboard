import React, {Component} from "react";
import './css/Main.css';
import Header from "./Header";

class Main extends Component{
    render(){
        return (
            <main id="mainContent">
                <Header />
                <div className="main-content-title">
                    <h2>Dashboard</h2>
                </div>
                <div class="dashboard-content">
                    <div class="dashboard-flex-parent">
                        <div class="dashboard-box">
                            <div class="dashboard-box-wrapper">
                                <div class="box-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="value">
                                    900
                                </div>
                                <div class="type">
                                    Clientes
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-box">
                            <div class="dashboard-box-wrapper">
                                <div class="box-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="value">
                                    900
                                </div>
                                <div class="type">
                                    Clientes
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-box">
                            <div class="dashboard-box-wrapper">
                                <div class="box-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="value">
                                    900
                                </div>
                                <div class="type">
                                    Clientes
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-box">
                            <div class="dashboard-box-wrapper">
                                <div class="box-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="value">
                                    900
                                </div>
                                <div class="type">
                                    Clientes
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}

export default Main;