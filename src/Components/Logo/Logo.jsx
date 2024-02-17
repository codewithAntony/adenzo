import React from 'react'
import './Logo.css'
import topLogo from '../../Assets/Logo.png'
import { FaSearch } from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo() {
    return (
        <div className='logo'>
            <div className="logo-l">
                <img src={ topLogo } alt="adenzo-logo" />
            </div>

            <div className="logo-r">
                <div className="input-wrapper">
                    <span className='search-icon'>
                        <input placeholder='I am shopping for...' />
                        <FaSearch className='s-icon'/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
                        <p>Compare</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon="fa-regular fa-heart" />
                        <p>Wishlist</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        <p>Cart</p>
                    </span>
                </div>
            </div>
        
        </div>
    )
}

export default Logo
