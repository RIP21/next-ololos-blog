import React from 'react'
import PT from 'prop-types'

import { renderPost } from 'pages/post/renderPost'
import styled from 'styled-components'

const PostContainer = styled.div`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1em auto;
  }
`

const Body = ({ children }) => <PostContainer>{renderPost(children)}</PostContainer>

Body.propTypes = {
  children: PT.string.isRequired,
}

export default Body
