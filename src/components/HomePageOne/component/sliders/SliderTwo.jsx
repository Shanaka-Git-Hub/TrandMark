import React from 'react'
import '../../../../css/SliderTwo.css'
import WalletOne from '../../../../assets/wallet-one.png'
import WalletTwo from '../../../../assets/wallet-two.png'
import WalletThree from '../../../../assets/wallet-three.png'

export default function SliderTwo() {
  return (
    <div className='page-one-outer-b'>
      <div className="dark-outer-b">
        <div className="contact-short-desc-outer-b">
          <div className="contact-b">
               <h6>0332230454</h6>
          </div>
          <div className="short-desc-b">
               <h6>Hand Created Leather -100% Puer Lather</h6>
          </div>
        </div>
        <div className="header-zone-b">
          <div className="page-one-header-one-b">
            <h1 style={{color:'white',marginTop:'30px'}}>CREATE</h1>
          </div>
          <div className="page-one-header-two-b">
            <h1 className='fw-bold'style={{
              color:'white',
             }}>IMPOSIBLE</h1>
          </div>
          <div className="page-one-wallet-img">
            <div className='wallet-one'>
              <img src={WalletOne} alt="" />
            </div> 
            <div className='wallet-one img-2'>
              <img src={WalletTwo} alt="" style={{width:'240px',marginTop:'15px',marginLeft:'25px'}}/>
            </div> 
            <div className='wallet-one img-3'>
              <img src={WalletThree} style={{width:'340px',marginTop:'10px'}}alt="" />
            </div>    
          </div>
         
        </div>
      </div>
    </div>
  )
}
