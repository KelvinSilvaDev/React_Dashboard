import React, { Component } from "react";
import './css/Dashboard.css';
import RenderLineChart from "./Graph";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header";


class Dashboard extends Component {
    render(){
        return (
        <div>
            <Header />
            <div class="dashboard-content">
                    <div class="dashboard-flex-parent">
                        <div class="dashboard-box">
                            <div class="dashboard-box-wrapper">
                                <div class="box-icon">
                                    <FontAwesomeIcon icon={faHome} />
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
                                    <FontAwesomeIcon icon={faHome} />
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
                                    <FontAwesomeIcon icon={faHome} />
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
                                    <FontAwesomeIcon icon={faHome} />
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
                    <div className="overView">
                        <div className="graph">
                        <div className="brandWrapper">
                            <div className="Left">
                                <h3>Today's trends</h3>
                                <span>aas of 24 May 2019, 09h41</span>
                            </div>
                            <div className="Right">
                                <span>Today</span>
                                <span>Yesterday</span>
                            </div>
                        </div>
                            <RenderLineChart />
                        </div>
                        <div className="dataDashboardWrapper">
                                <div className="dataDashboard">
                                    <h3>Resolved</h3>
                                    <h2>449</h2>
                                </div>
                                <div className="dataDashboard">
                                    <h3>Resolved</h3>
                                    <h2>449</h2>
                                </div>
                                <div className="dataDashboard">
                                    <h3>Resolved</h3>
                                    <h2>449</h2>
                                </div>
                                <div className="dataDashboard">
                                    <h3>Resolved</h3>
                                    <h2>449</h2>
                                </div>
                                <div className="dataDashboard">
                                    <h3>Resolved</h3>
                                    <h2>449</h2>
                                </div>
                        </div>
                        <div className="cardWrapper">
                            <div className="card1">
                                <a>View details</a>
                                <h4>Unresolved tickets</h4>
                                <p>Group:<strong>Support</strong></p>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                            </div>
                            <div className="card1">
                                <a>View all</a>
                                <h4>Thasks</h4>
                                <p>today</p>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                                <h6 className="card1txt">Waiting on Feature Request <strong className="nmber">4238</strong></h6>
                            </div>
                        </div>
                        <div className="card2"></div>
                    </div>
            </div>
        </div>
        );
    }
}

export default Dashboard;