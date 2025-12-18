import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar: React.FC = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2" to="/">EduPlus</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/link">
            <i className="fa-solid fa-book-open"></i> learn
          </Link>
        </li>

        
        <li className="nav-item">
          <Link className="nav-link"  to="#">
             Practice
          </Link>
        </li>

      </ul>
        <button className="btn btn-outline-dark " style={{ marginRight:'30px' }} type="submit">
          Se connecter
        </button>
        <button className="btn btn-outline-dark" type="submit">
          Registre
        </button>
    </div>
  </div>
</nav>

  )
}
export default Navbar