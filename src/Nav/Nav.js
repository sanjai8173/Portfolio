import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="ndiv">
      <nav className="nav" style={{height:"60px"}}>
        <h1 style={{marginLeft:"30px",backgroundColor:'rgba(0,0,0,0)',marginTop:'-5px'}}>Portfolio</h1>
        <ul style={{marginRight:"30px"}}>
          <li><NavLink exact to='/' className="link" activeClassName="active">About Me</NavLink></li>
          <li><NavLink to='/my-work' className="link" activeClassName="active">My Work</NavLink></li>
          <li><NavLink to='/contact-me' className="link" activeClassName="active">Contact Me</NavLink></li>
        </ul>
      </nav>
      <Outlet className="Outlet" />
    </div>
  );
}

export default Nav;
