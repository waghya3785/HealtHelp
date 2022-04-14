import React from 'react'
import Slider from './Slider'
import Cards from './Cards'
import Fund from './Fund'
import Orphanage_slider from './Orphanage_slider'
import Detail_intro from './Detail_intro'
import Result from './Result'
import Create_fundraiser from './Create_fundraiser'
import Gallery from './Gallery'
export default function Home(props) {
  // props.setProgress(100);
  return (
    <div style={{ backgroundColor: "#F2FFF9" }}>
      <Slider style={{ border: "3px solid red v" }} />
      <Cards />
      <Fund />
      <Orphanage_slider />
      <Detail_intro />
      <Result />
      <Create_fundraiser />
      <Gallery />
    </div>
  )
}
