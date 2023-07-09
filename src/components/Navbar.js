import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
 

  return (
    <>
      <nav class="navbar navbar-expand-lg anim" id="navbar">
      <Link class="navbar-brand" to="/jobhub/">
        <div class="enlarge-image">
          <img  src="/jobhub/job.png" alt="logo" />
        </div>
      </Link>
      <button
        id='navToggleBtn'
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-sliders"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" data-toggle="collapse"
        data-target="#navbarNav">
            <Link
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              to="/jobhub/"
              >Home</Link
              
            >
          </li>
          <li class="nav-item" data-toggle="collapse"
        data-target="#navbarNav">
            <Link
              to="/jobhub/jobs"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              >Jobs</Link
            >
          </li>
          <li class="nav-item" data-toggle="collapse"
        data-target="#navbarNav">
            <Link to="/jobhub/services"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              >Services</Link
            >
          </li>
          <li class="nav-item" data-toggle="collapse"
        data-target="#navbarNav">
            <Link
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              to="/jobhub/about"
              >About</Link
            >
          </li>
          <li class="nav-item" data-toggle="collapse"
        data-target="#navbarNav">
            <Link to="/jobhub/contact"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              
              >Contact Us</Link
            >
          </li>
          <li id='navBtnLi'>
            <Link to="/jobhub/login"><button className='btn  navbtn mx-2'>Login</button></Link>
            <Link to="/jobhub/register"><button className='btn  navbtn'>Register</button></Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
