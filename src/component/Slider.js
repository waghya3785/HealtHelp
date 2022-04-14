import React from 'react'
import top1 from "./picture/top1.jpg"
import top2 from "./picture/top2.jpg"
import top3 from "./picture/top3.jpg"
import top4 from "./picture/top4.jpg"
import top5 from "./picture/top5.jpg"
import "./Team.css"




export default function Slider() {
    return (
        <div>
            <div className="container  border border-3 rounded p-4" style={{ marginTop: "70px" }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark text-white"
                            aria-current="true" aria-label="Slide 1"></button>

                        <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        className="active bg-dark text-white"
                        
                            aria-label="Slide 2"></button>

                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        className="active bg-dark text-white"
                            aria-label="Slide 3"></button>

                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                             className="active bg-dark text-white"
                            aria-label="Slide 4"></button>

                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                             className="active bg-dark text-white"
                            aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={top1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="container col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title animate-character">Jivan vardhini matimand vidyalay</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={top2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="container col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={top3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="container col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={top4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="container col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={top5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="container col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up
                                                the
                                                bulk of the card's content.</p>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn btn-secondary " aria-hidden="true"></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon btn btn-secondary" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}
