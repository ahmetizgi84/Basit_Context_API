import React, { Component } from "react";

const UserContext = React.createContext();

//Provider, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Suryah",
        surname: "Gipal",
        email: "sugip@deneme.com",
        password: "123",
      },
      {
        id: 2,
        name: "Jorni",
        surname: "Ketzel",
        email: "joeket@deneme.com",
        password: "12345",
      },
      {
        id: 3,
        name: "Otto",
        surname: "Pine",
        email: "pineo@deneme.com",
        password: "123xxyy",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
