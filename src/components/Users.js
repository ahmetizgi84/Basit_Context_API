import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";

export class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          //value = this.state olduğu için
          const { users } = value;
          return (
            <div className="container">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Eposta</th>
                    <th scope="col">Şifre</th>
                    <th scope="col">Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        surname={user.surname}
                        email={user.email}
                        password={user.password}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
