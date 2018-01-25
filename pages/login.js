import Layout from 'components/Layout'
import React from 'react'
import PT from 'prop-types'
import { Form, Icon } from 'semantic-ui-react'
import { graphql, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import gql from 'graphql-tag'

import checkLoggedIn from '../apollo/helpers/checkLoggedIn'
import redirect from '../helpers/redirect'
import withData from '../apollo/hoc/withData'

class LoginPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const user = await checkLoggedIn(context, apolloClient)

    if (user && user.id) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/')
    }

    return {}
  }

  state = {
    username: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.onLogin(username, password)
  }

  render() {
    const { username, password } = this.state
    return (
      <Layout title="login">
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

LoginPage.propTypes = {
  onLogin: PT.func,
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
  graphql(
    // The `signinUser` mutation is provided by graph.cool by default
    gql`
      mutation Signin($email: String!, $password: String!) {
        signinUser(email: { email: $email, password: $password }) {
          token
        }
      }
    `,
    {
      // Use an unambiguous name for use in the `props` section below
      name: 'signinWithEmail',
      // Apollo's way of injecting new props which are passed to the component
      props: ({
        signinWithEmail,
        // `client` is provided by the `withApollo` HOC
        ownProps: { client },
      }) => ({
        // `onLogin` is the name of the prop passed to the component
        onLogin: (email, password) => {
          signinWithEmail({
            variables: {
              email,
              password,
            },
          })
            .then(({ data: { signinUser: { token } } }) => {
              // Store the token in cookie
              document.cookie = cookie.serialize('token', token, {
                maxAge: 30 * 24 * 60 * 60, // 30 days
              })

              // Force a reload of all the current queries now that the user is
              // logged in
              client.resetStore().then(() => {
                // Now redirect to the homepage
                redirect({}, '/')
              })
            })
            .catch(error => {
              // Something went wrong, such as incorrect password, or no network
              // available, etc.
              console.error(error)
            })
        },
      }),
    },
  ),
)(LoginPage)
