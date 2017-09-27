import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Remarkable from 'remarkable'
import moment from 'moment'
import { Label, Divider } from 'semantic-ui-react'

const DisqusThread = dynamic(import('react-disqus-comments'), { ssr: false })

export default class Post extends React.PureComponent {
  render() {
    const { post } = this.props
    const date = moment(post.postdate).format('YYYY-MM-DD HH:mm')
    return (
      <article>
        <header>
          <h1>{post.title}</h1>

          <Label as="label" color="teal" image>
            {post.author.authorName}
            <Label.Detail dateTime={date} as="time">
              {date}
            </Label.Detail>
          </Label>
          <br />
        </header>
        <Divider />
        <PostContainer
          dangerouslySetInnerHTML={{
            __html: new Remarkable({
              html: true,
              linkify: true,
              typographer: true,
            }).render(post.body),
          }}
        />

        <DisqusThread
          shortname="ololos"
          identifier={post.id}
          title={post.title}
        />
      </article>
    )
  }
}

const PostContainer = styled('div')`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1em auto;
  }
`
