import React, { Component } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h4>React Eğitimi</h4>
        <h6 className="lead">Kullanıcılar</h6>
        <hr />
        <AddUser />
        <Users />
        <hr />
      </div>
    );
  }
}

export default App;
