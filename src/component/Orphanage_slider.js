import React from 'react'

export default function Orphanage_slider() {
    return (
        <div>
            <div className="container">
                <h2 className="text-center">About organization</h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
