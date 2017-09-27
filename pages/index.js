import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import { loadPosts } from 'redux/posts'
import { loadAuthors } from 'redux/authors'
import withAuth from '../helpers/withAuth'
import Post from '../features/Post/Post'
import map from 'lodash/map'
import { getSortedByDatePosts } from '../redux/selector/posts'

class Index extends React.Component {
  static async getInitialProps({ store }) {
    await Promise.all([
      store.dispatch(loadPosts()),
      store.dispatch(loadAuthors()),
    ])
  }

  render() {
    return (
      <Layout topPadding="0em">
        <Masthead>
          <Logo>
            <p>
              <img alt="logo" src="/static/logo.png" />
            </p>
          </Logo>
          <h1>Ололось блог</h1>
          <h2>
            Совместный блог о путешествиях Андрея Лося aka @RIP212 и Лины
            Олейник
          </h2>
        </Masthead>
        {map(this.props.posts, post => (
          <Post key={post.id} post={post} isIndex />
        ))}
      </Layout>
    )
  }
}

export const Masthead = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #a1a1a1;
  padding: 40px 20px;
  color: white;
  text-align: center;

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1.5em;
    margin: 20px;
  }

  a {
    color: #ddd;
  }

  p {
    margin: 10px;
  }
`

export const Logo = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
  vertical-align: middle;

  p {
    line-height: 200px;
    margin: 0;
  }

  img {
    width: 75%;
    margin: auto;
  }
`

const selector = (state, ownProps) => ({
  posts: getSortedByDatePosts(state),
})

export default withRedux(initStore, selector, {})(withAuth(Index))
