import checkLoggedIn from 'apollo/checkLoggedIn'
import React from 'react'
import PT from 'prop-types'
import Head from 'next/head'
import { Container, Modal, Header, Button, Icon } from 'semantic-ui-react'
import styled, { injectGlobal } from 'styled-components'
import get from 'lodash/get'
import { withApollo, compose } from 'react-apollo'
import withData from 'apollo/withData'
import Navigation from './Navigation'
import Footer from './Footer'
import { initGA, logPageView } from '../../services/analitycs'

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
  static async getInitialProps(context, apolloClient) {
    const loggedInUser = await checkLoggedIn(context, apolloClient)
    console.log(loggedInUser)
    return { loggedInUser }
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  onModalClose = () => {
    this.props.onModalClose()
  }

  getHead = () => {
    const { meta } = this.props
    const url = get(meta, 'url')
    const description = get(meta, 'description')
    const author = get(meta, 'author')
    const title = get(meta, 'title')
    const image = get(meta, 'image')
    return [
      <link rel="canonical" href={url} />,
      <link rel="author" href="http://ololos.space/" />,
      <meta name="description" content={description} />,
      <meta httpEquiv="Content-Language" content="ru" />,
      <meta charSet="utf-8" />,
      <meta property="article:author" content={author || 'Ололось блог'} />,
      <meta
        property="article:publisher"
        content="https://www.facebook.com/OlolosBlog/"
      />,
      <meta name="twitter:account_id" content="828735737327734788" />,
      <meta name="twitter:card" content="summary_large_image" />,
      <meta name="twitter:site" content="@OlolosBlog" />,
      <meta name="twitter:creator" content="@rip212" />,
      <meta name="twitter:title" content={title} />,
      <meta name="twitter:description" content={description} />,
      <meta name="twitter:image:src" content={image || logo} />,
      <meta name="twitter:image" content={image || logo} />,
      <meta property="og:title" content={title} />,
      <meta property="og:image" content={image || logo} />,
      <meta property="og:description" content={description} />,
      <meta property="og:url" content={url || 'http://ololos.space/'} />,
      <meta property="og:site_name" content="Ололось блог" />,
      <meta property="og:type" content={get(meta, 'type') || 'website'} />,
      <meta property="og:locale" content="ru_RU" />,
      <meta property="fb:app_id" content="966242223397117" />,
    ]
  }

  render() {
    const {
      children,
      title = 'Ололось блог',
      text = true,
      topPadding = '1em',
      as = 'main',
      onLogout = () => ({}),
      loggedInUser,
    } = this.props
    console.log(loggedInUser)
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {this.getHead()}
          <meta name="referrer" content="always" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"
          />
        </Head>
        <header>
          <Navigation text={text} isAuthenticated={!!loggedInUser} onLogout={onLogout} />
        </header>
        <ContentContainer as={as} topPadding={topPadding} text={text}>
          {children}
        </ContentContainer>
        <Footer />
        {/* <Modal basic open={this.props.isOpen} onClose={this.onModalClose}> */}
        {/* <Header icon="remove" content="Error" /> */}
        {/* <Modal.Content> */}
        {/* <p>{this.props.error}</p> */}
        {/* </Modal.Content> */}
        {/* <Modal.Actions> */}
        {/* <Button onClick={this.onModalClose} basic color="red" inverted> */}
        {/* <Icon name="remove" /> Okay */}
        {/* </Button> */}
        {/* </Modal.Actions> */}
        {/* </Modal> */}
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
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
)(Layout)
