import React from 'react'
import '../../../css/NavBar.css'
import Apple from '../../../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div className="nav-main-outer">
             <div className='nav-outer'>
            <div className="nav-left">
                <span className='nav-left-link pe-3'
                style={{borderRight:'solid 2px white'}}><a href='#' className='all-links'>LUXURY COLLECTION</a></span>
                <span className='nav-left-link ps-3'><a href='#' className='all-links'>LUXURY OUR COLLECTION</a></span>
            </div>
            <div className="nav-middle">
                <img src={Apple} alt="" />
            </div>
            <div className="nav-right">
                <span className='nav-right-links'><a href='#' className='all-links'>BLOG</a></span>
                <span className='nav-right-links' style={{ borderRight: 'solid 2px white', borderLeft: 'solid 2px white' }}><a href='#' className='all-links'>
                    <FontAwesomeIcon icon={faUserPlus}/></a></span>
                <span className='nav-right-links'><a href='#' className='all-links'>
                    <i style={{color:'white',fontSize:'25px'}} className='fa fa-cart-plus'/></a></span>
            </div>
        </div>
        </div>      
    )
}
