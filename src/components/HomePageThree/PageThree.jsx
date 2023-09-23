import React from 'react'
import '../../css/PageThree.css'
import BagOne from '../../assets/pageThree/bag-1.png'

export default function PageThree() {
  return (
    <div className='page-three-main-outer'>
      <div className="page-three-top">
        <h4>New Arrivals</h4>
        <h3>Summer Collection</h3>
        <p style={{maxWidth:'900px',textAlign:'center'}}> Whether you're seeking classic sophistication or modern flair, our leather creations cater to every taste and occasion. Discover the artistry of leather at its finest, and let our products become your statement of refined taste and quality.</p>
      </div>
      <div className="page-three-bottom">
        <div className="page-three-boxes">
          <img src={BagOne} alt="" />
        </div>
        <div className="page-three-boxes">
          <img src={BagOne} alt="" />
        </div>
        <div className="page-three-boxes">
          <img src={BagOne} alt="" />
        </div>
      </div>
    </div>
  )
}
