import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Navbar = () => {
  let history = useHistory();
  const his = () => {
    // history.goBack(); //jis pr phle click kiya hoga us pr jyega return.
    history.push("/"); //page ko redirect krne ke liye h {home pr redirect}.

  }
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-warning" exact to="/Adminlog">ADMIN LOGIN</NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                  <NavLink className="nav-link active" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled" exact to="/Images" >Images</NavLink>
                </li>
              </ul>
              <button className="nav-link btn btn-sm-warning text-white-50" onClick={his}>Direct Home</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
