import React from 'react';

const Project = props => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{ props.project.name }</span>
                        <p>{ props.project.description }</p>
                    </div>
                    <div className="card-action">
                        <a href="#">View</a>
                        <a href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;