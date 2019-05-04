import React, { Component } from 'react';

import Project from './project';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>Projects</h1>
        <ul>
          {this.props.projects.map(project => {
            return (
              <Project
                name={project.name}
                id={project.id}
                age={project.description}
                height={project.project_id}
                key={project.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}


export default Projects;