import React from 'react'
import '../../css/PageSeven.css'
import logo from '../../assets/logo.png'
import GpFour from '../../assets/pageFive/p-5-3.png'
import GpOne from '../../assets/pageFive/p-5-1.png'
import GpTwo from '../../assets/pageFive/p-5-4.png'
import FImgOne from '../../assets/pageSeven/f-img-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PageSeven() {
    return (
        <div className='container-fluid footer'>
            <img id='img' src={logo} alt="" />
            <div className="p-s-main-outer">
                <div className="p-s-left">
                    <div className="p-s-l-top">
                        <img src={logo} width={'250px'} alt="" />
                        <h1 className='text-light'>Kocoon Leather</h1>
                    </div>
                    <div className="f-one text-light">
                        <h6>CREATE</h6>
                        <h6>IMPOSIBLE</h6>
                        <h6>TRANDMARK</h6>
                    </div>
                    <div className="p-s-l-m-top">
                        <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                            <p className='w-75 h-50 text-light text-left
                        d-flex  justify-content-center'
                                style={{ fontSize: '12px' }}>Discover  the  Artistry  of  Handcrafted  Leather  Goods:  Welcome  to  our  online haven  of  meticulously  crafted  leather  creations.  Explore  a  world  where  tradition meets  innovation , where  skilled  artisans  pour  their  passion  into  every  stitch  and cut.  From  timeless  wallets  to  bespoke  belts,  our  artisanal  leatherwork  tells  a story  of  craftsmanship  and  quality.  Immerse  yourself  in  the  tactile  elegance  of genuine  leather  and  find  the  perfect  piece  to  accompany  you  on  your  journey.
                            </p>
                        </div>
                    </div>
                    <div className="p-s-l-m-bottom d-flex text-light flex-column
                    align-items-center justify-content-center text-left mt-4">
                        <span>Rating 4.4 (66 Reviews)</span>
                        <span>Always Open</span>
                        <span>+ 94 77 880 0036 </span>
                        <span>NO.209/1/A/1 Galroda road, Kadawata, Sri Lanka</span>
                    </div>
                    <div className="p-s-l-top-right d-flex flex-column align-items-center
                    justify-content-between">
                        <div className='w-100 h-50 d-flex align-items-center justify-content-center'>
                            <button className='btn btn-secondary col-7 '>Find Location </button>
                        </div>
                        <div className='w-100 h-25
                        d-flex align-items-center justify-content-center
                        ps-5 mb-4'>
                           <span><i className=' fa fa-facebook-f text-light fs-3 w-25 h-25'></i></span>
                           <span><i className='ms-4 fa fa-whatsapp text-light fs-3 w-25 h-25'></i></span>
                           <span><i className='ms-4 me-5 fa fa-instagram text-light fs-3 w-25 h-25'></i></span>
                        </div>
                    </div>
                </div>
                <div className="p-s-middle d-flex flex-column align-items-center justify-content-center">
                    <ol>
                        <li className='fs-5 fw-bold'>Main Categories</li>
                        <li>Leather Bags</li>
                        <li>leather wallets</li>
                        <li>leather Shoes </li>
                        <li>leather Jacket</li>
                    </ol>
                    <ol>
                        <li className='fs-5 fw-bold'>Main Categories</li>
                        <li>Leather Bags</li>
                        <li>leather wallets</li>
                        <li>leather Shoes </li>
                        <li>leather Jacket</li>
                    </ol>
                </div>
                <div className="p-s-right">
                    <div className="p-s-right-wrapper">

                    </div>
                    <img
                        src={GpFour}
                        className="shadow-1-strong rounded mb-4"
                        width={'100px'}
                        height={'200px'}
                        alt="Boat on Calm Water"
                        style={{
                            position: 'relative',
                            top: '50px',
                            left: '110px'
                        }}
                    />
                    <img
                        src={FImgOne}
                        className="shadow-1-strong rounded mb-4"
                        width={'200px'}
                        height={'100px'}
                        alt="Boat on Calm Water"
                        style={{
                            position: 'relative',
                            top: '100px',
                            left: '100px'
                        }}
                    />
                    <img
                        src={GpOne}
                        className="shadow-1-strong rounded mb-4"
                        width={'200px'}
                        height={'100px'}
                        alt="Boat on Calm Water"
                        style={{
                            position: 'relative',
                            top: '-15px',
                            left: '10px'
                        }}
                    />
                    <img
                        src={GpTwo}
                        className="shadow-1-strong rounded mb-4"
                        width={'100px'}
                        height={'200px'}
                        alt="Boat on Calm Water"
                        style={{
                            position: 'relative',
                            top: '35px'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
