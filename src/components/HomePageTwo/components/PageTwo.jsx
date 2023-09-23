import React from 'react'
import '../../../css/PageTwo.css'
import WalletOne from '../../../assets/wallet-one.png'
import WalletTwo from '../../../assets/wallet-two.png'
import Wallet from '../../../assets/wallet-three.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import PaginationTab from './pagination/Pagination'


export default function PageTwo() {
  return (
    <div className='page-two-main container-fluid d-flex align-items-center justify-content-center'>
      <div className="page-two-outer">
        <div className="page-two-left">
          <img src={Wallet} alt="" />
        </div>
        <div className="page-two-middle">
          <div className="middle-body">
            <div className="page-two-middle-nav-bar">
              <ul>
                <li>About</li>
                <li>Rate</li>
                <li>Materials</li>
                <li><FontAwesomeIcon icon={faCartPlus} /></li>
              </ul>
            </div>
            <div className="page-two-middle-header">
              <div className='w-25 h-100 d-flex flex-column align-items-start justify-content-end'>
                <span className='bg-dark text-light fw-bold' style={{ width: '50px' }}>MENS</span>
                <h2 className='fw-bold'>INCREDIBLE</h2>
                <h2 className='fw-bold'>WALLETS</h2>
              </div>
            </div>
            <div className="page-two-middle-desc">
              <div className='w-25 h-100 d-flex align-items-end fw-bold'>
                <p style={{ width:'200px' }}>
                  A Leather bag is a timeless accessory known for it's drubility and  luxurious textrue,making it a versatile choice
                </p>
              </div>
            </div>
            <div className="page-two-middle-pagination">
                <PaginationTab/>
            </div>
            <div className="page-two-middle-buttons">
              <button className='h-75 col-4 bg-secondary text-light fw-bold border border-none'>RS.7000 Buy Now</button>
              <button className='h-75 col-3 ms-3 bg-dark text-light fw-bold border border-none'>Add Wish List</button>
            </div>
          </div>
        </div>
        <div className="page-two-right">
            <div className="boxes">
              <img src={WalletOne}  alt="" />
            </div>
            <div className="boxes">
              <img src={WalletTwo} alt="" />
            </div>
            <div className="boxes">
             <img src={Wallet} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
