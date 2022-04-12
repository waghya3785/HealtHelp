import React from 'react'

export default function Result() {
    return (
        <div className="container my-4">
            <hr/>
            <h2 className="text-center">Result</h2>
            <div className="card bg-dark text-white">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhUubLP9MxqRn5WyTihFEIR4UWvLDN9L7lA&usqp=CAU"} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}
