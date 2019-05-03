import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";

import Projects from "./components/projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects")
      .then(res => this.setState({ projects: res.data }))
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }


  render() {
    return (
      <div className="App">
        <NavLink className="navLink" exact to="/">
          Home
        </NavLink>

        <div className="main">
          <Route
           exact path="/"
            render={props => <Projects {...props} projects={this.state.projects} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
