import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'

function Header() {
    return (
        <div className='header-t'>
            <FontAwesomeIcon icon="fas fa-phone-alt" className='phone-icon'/>
            <span>Help line 2547250101898</span>
            <p>Login</p>
            <p>Registration</p>
            
        </div>

    )
}

export default Header
