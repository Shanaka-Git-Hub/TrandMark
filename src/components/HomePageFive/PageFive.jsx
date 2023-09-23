import React from 'react'
import '../../css/PageFive.css'
import GpOne from '../../assets/pageFive/p-5-1.png'
import GTwo from '../../assets/pageFive/p-5-2.png'
import GThree from '../../assets/pageFive/p-5-3.png'
import GFour from '../../assets/pageFive/p-5-4.png'
import GFive from '../../assets/pageFive/p-5-5.png'
import GSix from '../../assets/pageFive/p-5-6.png'
export default function PageFive() {
    return (
        <div className='page-five-content container-fluid'>
            <div className="row col-8">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 sm-bg-primary">
                    <img
                        src={GpOne}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src={GTwo}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        id='GFour'
                        src={GFour}
                        className="w-50 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src={GThree}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={GFive}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src={GSix}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
        </div>
    )
}
