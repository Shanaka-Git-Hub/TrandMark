import React from 'react'
import '../../../../css/SliderOne.css'
import SearchBar from '../SearchBar'

export default function SliderOne() {
  return (
    <div className='page-one-outer'>
      <div className="dark-outer">
        <div className="contact-short-desc-outer">
          <div className="contact">
               <h6>0332230454</h6>
          </div>
          <div className="short-desc">
               <h6>Hand Created Leather -100% Puer Lather</h6>
          </div>
        </div>
        
        <div className="header-zone">
          <div className="page-one-header-one">
            <h1 style={{color:'white',marginTop:'30px'}}>CREATE IMPOSIBLE</h1>
          </div>
          <div className="page-one-header-two">
            <h1 className='fw-bold'style={{
              color:'white'}}>TRENDMARK</h1>
          </div>
          <div className="page-one-search-bar">
            <SearchBar/>
          </div>
          <div className="page-one-search-bar"></div>
        </div>
      </div>
    </div>
  )
}
