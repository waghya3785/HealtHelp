import React from 'react'
import abt1 from "./picture/abt1.jpg"
import abt2 from "./picture/abt2.jpg"
import abt3 from "./picture/abt3.jpg"
import abt4 from "./picture/abt4.jpg"
import abt6 from "./picture/abt5.jpg"
import abt5 from "./picture/abt6.jpg"
import abt7 from "./picture/abt7.jpg"



export default function Orphanage_slider() {
    return (
        <div style={{marginTop:'100px',marginBottom:'725px'}}>
            <img src={abt1} class="rounded float-start" alt="image1" style={{height:'200px', width:'200px', position:'relative', bottom:'80px', left:'15px'}}/>
            <p style={{width:'900px',textAlign:'left',marginLeft:'350px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, nostrum deleniti quos sit, dolore doloribus quae porro veritatis voluptate id laborum quod ex, nulla rerum impedit temporibus consequatur incidunt minima?</p>
            <img src={abt2} class="rounded float-end" alt="image2" style={{height:'200px', width:'200px', position:'relative', top:'142px',right:'25px'}}/>
            <img src={abt3} class="rounded float-start" alt="image3" style={{height:'200px', width:'200px', position:'relative',top:'400px', right:'185px'}}/>

            {/* <div>
                <div>
            <img src={abt1} class="rounded float-start" alt="img 1" style={{height:'200px', width:'200px', marginLeft:'27px', marginRight:'50px'}}/>
            </div>
            <p style={{margin:'50px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, fuga! Odit eos, eligendi dolores reprehenderit totam nihil voluptatem officiis error neque tenetur soluta necessitatibus quis repudiandae odio! Libero expedita veritatis error tempora nam, rem impedit alias mollitia est earum quam cumque eveniet corrupti cum cupiditate.</p>
            </div>
            
            
            <div>
            <p style={{margin:'50px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, fuga! Odit eos, eligendi dolores reprehenderit totam nihil voluptatem officiis error neque tenetur soluta necessitatibus quis repudiandae odio! Libero expedita veritatis error tempora nam, rem impedit alias mollitia est earum quam cumque eveniet corrupti cum cupiditate.</p>
             <div>
            <img src={abt2} class="rounded float-end" alt="img 1" style={{height:'200px', width:'200px', marginLeft:'27px', marginRight:'50px'}}/>
            </div>
            </div>
            
            
            <>
            
        <img src={abt3} class="rounded float-start" alt="img 1" style={{height:'200px', width:'200px', marginLeft:'27px', marginRight:'50px'}}/>
        </
        <p style={{margin:'50px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, fuga! Odit eos, eligendi dolores reprehenderit totam nihil voluptatem officiis error neque tenetur soluta necessitatibus quis repudiandae odio! Libero expedita veritatis error tempora nam, rem impedit alias mollitia est earum quam cumque eveniet corrupti cum cupiditate.</p>
        </div> */}
        </div>
    )
}
