import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-4" href="/">
          <img src= 
          "https://i.ibb.co/bXdVW6d/logo-healthhelp.png"
          alt="HealtHelp" width="140" height="40" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  How it works
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item"  to="/How_it_works">How it works</Link></li>
                  <li><a className="dropdown-item" href="/">Feedback</a></li>
                  <li><Link className="dropdown-item"  to="/Team">Team</Link></li>
                  <li><a className="dropdown-item" href="/">Get in touch</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/Donate">Why To Donate</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active"  aria-current="page" href="#About">About us</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#CreateFr">Fundraiser</a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
