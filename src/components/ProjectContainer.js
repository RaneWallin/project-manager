import React, { Component } from 'react';
import axios from 'axios';

import Project from './Project';

const PROJECT_API = "http://localhost:5000/api";

class ProjectContainer extends Component {
    state = {
        projects: null
    }
    async componentDidMount() {
        const res = await axios.get(`${PROJECT_API}/projects`);
        const projects = res.data;

        console.log(projects);

        this.setState({projects});
    }

    render() {
        return (
            <div>
                { this.state.projects && this.state.projects.map(project => <Project project={project} />)}
            </div>
        );
    }
}

export default ProjectContainer;