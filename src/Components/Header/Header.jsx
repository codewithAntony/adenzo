import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'

function Header() {
    return (
        <div className='header-t'>
            <a href="#">
                <FontAwesomeIcon icon="fas fa-phone-alt" className='phone-icon'/>
            </a>
            <a href="#"><span>Help line 2547250101898</span></a>
            <a href="#">Login</a>
            <a href="#">Registration</a>
            
        </div>

    )
}

export default Header
