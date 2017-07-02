import React, { Component } from "react";
import PT from "prop-types";
import Layout from "../components/Layout";
import { Form, Icon } from "semantic-ui-react";
//import { connect } from "react-redux";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <Layout title="Авторизация">
        <Form size="big" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Login"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <Form.Button color="green" size="big">
              Login <Icon name="sign in" />
            </Form.Button>
          </Form.Group>
        </Form>
      </Layout>
    );
  }
}

Login.propTypes = {
  user: PT.object,
  login: PT.func,
  logout: PT.func,
  push: PT.func,
  redirectBackLink: PT.string
};
