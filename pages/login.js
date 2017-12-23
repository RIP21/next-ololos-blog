import React from 'react'
import PT from 'prop-types'
import Layout from 'components/Layout'
import { Form, Icon } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import Router from 'next/router'
import { createStructuredSelector } from 'reselect'
import withAuth from 'helpers/withAuth'
import { login } from '../redux/ducks/auth'
import { isAuthenticated } from '../redux/selector/auth'

class Login extends React.Component {
  static async getInitialProps(context) {
    await withAuth(context)
  }

  state = {
    username: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.login(username, password).then(this.redirectIfSuccess)
  }

  redirectIfSuccess = () => {
    if (this.props.isAuthenticated) {
      Router.push('/index')
    }
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
  login: PT.func,
}

const selector = createStructuredSelector({ isAuthenticated })

export default withRedux(initStore, selector, { login })(Login)
