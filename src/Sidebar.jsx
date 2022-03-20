import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartPie,
  faCogs,
  faHandHoldingUsd,
  faPager,
  faTachometerAlt,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

import React, { Component } from "react";
import "./css/Sidebar.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Pessoal from "./Pessoal";
import Clientes from "./Clientes";
import Metricas from "./Metricas";
import Paginas from "./Paginas";
import Analytics from "./Analytics";
import Configuracoes from "./Configuracoes";
import Financeiro from "./Financeiro";

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <sidebar id="sidebar">
          <div className="sidebar-title">
            <h2>KELLEK</h2>
          </div>
          <div className="menu">
            <ul>
              <li className="selected">
                <FontAwesomeIcon icon={faChartPie} />
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <Link to="/Pessoal">Pessoal</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} />
                <Link to="/Clientes">Clientes</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faTachometerAlt} />
                <Link to="/Metricas">Métricas</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faPager} />
                <Link to="/Paginas">Páginas</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faWordpressSimple} />
                <a href="wpadmin.html" target="_blank">
                  Wp Admin
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faChartBar} />
                <i className="fas fa-chart-pie"></i>
                <Link to="/Analytics">Analytics</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCogs} />
                <Link to="/Configuracoes">Configurações</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <i className="fas fa-hand-holding-usd"></i>
                <Link to="/Financeiro">Financeiro</Link>
              </li>
              <li className="sidebar_logout">
                <i className="fas fa-sign-out-alt"></i>
                <a href="../index.html">Logout</a>
              </li>
            </ul>
          </div>
        </sidebar>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Pessoal" exact component={Pessoal} />
          <Route path="/Clientes" exact component={Clientes} />
          <Route path="/Metricas" exact component={Metricas} />
          <Route path="/Paginas" exact component={Paginas} />
          <Route path="/Analytics" exact component={Analytics} />
          <Route path="/Configuracoes" exact component={Configuracoes} />
          <Route path="/Financeiro" exact component={Financeiro} />
        </Switch>
      </Router>
    );
  }
}

export default Sidebar;
