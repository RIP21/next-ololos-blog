import { withAuth, withData } from 'apollo'
import React from 'react'
import Layout from 'components/Layout'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import map from 'lodash/map'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Preview from './post/Preview'

class Index extends React.Component {
  getMeta = () => ({
    title: 'Ололось блог',
    description: 'Совместный блог о путешествиях Андрея Лося aka @RIP212 и Лины Олейник',
  })

  render() {
    return (
      <Layout topPadding="0em" meta={this.getMeta()}>
        <Masthead>
          <Logo>
            <p>
              <img alt="logo" src="/static/logo.png" />
            </p>
          </Logo>
          <h1>Ололось блог</h1>
          <h2>Совместный блог о путешествиях Андрея Лося aka @RIP212 и Лины Олейник</h2>
        </Masthead>
        <Thread>
          {map(this.props.posts, post => (
            <Preview key={post.verboseId} post={post} />
          ))}
        </Thread>
        <Center>
          <Button onClick={this.props.loadMoreEntries}>Load more...</Button>
        </Center>
      </Layout>
    )
  }
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Masthead = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 40px 20px;
  background-image: url('/static/cover1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 35px;
    left: 0;
    background-color: #1182ba;
    opacity: 0.3;
    width: 100%;
    height: 40%;
    z-index: 1;
  }

  h1 {
    font-size: 3em;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 1.5em;
    margin: 20px;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
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

export const Thread = styled.main`
  margin-top: 2em;
  margin-bottom: 2em;
`

const LandingPostsQuery = gql`
  query LandingPosts($skip: Int = 0) {
    allPosts(
      orderBy: createdDate_DESC
      first: 5
      filter: { published: true }
      skip: $skip
    ) {
      title
      createdDate
      description
      verboseId
      previewPic
      tags {
        name
      }
      author {
        name
      }
    }
  }
`

export default compose(
  withData,
  withAuth,
  graphql(LandingPostsQuery, {
    props: ({ data: { loading, allPosts, fetchMore } }) => ({
      loading,
      posts: allPosts,
      loadMoreEntries() {
        return fetchMore({
          // query: ... (you can specify a different query. LandingPostsQuery is used by default)
          variables: {
            // We are able to figure out which offset to use because it matches
            // the feed length, but we could also use state, or the previous
            // variables to calculate this (see the cursor example below)
            skip: allPosts.length,
          },
          updateQuery: (previousResult, { fetchMoreResult, ...rest }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return {
              previousResult,
              // Append the new feed results to the old one
              allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
            }
          },
        })
      },
    }),
  }),
)(Index)
