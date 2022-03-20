import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import './css/Header.css';
import img from "./img/userProfilePhoto.jpg"

class Header extends Component {
    render () {
        return (
            <div className='header_wrapper'>
                <header>
                <div className='Left'>
                    <h2>Visão Geral</h2>
                </div>
                <div className='Right'>
                    <div className='wrapp'>
                        <div className='search_notifications'>
                            <FontAwesomeIcon icon={faSearch} />
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className='userName'>
                            <a>Kelvin Silva</a>
                            <img src={img}/>
                        </div>
                    </div>
                </div>
                </header>
                <div className="main-content-title">
                    <h2 id='SectionName'>{this.props.tela}</h2>
                </div>
            </div>
            
            
        );
    }
}

export default Header;