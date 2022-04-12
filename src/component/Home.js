import React from 'react'
import Slider from './Slider'
import Cards from './Cards'
import Fund from './Fund'
import Orphanage_slider from './Orphanage_slider'
import Detail_intro from './Detail_intro'
import Result from './Result'
import Footer from './Footer'
import Create_fundraiser from './Create_fundraiser'
export default function Home() {
  return (
    <div>
     <Slider/> 
     <Cards/>
     <Fund/>
      <Orphanage_slider/>
      <Detail_intro/>
      <Result/>
      <Create_fundraiser/>
      <Footer/> 
    </div>
  )
}
