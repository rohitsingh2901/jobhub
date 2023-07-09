import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="row ficons">
          <ul>
            <Link to="#" 
              ><i class="fa fa-facebook"></i
            ></Link>
            <Link to="#" 
              ><i class="fa fa-instagram"></i
            ></Link>
            <Link to="#" 
              ><i class="fa fa-youtube"></i
            ></Link>
            <Link to="#" 
              ><i class="fa fa-twitter"></i
            ></Link>
          </ul>
        </div>

        <div class="row">
          <ul>
            <li><Link to="/jobhub/contact">Contact us</Link></li>
            <li><Link to="/jobhub/services">Our Services</Link></li>
            <li><Link to="/jobhub/">Our Courses</Link></li>
            <li><Link to="/jobhub/jobs">Internships & Jobs</Link></li>
            <li><Link to="/jobhub/">Career</Link></li>
          </ul>
        </div>

        <div class="row">
          JobHub Copyright © 2023 JobHub - All rights reserved || Completely Designed By:
          <Link to="https://github.com/rohitsingh2901"> &nbsp;&nbsp;Rohit Singh</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
