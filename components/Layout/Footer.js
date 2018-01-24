import React from 'react'
import styled from 'styled-components'

const Footer = ({ ...rest }) => (
  <footer {...rest}>
    <img
      src="https://www.graph.cool/static/media/badge.2cbac90a.svg"
      alt="Powered by Graphcool"
    />
    <div>
      {/* <a */}
      {/* target="_blank" */}
      {/* href="https://github.com/RIP21/ololos-blog-react-redux-universal/tree/master/backend" */}
      {/* rel="noopener noreferrer" */}
      {/* > */}
      {/* Backend Code */}
      {/* </a>{' '} */}
      {/* |{' '} */}
      <a
        target="_blank"
        href="https://github.com/RIP21/next-ololos-blog"
        rel="noopener noreferrer"
      >
        Frontend Code
      </a>
    </div>
    Made by Andrii Los aka{' '}
    <a target="_blank" href="https://twitter.com/RIP212" rel="noopener noreferrer">
      @RIP212
    </a>{' '}
    using amazing{' '}
    <a href="https://github.com/zeit/next.js" target="_blank" rel="noopener noreferrer">
      next.js{' '}
    </a>,{' '}
    <a href="https://www.apollographql.com/" target="_blank" rel="noopener noreferrer">
      apollo
    </a>{' '}
    and{' '}
    <a href="https://www.graph.cool/" target="_blank" rel="noopener noreferrer">
      graphcool
    </a>
    <div>
      Icons made by{' '}
      <a
        href="http://www.flaticon.com/authors/pixel-buddha"
        title="Pixel Buddha"
        rel="noopener noreferrer"
        target="_blank"
      >
        Pixel Buddha{' '}
      </a>
      from{' '}
      <a
        target="_blank"
        href="http://www.flaticon.com"
        rel="noopener noreferrer"
        title="Flaticon"
      >
        www.flaticon.com
      </a>{' '}
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        rel="noopener noreferrer"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </div>
  </footer>
)

export default styled(Footer)`
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  text-align: center;
`
