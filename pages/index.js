import { withAuth, withData } from 'apollo'
import withLanguage from 'apollo/hoc/withLanguage'
import React from 'react'
import Layout from 'components/Layout'
import { Button, Message, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Preview from './post/Preview'

const locale = {
  EN: {
    noPosts: 'Oops. Nothing there, yet',
    noFetch: 'There is nothing left to load',
    title: 'Ololos blog',
    description: 'Travel archive. Third planet from the Sun.',
    loadMore: 'Load more...',
  },
  RU: {
    noPosts: 'Ой. Здесь пока ничего нет',
    noFetch: 'Больше загрузить нечего',
    title: 'Ололось блог',
    description: 'Архив путешествий. Третья от Солнца планета.',
    loadMore: 'Загрузить еще...',
  },
}

class Index extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    numberOfPosts: 0,
    showFetchMore: true,
  }

  static getDerivedStateFromProps(props, state) {
    const numBefore = state.numberOfPosts
    const numAfter = get(props.posts, 'length')
    if (numBefore < numAfter) {
      if ((numAfter - numBefore) % 5 !== 0) {
        return { showFetchMore: false, numberOfPosts: numAfter }
      }
      return { showFetchMore: true, numberOfPosts: numAfter }
    }
    return null
  }

  getMeta = () => {
    const { language } = this.props
    return {
      title: locale[language].title,
      description: locale[language].description,
    }
  }

  MainThread = () => {
    const { language, loading } = this.props
    const numberOfPosts = get(this.props.posts, 'length')
    if (numberOfPosts === 0 || !numberOfPosts) {
      return (
        <Dimmer.Dimmable>
          <Dimmer active={loading} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
          <Message>{locale[language].noPosts} ¯\_(ツ)_/¯</Message>
        </Dimmer.Dimmable>
      )
    }
    return (
      <Dimmer.Dimmable>
        <Dimmer active={loading} inverted>
          <Loader>Loading</Loader>
        </Dimmer>
        <Thread>
          {map(this.props.posts, post => <Preview key={post.verboseId} post={post} />)}
        </Thread>
        <Center>
          {this.state.showFetchMore ? (
            <Button onClick={this.props.loadMoreEntries}>
              {locale[language].loadMore}
            </Button>
          ) : (
            <Message>
              {locale[language].noFetch}{' '}
              <span role="img" aria-label="thinking emoji">
                🤔
              </span>
            </Message>
          )}
        </Center>
      </Dimmer.Dimmable>
    )
  }

  render() {
    const { MainThread } = this
    const { language } = this.props

    return (
      <Layout topPadding="0em" meta={this.getMeta()}>
        <Masthead>
          <Logo>
            <p>
              <img alt="logo" src="/static/logo.png" />
            </p>
          </Logo>
          <h1>{locale[language].title}</h1>
          <h2>{locale[language].description}</h2>
        </Masthead>
        <MainThread />
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
  background-image: url('/static/cover8.jpg');
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
  query LandingPosts($skip: Int, $language: Language = RU) {
    allPosts(
      orderBy: createdDate_DESC
      first: 5
      filter: { published: true, language: $language }
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
  withLanguage,
  graphql(LandingPostsQuery, {
    props: ({
      data: { loading, allPosts, fetchMore, ...stuff },
      ownProps: { language },
    }) => ({
      loading,
      posts: allPosts,
      loadMoreEntries() {
        return fetchMore({
          // query: ... (you can specify a different query. LandingPostsQuery is used by default)
          variables: {
            // We are able to figure out which offset to use because it matches
            // the feed length, but we could also use state, or the previous
            // variables to calculate this (see the cursor example below)
            language,
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
