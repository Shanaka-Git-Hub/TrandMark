import React from 'react'
import PageOne from './HomePageOne/component/PageOne'
import PageTwo from './HomePageTwo/components/PageTwo'
import '../css/Home.css'
import PageThree from './HomePageThree/PageThree'
import PageFour from './HomePageFour/PageFour'
import PageFive from './HomePageFive/PageFive'
import PageSix from './HomePageSix/PageSix'
import PageSeven from './HomePageSeven/PageSeven'



export default function Home() {
  return (
    <div className='home-body'>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix/>
      <PageSeven/>
    </div>
  )
}
