import React from 'react';
import './Project.scss';

const Project = ({name}) => {
  return(
    <section className="title-wrapper">
      <h3 className="project-title">{name}</h3>
    </section>
  )
}

export default Project;