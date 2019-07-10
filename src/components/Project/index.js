import React from 'react';

const Project = ({name}) => {
  return(
    <section className="title-wrapper">
      <h3 className="project-title">{name} </h3>  
      
      <p className="click-bait">Click to edit project</p>
      <i className="far fa-trash-alt delete-btn"></i>
    </section>
  )
}

export default Project;