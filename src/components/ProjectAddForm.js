import React, { Component } from "react";
import axios from "axios";

const PROJECT_API = "http://localhost:5000/api";

class ProjectAddForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, description } = this.state;

    const newProject = await axios.post(`${PROJECT_API}/projects`, {
      name,
      description
    });

    this.setState({ name: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="row valign-wrapper">
          <div className="input-field col s3">
            <input
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="input-field col s3">
            <input
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div className="col s3">
            <button className="btn">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ProjectAddForm;
