import React from 'react'
import logo from "./picture/loc.png"
export default function Footer() {
    return (

        <div style={{ backgroundColor: '#212529' }}>
            <div className="b-example-divider"></div>

            <div className="container">
                <footer className="row row-cols-5 pt-5 mt-5 border-top">
                    <div className="col">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src="https://i.ibb.co/bXdVW6d/logo-healthhelp.png" className="bi me-2" width="90x" height="32"></img>
                        </a>
                        <p className="text-muted">&copy; 2022</p>
                    </div>

                    <div className="col">

                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="https://goo.gl/maps/CM7wDAEWJqUJFaZu7" className="nav-link p-0 " target="_blank"><img src={logo}  style={{height:"30px",width:"38px"}}/>Locate Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Jeevan Vardhini Matimand Vidylay, Dive, Maharashtra, 412301</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}
