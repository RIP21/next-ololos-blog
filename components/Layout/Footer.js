import React from 'react'
import styled from 'styled-components'

const Footer = ({ ...rest }) => (
  <footer {...rest}>
    <div>
      <a href="https://github.com/RIP21/ololos-blog-react-redux-universal">
        Source code
      </a>
    </div>
    Made by Andrii Los aka <a href="https://twitter.com/RIP212">@RIP212</a>{' '}
    using nice{' '}
    <a
      href="https://github.com/erikras/react-redux-universal-hot-example/"
      target="_blank"
      rel="noopener noreferrer"
    >
      react-redux-universal-hot-example
    </a>{' '}
    for a base for server-side rendering.
    <div>
      Icons made by{' '}
      <a
        href="http://www.flaticon.com/authors/pixel-buddha"
        title="Pixel Buddha"
      >
        Pixel Buddha{' '}
      </a>
      from{' '}
      <a href="http://www.flaticon.com" title="Flaticon">
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
