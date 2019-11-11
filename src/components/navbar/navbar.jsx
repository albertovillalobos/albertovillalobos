import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  container,
  name,
  links,
  link,
  activeLink
} from './navbar.module.scss';

const Navbar = () => {

  const { pathname: path } = useLocation();

  const getClassname = (pathname) => {
    return pathname === path ? activeLink : link
  };

  return (
    <div className={container}>
      <div className={name}>Alberto Villalobos</div>
      <div className={links}>
        <Link to="/" className={getClassname('/')}>Home</Link>
        <Link to="/portfolio" className={getClassname('/portfolio')}>Portfolio</Link>
      </div>
    </div>
  )
}

export default Navbar;
