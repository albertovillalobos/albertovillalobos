import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/data.js';
import { container, project, pic } from './portfolio.module.scss';

const ProjectPicture = ({ thumbnail, name, id}) => (
  <div className={project}>
    <Link to={`/portfolio/${id}`}>
      <img className={pic} src={thumbnail} alt={name} />
    </Link>
  </div>
);

const Portfolio = () => (
  <div className={container}>
    {projects.map(ProjectPicture)}
  </div>
);

export default Portfolio;
