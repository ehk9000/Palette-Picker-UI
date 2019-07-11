import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCurrentProject } from '../../actions/';

export const DropDown = (props) => {
  return (
    <section className="DropDown">
      <div onClick={props.clearCurrentProject}>
        <NavLink to="/createNewProject">Create Project</NavLink>
      </div>
      <div className="divider" />
      <div>
        <NavLink to="/projects">Explore Projects</NavLink>
      </div>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  clearCurrentProject: () => dispatch(clearCurrentProject())
});

export default connect(null, mapDispatchToProps)(DropDown);