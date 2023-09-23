import React from 'react'
import '../../../../css/SliderThree.css'
import Shoes from '../../../../assets/shoes.png'
import logo from '../../../../assets/logo.png'

export default function SliderThree() {
  return (
    <div className='page-one-outer-c'>
      <div className="dark-outer-c">
        <div className="contact-short-desc-outer-c">
          <div className="contact-c">
               <h6>0332230454</h6>
          </div>
          <div className="short-desc-c">
               <h6>Hand Created Leather -100% Puer Lather</h6>
          </div>
        </div>
        <div className="header-zone-c">
          <div className="page-one-header-one-c">
            <h1 style={{color:'white',marginTop:'30px'}}>COMFOTABLE</h1>
          </div>
          <div className="slider-three-shoes-img-zone">
            <div className="slider-three-shoes-img-zone-left">
               <img src={Shoes} alt="" />
            </div>
            <div className="slider-three-shoes-img-zone-right">
               <span> <h3 style={{color:'white',marginTop:'20px'}}>SINCE 2020</h3></span>
               <div className="slider-three-logo-bottom">
                 <img src={logo} alt="" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
