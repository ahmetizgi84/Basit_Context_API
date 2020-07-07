import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";

var uniqid = require("uniqid");

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

export class AddUser extends Component {
  state = {
    visible: true,

    name: "",
    surname: "",
    email: "",
    password: "",
  };

  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, surname, email, password } = this.state;
    const newUser = {
      id: uniqid(),
      name,
      surname,
      email,
      password,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  render() {
    const { visible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-6 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block mb-2"
              >
                {visible ? "Formu Gizle" : "Formu Göster"}
              </button>

              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Kullanıcı Ekleme Formu</h4>
                    <div className="card-body">
                      <form onSubmit={this.addUser.bind(this, dispatch)}>
                        <div className="form-row">
                          <div className="form-group px-2">
                            <label htmlFor="name">Adınız</label>
                            <input
                              type="text"
                              name="name"
                              id="id"
                              className="form-control"
                              onChange={this.onTextChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="surname">Soyadınız</label>
                            <input
                              type="text"
                              name="surname"
                              id="surname"
                              className="form-control"
                              onChange={this.onTextChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group px-2">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              onChange={this.onTextChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Şifre</label>
                            <input
                              type="text"
                              name="password"
                              id="password"
                              className="form-control"
                              onChange={this.onTextChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-danger btn-block"
                        >
                          Ekle
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
