import React from 'react'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import dynamic from 'next/dynamic'
import { loadPosts } from 'redux/posts'
import { loadAuthors } from 'redux/authors'
import withAuth from '../helpers/withAuth'
import { getPostById } from '../redux/selector/posts'
import Post from '../features/Post/Post'
import Layout from "../components/Layout/Layout";

const DisqusThread = dynamic(import('react-disqus-comments'), { ssr: false })

class PostPage extends React.Component {
  static async getInitialProps({ query: { id }, store }) {
    await Promise.all([
      store.dispatch(loadPosts()),
      store.dispatch(loadAuthors()),
    ])
    return { id }
  }

  render() {
    const { post } = this.props
    return (
      <Layout as="article" title={post.title}>
        <Post post={post} isIndex={false} />
      </Layout>
    )
  }
}

const PostContainer = styled('div')`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 1em;
  }
`

const selector = (state, ownProps) => ({
  post: getPostById(ownProps.id)(state),
})

export default withRedux(initStore, selector, {})(withAuth(PostPage))
