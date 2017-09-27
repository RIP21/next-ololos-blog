import React from 'react'
import PT from 'prop-types'
import Layout from 'components/Layout'
import { Form, Icon } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import { login } from '../redux/auth'
import Router from 'next/router'
import { isAuthenticated } from '../redux/selector/auth'
import { createStructuredSelector } from 'reselect'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.login(username, password).then(Router.push('/index'))
  }

  render() {
    const { username, password } = this.state

    if (this.props.isAuthenticated) {
      Router.push('/index')
      return null
    }

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
    )
  }
}

Login.propTypes = {
  user: PT.object,
  login: PT.func,
  logout: PT.func,
  push: PT.func,
  redirectBackLink: PT.string,
}

const selector = createStructuredSelector({ isAuthenticated })

export default withRedux(initStore, selector, { login })(Login)
