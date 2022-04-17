import React,{useState} from "react"
// import CloseIcon from '@mui/icons-material/Close';

import Img1 from"./picture/orph1.jpeg"
import Img2 from "./picture/orph2.jpeg"
import Img3 from "./picture/orph3.jpeg"
import Img4 from "./picture/orph4.jpeg"
import Img5 from "./picture/orph5.jpeg"
import Img6 from "./picture/orph6.jpeg"
import Img7 from "./picture/orph7.jpeg"
import Img8 from "./picture/orph8.jpeg"
import Img9 from "./picture/orph9.jpeg"
import './Gallery.css'
import { Close } from "@material-ui/icons"



export default function Gallery() {
  let data=[
    {
      id:1,
      imgSrc:Img1,
    },
    {
      id:2,
      imgSrc:Img2,
    },
    {
      id:3,
      imgSrc:Img3,
    },
    {
      id:4,
      imgSrc:Img4,
    },
    {
      id:5,
      imgSrc:Img5,
    },
    {
      id:6,
      imgSrc:Img6,
    },
    {
      id:7,
      imgSrc:Img7,
    },
    {
      id:8,
      imgSrc:Img8,
    },
    {
      id:9,
      imgSrc:Img9,
    },
  ]
const [model,setModel] = useState(false);
const [tempimgsrc,setTempImgSrc] = useState('');

  const getImg =  (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
   

  }
  return (
    <>
    <div className={model? "model open":"model"}>
      <img src={tempimgsrc}/>
      <Close onClick={()=>setModel(false)} style={{backgroundColor:'white',color:'black'}}/>
     
      {/* <Close/> */}

    </div>
    <div className="gallery">
      {
        data.map((item,index)=>{
          return(
            <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width:'100%'}}/>

              </div>
          )

        })
      }

    </div>
    </>
  )
}
