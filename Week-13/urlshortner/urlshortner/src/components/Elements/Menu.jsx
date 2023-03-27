import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom'

const Menu = ({items}) => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand logo" to=""> <b>Shortly</b> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link className="nav-link text-primary" to="/">Home </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link  text-primary" to="/contact">Contact </Link>
      </li>
    </ul>
  
  </div>
</nav>
</div>
  );
}

export default Menu;