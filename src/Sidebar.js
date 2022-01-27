import React, {Component} from "react";
import './css/Sidebar.css';

class Sidebar extends Component {
    render(){
        return(
            <sidebar id="sidebar">
                <div className="sidebar-title">
                    <h2>KELLEK</h2>
                </div>
                <div className="menu">
                <ul>
                    <li className="selected">
                        <i className="fas fa-home"></i>
                        <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li>
                        <i className="fas fa-user"></i>
                        <a href="pessoal.html">Pessoal</a>
                    </li>
                    <li>
                        <i className="fas fa-users"></i>
                        <a href="gerenciarCliente.html">Gerneciar Clientes</a>
                    </li>
                    <li>
                        <i className="fas fa-tachometer-alt"></i>
                        <a href="metricas.html">Métricas</a>
                    </li>
                    <li>
                        <i className="fas fa-pager"></i>
                        <a href="paginas.html">Páginas</a>
                    </li>
                    <li>
                    <i className="fab fa-wordpress-simple"></i>
                        <a href="wpadmin.html" target="_blank">Wp Admin</a>
                    </li>
                    <li>
                        <i className="fas fa-chart-pie"></i>
                        <a href="gAnalytics.html">Google Analytics</a>
                    </li>
                    <li>
                    <i className="fas fa-cogs"></i>
                        <a href="configuracoes.html">Configurações</a>
                    </li>
                    <li>
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
        );
    }
}

export default Sidebar;