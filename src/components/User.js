import React, { Component } from "react";
import UserConsumer from "../context";

export class User extends Component {
  onDelete(dispatch, e) {
    //Consumer Dispatch
    const { id } = this.props;
    console.log(id);
    dispatch({ type: "DELETE_USER", payload: id });
  }

  render() {
    const { id, name, surname, email, password } = this.props;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <tr style={{ cursor: "pointer" }}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>
                <button
                  onClick={this.onDelete.bind(this, dispatch)}
                  className="btn btn-danger"
                >
                  Sil
                </button>
              </td>
            </tr>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
