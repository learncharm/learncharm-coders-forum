import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar   navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      {/* <img src="./assets/img/logo/logo.png" alt=""  className="d-inline-block align-text-top"/> */}
    <h4>Learncharm Coders Forum</h4>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item active" href="#">Forum</a></li>
            <li><a className="dropdown-item" href="#">Quiz</a></li>
            <li><a className="dropdown-item" href="#">Project</a></li>
            <li><a className="dropdown-item" href="#">Group Study</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className="d-flex nav-profile">
        {/* <p className="me-2">Krupesh</p>
        <img src="https://cdn.discordapp.com/attachments/852063239277903892/966598569270312990/Krupesh_Vithlani_2_1.jpg" alt="" className="nav-profile-img" width="32" height="32"> */}

        <a href="#" className="btn btn-full">SIgn Up</a>
        <a href="#" className="btn btn-border">Log In</a>
</div>
    </div>
  </div>
</nav>
    )
}
