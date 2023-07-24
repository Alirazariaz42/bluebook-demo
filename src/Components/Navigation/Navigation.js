import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.PNG'

const Navigation = () => {
  return (
    <React.Fragment>
      
<nav className="navbar navbar-expand-lg " >
  <div className="container-fluid" style={{backgroundColor:"#337AB7"}}>
    <a className="navbar-brand p-0"  href="#">  <img src={logo} height={90} width={100}  alt="Image" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item " >
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link pl-3 pr-3 " aria-current="page" to="/blogs">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link active" to="/"> Services</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link " to="/blogs"> Work Samples</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link " to="/blogs"> Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link " to="/blogs"> About Us</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link " to="/blogs"> Payment</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white', fontWeight:'600'}} className="nav-link " to="/blogs"> Estimation fees</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </React.Fragment>
  )
}

export default Navigation
