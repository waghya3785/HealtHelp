import React from 'react'

export default function Slider() {
    return (
        <div>
            <div className="container" style={{margin: '101px'}} >
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div className="row">
                                <div className="container col-lg-6">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
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
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
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
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
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
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}
