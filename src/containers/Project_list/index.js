import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Project/index';


class Project_list extends Component {
  assignProjects = () => {
   let { projects } = this.props;
   let displayProjects;
   

   if (projects && projects.length) {
     displayProjects = projects.map(project => 
       <Project {...project} key={project.id} />
     );
   } else {
     displayProjects = <div>
       <p>Projects will display here</p>
     </div>
   }
   return displayProjects;
 }
 render() {
   const displayProjects = this.assignProjects();
   return (
     <div>
       {displayProjects}
     </div>
   )

 }

}

const mapStateToProps = state => ({
  projects: state.projects,
  palettes: state.palettes
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Project_list);