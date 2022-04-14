import React from 'react'
import spidy from "./picture/spidy.jpg"
import pandey from "./picture/pandey.jpeg"
import pratham from "./picture/pratham.jpg"
import shridhar from "./picture/shridhar.jpeg"
import tanmay from "./picture/Tanmay1.jpeg"
import padwal from "./picture/padwal.jpeg"
import caroline from "./picture/car.jpg"
import "./Team.css"
import "./heading.css"
import PropTypes from 'prop-types'
import  {useState} from 'react'








export default function Team(props) {
    props.setProgress(100);
   
    
        return (
            
        <div>
            
            <div className="px-5 team4 mt-5">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mt-5 animate-character">Experienced  Professional Team</h3>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={spidy} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0 ">Sanket Kumbhar</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="#" class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="#" class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram "></i></span>
                                            </a>
                                            <a href="#" class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 mb-4">

                            <div className="row justify-content-center">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={tanmay} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Tanmay Waghole</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="https://www.facebook.com/tanmay.waghole.31" target='_blank' class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="https://www.instagram.com/_waghya_3785/" target='_blank' class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="https://github.com/waghya3785" target='_blank' class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 mb-4">

                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={caroline} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Atharva Chavan</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="#" class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="#" class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="#" class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={pratham} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Pratham Pohokar</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="https://www.facebook.com/pratham.pohokar.7" class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="https://www.linkedin.com/in/pratham-pohokar-81611a207/" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="https://www.instagram.com/pr_tham_/" class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="https://github.com/KingSlayer2804" class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 team4">
                <div className="container">
                    {/* <div className="row justify-content-center mb-4">
      <div className="col-md-7 text-center">
        <h3 className="mb-3">Experienced  Professional Team</h3>
        <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div> */}
                    <div className="row justify-content-center d-flex justify-content-center">
                        <div className="col-lg-3 mb-1">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={padwal} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Aditya Padwal</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="#" class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="#" class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="#" class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 mb-4">

                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={shridhar} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Shridhar Kokate</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="#" class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="#" class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="#" class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 mb-4">

                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <img src={pandey} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Prakalp Pande</h5>
                                        <h6 className="subtitle mb-3">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                        <div class="wrapper">
                                            <a href="https://www.facebook.com/prakalp.pande.7/" target='_blank' class="icon facebook">
                                                <div class="tooltip">Facebook</div>
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                            <a href="#" class="icon twitter">
                                                <div class="tooltip">Twitter</div>
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                            <a href="https://www.instagram.com/prakalp_pande_/" target='_blank' class="icon instagram">
                                                <div class="tooltip">Instagram</div>
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                            <a href="https://github.com/PRAKALP-PANDE" target='_blank' class="icon github">
                                                <div class="tooltip">Github</div>
                                                <span><i class="fab fa-github"></i></span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                
            </div>
            
           
        </div>
        
    )
    
    
}

