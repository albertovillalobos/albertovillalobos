import React from 'react';
import { socialData, aboutMe1, aboutMe2, particularSkills } from './data.js';
import styles, {
  container,
  presentation,
  name,
  links,
  about,
  title,
  copy,
  skillset,
  skillColumns,
  column,
  skillTitle,
  skillList,
} from './home.module.scss';

const Social = ({ href, className, fa }) => (
  <a
    href={href}
    key={className}
    target="_blank"
    rel="noopener noreferrer"
    className={styles[className]}
  >
    <i className={fa} />
  </a>
);

const skillColumn = ({ name, skills }) => (
  <div className={column} key={name}>
    <div className={skillTitle}>{name}</div>
    <ul className={skillList}>
      {skills.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <div className={container}>
    <div className={presentation}>
      <div className={name}>Alberto Villalobos</div>
      <div className={links}>{socialData.map(Social)}</div>
    </div>
    <div className={about}>
      <div className={title}>About</div>
      <div className={copy}>{aboutMe1}</div>
      <div className={copy}>{aboutMe2}</div>
    </div>
    <div className={skillset}>
      <div className={title}>Skills</div>
      <div className={skillColumns}>{particularSkills.map(skillColumn)}</div>
    </div>
  </div>
);

export default Home;
