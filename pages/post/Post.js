/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import dynamic from 'next/dynamic'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { Label, Divider } from 'semantic-ui-react'
import Body from './Body'

const DisqusThread = dynamic(import('react-disqus-comments'), { ssr: false })

export default class Post extends React.PureComponent {
  render() {
    const { post, preview } = this.props
    const date = preview
      ? format(parse(new Date()), 'YYYY-MM-DD')
      : format(parse(post.createdDate), 'YYYY-MM-DD')
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
        <Body preview={preview}>{this.props.post.body}</Body>
        {!preview && (
          <DisqusThread
            shortname="ololos"
            identifier={post.verboseId}
            title={post.title}
          />
        )}
      </article>
    )
  }
}
