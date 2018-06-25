import Modal from 'components/Layout/Modal'
import redirect from 'helpers/redirect'
import withAuth from 'apollo/hoc/withAuth'
import cookie from 'cookie'
import React from 'react'
import PT from 'prop-types'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import styled, { injectGlobal } from 'styled-components'
import get from 'lodash/get'
import { withApollo, compose } from 'react-apollo'
import Navigation from './Navigation'
import Footer from './Footer'
import { initGA, logPageView } from '../../integraions/analitycs'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    overflow-y: scroll;
  }`

const logo =
  process.env.NODE_ENV === 'development'
    ? 'static/logo.png'
    : 'http://ololos.space/static/logo.png'

class Layout extends React.PureComponent {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  onLogout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1, // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    this.props.client.resetStore().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/')
    })
  }

  getHead = () => {
    const { meta } = this.props
    const url = get(meta, 'url')
    const description = get(meta, 'description')
    const author = get(meta, 'author')
    const title = get(meta, 'title')
    const image = get(meta, 'image')
    return (
      <React.Fragment>
        <link rel="canonical" href={url} />
        <link rel="author" href="http://ololos.space/" />
        <meta name="description" content={description} />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta charSet="utf-8" />
        <meta property="article:author" content={author || 'Ололось блог'} />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/OlolosBlog/"
        />
        <meta name="twitter:account_id" content="828735737327734788" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OlolosBlog" />
        <meta name="twitter:creator" content="@rip212" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={image || logo} />
        <meta name="twitter:image" content={image || logo} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image || logo} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url || 'http://ololos.space/'} />
        <meta property="og:site_name" content="Ололось блог" />
        <meta property="og:type" content={get(meta, 'type') || 'website'} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="fb:app_id" content="966242223397117" />
      </React.Fragment>
    )
  }

  render() {
    const {
      children,
      title = 'Ололось блог',
      text = true,
      topPadding = '1em',
      as = 'main',
      isAuthenticated,
    } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
          {this.getHead()}
        </Head>
        <header>
          <Navigation
            text={text}
            isAuthenticated={isAuthenticated}
            onLogout={this.onLogout}
          />
        </header>
        <ContentContainer as={as} topPadding={topPadding} text={text}>
          {children}
        </ContentContainer>
        <Footer />
        <Modal />
      </div>
    )
  }
}

// prettier-ignore
const ContentContainer = styled(Container)`/* stylelint-disable */
  padding-top: ${p => p.topPadding};
  padding-bottom: 1em;
`

Layout.propTypes = {
  text: PT.bool,
  title: PT.string,
  meta: PT.object,
  topPadding: PT.string,
  as: PT.string,
}

export default compose(
  withAuth,
  withApollo,
)(Layout)
