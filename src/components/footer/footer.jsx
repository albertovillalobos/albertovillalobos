import React from 'react';
import { footer, link } from './footer.module.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <div className={footer}>Alberto Villalobos {year} &copy;</div>
);

export default Footer;
