import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChartBar, faChartPie, faCogs, faHandHoldingUsd, faPager, faTachometerAlt, faUser, faUsers,  } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';

import React, {Component} from "react";
import './css/Sidebar.css';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
} from 'react-router-dom';

import Dashboard from "./Dashboard";
import Pessoal from "./Pessoal";





class Sidebar extends Component {
    render(){
        return(
            <Router>
                <sidebar id="sidebar">
                    <div className="sidebar-title">
                        <h2>KELLEK</h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="selected">
                            <FontAwesomeIcon icon={faChartPie} />
                                <Link to ="/Dashboard">Dashboard</Link>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faUser} />
                            <Link to ="/Pessoal">Pessoal</Link>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faUsers} />
                                <a href="gerenciarCliente.html">Clientes</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                                <a href="metricas.html">Métricas</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faPager} />
                                <a href="paginas.html">Páginas</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faWordpressSimple} />
                                <a href="wpadmin.html" target="_blank">Wp Admin</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faChartBar} />
                                <i className="fas fa-chart-pie"></i>
                                <a href="gAnalytics.html">Analytics</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faCogs} />
                                <a href="configuracoes.html">Configurações</a>
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faHandHoldingUsd} />
                                <i className="fas fa-hand-holding-usd"></i>
                                <a href="finance.html">Financeiro</a>
                            </li>
                                <li className="sidebar_logout">
                                <i className="fas fa-sign-out-alt"></i>
                                <a href="../index.html">Logout</a>
                            </li>
                        </ul>            
                    </div>
                </sidebar>
                <Switch>
                    <Route path="/Dashboard" exact component={Dashboard} />
                    <Route path="/Pessoal" exact component={Pessoal} />
                </Switch>
            </Router>
        );
    }
}

export default Sidebar;