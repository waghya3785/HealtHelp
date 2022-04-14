import React from 'react'
import "./heading.css"


import D1 from "./picture/D1.jpg"
import D2 from "./picture/D2.jpg"
import D3 from "./picture/D3.jpg"


export default function Donate() {

  return (
    <div style={{backgroundColor:'#F2FFF9'}}>

    

    <div className="container"style={{marginTop:'75px'}}>


          <h1 className='card-title justify-content-center animate-character' style={{marginLeft:"500px"}}>Why to donate</h1>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px", height: "75%", width: "75%", margin: "auto" }}>
      
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner" >
          <div className="carousel-item active" >
            <img src={D1} className="d-block w-100" alt="..." style={{ borderRadius: "15px", boxShadow: "2px 2px 6px", height: "80%", width: "75%", margin: "auto" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>“I have found that among its other benefits, giving liberates the soul of the giver."</h5>
              <p>Maya Angelou</p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src={D2} className="d-block w-100" alt="..." style={{ borderRadius: "15px", boxShadow: "2px 2px 6px", height: "80%", width: "75%", margin: "auto" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>“Always give without remembering and always receive without forgetting."</h5>
              <p>Brian Tracy</p>
            </div>
          </div>
          <div className="carousel-item" >
            <img src={D3} className="d-block w-100" alt="..." style={{ borderRadius: "15px", boxShadow: "2px 2px 6px", height: "80%", width: "75%", margin: "auto" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>“We make a living by what we get. We make a life by what we give."</h5>
              <p>Winston Churchill.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>






















      <div className="row row-cols-1 row-cols-md-3 g-4 " style={{ margin: "85px 0px" }} >
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lmVpFe5cwFoXLp_8D0hINrBLw0fjrWbjTQ&usqp=CAU" className="card-img-top" alt="..." style={{ borderRadius: "15px", height: "250px",width:'25.3rem' }} />
            <div className="card-body">
              <h4 className="card-title">For Need of food</h4>
              <p className="card-text"><p>21% of people live on less than US$1.90 a day
                                  1/4 of the world’s undernourished people live in India
                                  Because of it problem of malnutrition also arises</p>
                                  <a href="https://www.jstor.org/stable/4322273" class="btn btn-primary" >more info</a>
                                 
               </p>
            </div>
           
          </div>
          
        </div>

        <div className="col">
          <div className="card" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbQtLL9NwNl8PZTV3WTs10WrutuQqXQCq9w&usqp=CAU" className="card-img-top" alt="..." style={{ borderRadius: "15px", height: "250px",width:'25.3rem' }} />
            <div className="card-body"style={{height:'240px'}}>
              <h4 className="card-title">For Better Education</h4>
              <p className="card-text">
              <p>In India only 74.04% litrecy rate.
              Also there is unreachable and low quality of education in some parts
              So we need to uplift them from bottom of the society.</p>
              <a href="https://knowindia.india.gov.in/profile/literacy.php#:~:text=The%20literacy%20rate%20in%20the,males%20and%2065.46%20for%20females." class="btn btn-primary" >more info</a>
               </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px"  }}>
            <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/8/24/w900X450/Bagalkot_village_school_EPS.jpg?w=400&dpr=2.6" className="card-img-top" alt="..." style={{ borderRadius: "15px", height: "250px",width:'25.3rem' }} />
            <div className="card-body"style={{height:'240px'}}>
              <h4 className="card-title">For Better Facilities</h4>
              <p className="card-text">
              <p>Along with better education.
              We need to improve the the facilities.and curriculum of the society
              Along with this we can develope our society in well manner</p>
              <a href="https://www.newindianexpress.com/opinions/editorials/2022/feb/09/addressing-indias-education-crisis-2417150.html" class="btn btn-primary" >more info</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div className="col">
          <div className="card mx-3" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px" }}>
            <img src="https://switchindia.org/images/work/pediatric-health-camp-neral02.jpg" className="card-img-top" alt="..."  style={{ borderRadius: "15px", height: "250px",width:'23.8rem' }} />
            <div className="card-body">
              <h4 className="card-title">For Better Health</h4>
              <p className="card-text">
              <p>India is one of the countries with the lowest public health spending. Even lower-income countries like Bhutan, Sri Lanka and Nepal .
              which is lower in asia
              Data: National Health Profile, 2018</p>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6639997/" class="btn btn-primary" >more info</a>
             </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ borderRadius: "15px", boxShadow: "2px 2px 6px" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA5nWCUkKy_4YwRv04lJ38gqZsg719n-7dw&usqp=CAU" className="card-img-top" alt="..." style={{ borderRadius: "15px", height: "250px",width:'25.8rem' }} />
            <div className="card-body" style={{height:'240px'}}>
              <h4 className="card-title">For social trainings</h4>
              <p className="card-text">
                <p>Along with the health and education we need to improve social awarness in society.
                India has very low index among the world in social awarness practices.
                social awarness trainings will help us to improve</p>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5479084/" class="btn btn-primary" >more info</a>
              </p>
            </div>
          </div>
        </div>
      </div>



     
      



    </div>
    
</div>















  )
}
