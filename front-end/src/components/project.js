import React from 'react';

const Project = props => {
  return (
    <div className="Project">
      <h3>{props.name}</h3>
      <strong>{props.description} </strong>
    </div>
  );
};


export default Project;