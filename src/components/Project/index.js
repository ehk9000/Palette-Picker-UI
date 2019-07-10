import React from 'react';
import { connect } from 'react-redux';
import { fetchDeleteProject } from '../../thunks/fetchDeleteProject';

const Project = (props) => {
  const {name, id} = props;
  
  return(
    <section className="title-wrapper">
      <h3 className="project-title">{name}</h3>  
      
      <p className="click-bait">Click to edit project</p>
      <i className="far fa-trash-alt delete-btn" onClick={() => props.deleteProject(id)}></i>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteProject: (id) => dispatch(fetchDeleteProject(id))
})

export default connect(null, mapDispatchToProps)(Project);