import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-4" href="/">
          <img src= 
          "https://i.ibb.co/bXdVW6d/logo-healthhelp.png"
          alt="HealtHelp" width="140" height="40" />
        </a>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  How it works
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">How it works</a></li>
                  <li><a className="dropdown-item" href="/">Feedback</a></li>
                  <li><a className="dropdown-item" href="/">Team</a></li>
                  <li><a className="dropdown-item" href="/">Get in touch</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Why To Donate</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Fundraiser</a>
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
