import React from 'react'
import './Logo.css'
import topLogo from '../../Assets/Logo.png'
import { FaSearch } from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo() {
    return (
        <div className='logo'>
            <div className="logo-l">
                <a href="#">
                    <img src={ topLogo } alt="adenzo-logo" />
                </a>
            </div>

            <div className="logo-r">
                <div className="input-wrapper">
                    <div className='search-container'>
                        <input placeholder='I am shopping for...' className='search-bar' />
                        <button className='search-button'>
                            <FaSearch className='search-icon'/>
                        </button>
                    </div>
                    <div className='wrapper-r'>
                    <span>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
                            <p>Compare</p>
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                            <p>Wishlist</p>
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            <p>Cart</p>
                        </a>
                    </span>
                    </div>
                    
                </div>
            </div>
        
        </div>
    )
}

export default Logo
