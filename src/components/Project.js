import React from "react";
import axios from "axios";

const PROJECT_API = "http://localhost:5000/api";

const Project = props => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.project.name}</span>
            <p>{props.project.description}</p>
          </div>
          <div className="card-action">
            <a href="#">View</a>
            <a href="#" onClick={e => handleClick(props.project.id)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const handleClick = id => {
  axios.delete(`${PROJECT_API}/projects/${id}`);
};

export default Project;
