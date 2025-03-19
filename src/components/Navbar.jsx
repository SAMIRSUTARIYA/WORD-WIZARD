import React from 'react'
import PropTypes from 'prop-types'
import Mode_btn from './Mode_btn'

function Navbar(props) {
  return (
    <nav className="navbar ">
      <div className="container1-nav container-fluid navbar-light">
        <a className="nav1 navbar-brand" href="#">
          <img src="/src/assets/logo2.png" alt="Logo" width="45" height="50" className="d-inline-block align-text-top" />
          <span className="text-white">{props.title}</span>
        </a>
        <Mode_btn />
      </div>
    </nav>
  )
}

export default Navbar