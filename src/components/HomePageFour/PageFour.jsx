import React from 'react'
import '../../css/PageFour.css'
import BataOne from '../../assets/pageFour/bata-one.png'
import P42 from '../../assets/pageFour/f-4-2.png'
import P43 from '../../assets/pageFour/f-4-3.png'
import P44 from '../../assets/pageFour/f-4-4.png'
import P45 from '../../assets/pageFour/f-4-5.png'
import P46 from '../../assets/pageFour/f-4-6.png'

export default function PageFour() {
  return (
    <div className='page-four-main-outer container-fluid'>
      <div className="page-four-wrapper">
         <div className="page-four-top">
           <div className="page-f-top-header">
               <h1>Shop All Latest Offers AndInovations</h1>
           </div>
           <div className="page-f-nav">
             <ul>
              <li>For You</li>
              <li>Leather Bags</li>
              <li>Leather Wallets</li>
              <li>Leather Shoes</li>
              <li>Leather Jackets</li>
             </ul>
           </div>
         </div>
         <div className="page-four-bottom">
              <div className="p-f-card">
                <div className="card-inner">
                  <img src={BataOne} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P42} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P43} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P44} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P45} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P46} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P46} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P46} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
              <div className="p-f-card">
              <div className="card-inner">
                  <img src={P46} alt="" />
                  <h5>Nubuck slippers</h5>
                  <h6>From RS.2400.00</h6>
                </div>
              </div>
         </div>
      </div>
    </div>
  )
}
