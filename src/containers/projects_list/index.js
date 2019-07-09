import React from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Project/index';


const Projects_list = (props) => {
  const displayProjects = () => {
    let { projects } = props;
    let displayProjects;

    if (projects.length) {
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

  return (
    <div>
      {displayProjects}
    </div>
  )

}

const mapStateToProps = ({projects, palettes}) => ({
  projects,
  palettes
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Projects_list);