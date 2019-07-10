import React from 'react';
import { connect } from 'react-redux';
import { fetchDeleteProject } from '../../thunks/fetchDeleteProject';
import { selectCurrentProject } from '../../actions';
import { NavLink } from 'react-router-dom';

const Project = (props) => {
  const {name, id} = props;
  
  return(
    <section className="title-wrapper">
      <NavLink to="/"><h3 className="project-title" onClick={() => props.selectCurrentProject(props)}>{name}</h3></NavLink>  
      
      <p className="click-bait">Click to edit project</p>
      <i className="far fa-trash-alt delete-btn" onClick={() => props.deleteProject(id)}></i>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteProject: (id) => dispatch(fetchDeleteProject(id)),
  selectCurrentProject: (project) => dispatch(selectCurrentProject(project))
})

export default connect(null, mapDispatchToProps)(Project);