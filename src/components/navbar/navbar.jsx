import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  container,
  name,
  links,
  link,
  activeLink,
  bars,
  show,
} from './navbar.module.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  }

  const onLinkClick = () => {
    setShowMenu(false)
  }

  const { pathname: path } = useLocation();

  const getClassname = (pathname) => {
    return pathname === path ? activeLink : link
  };

  return (
    <div className={container}>
      <div className={name}>Alberto Villalobos</div>
      <div className={`${bars} fa fa-bars`} onClick={onMenuClick}/>
      <div className={`${links} ${showMenu && show}`}>
        <Link onClick={onLinkClick} to="/" className={getClassname('/')}>Home</Link>
        <Link onClick={onLinkClick} to="/portfolio" className={getClassname('/portfolio')}>Portfolio</Link>
      </div>
    </div>
  )
}

export default Navbar;
