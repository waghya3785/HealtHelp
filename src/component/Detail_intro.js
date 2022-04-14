import React from 'react'

export default function Detail_intro() {
    return (
        <div style={{marginTop:'50px'}}>
            <div className="container my-4" >
                <div className="container my-4 shadow-lg p-3 mb-5 bg-body rounded"  style={{border:'1px solid black'}}>
                    <h2 className="text-center my-4">Interview</h2>
                    <div className="row align-items-center">
                        <div className="col">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="img-thumbnail" alt="..." />
                        </div>
                        <div className="card col">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
