import React, { Component } from "react";
import posed from "react-pose";

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
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { visible } = this.state;
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
                <form>
                  <div className="form-row">
                    <div className="form-group px-2">
                      <label htmlFor="name">Adınız</label>
                      <input
                        type="text"
                        name="name"
                        id="id"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="surname">Soyadınız</label>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    {" "}
                    <div className="form-group px-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Şifre</label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-danger btn-block">
                    Ekle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
