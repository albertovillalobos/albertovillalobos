import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { container, picture, description } from './project.module.scss';
import { projects } from '../../data/data.js';

const Project = (project) => {
  const { id } = useParams();
  const { picture: src, info, name } = projects.find((p) => id === p.id)

  debugger;

  return (
    <div className={container}>
      <img className={picture} src={src} alt={name} />
      <ReactMarkdown className={description} source={info} />
    </div>
  );
}

export default Project;
