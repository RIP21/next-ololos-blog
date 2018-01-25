/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { Label, Divider } from 'semantic-ui-react'
import { renderPost } from 'pages/post/renderPost'

const DisqusThread = dynamic(import('react-disqus-comments'), { ssr: false })

export default class Post extends React.PureComponent {
  render() {
    const { post } = this.props
    const date = format(parse(post.createdDate), 'YYYY-MM-DD')
    return (
      <article>
        <header>
          <h1>{post.title}</h1>
          <Label size="mini" as="label" image>
            {post.author.name}
            <Label.Detail dateTime={date} as="time">
              {date}
            </Label.Detail>
          </Label>
          <br />
        </header>
        <Divider />
        <PostContainer>{renderPost(this.props.post.body)}</PostContainer>
        <DisqusThread shortname="ololos" identifier={post.verboseId} title={post.title} />
      </article>
    )
  }
}

const PostContainer = styled.div`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1em auto;
  }
`
