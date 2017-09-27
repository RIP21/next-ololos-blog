import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Remarkable from 'remarkable'
import moment from 'moment'
import { Label, Divider } from 'semantic-ui-react'
import Link from 'next/link'

const DisqusThread = dynamic(import('react-disqus-comments'), { ssr: false })

export default class Post extends React.PureComponent {
  render() {
    const { post, isIndex } = this.props
    const date = moment(post.postdate).format('YYYY-MM-DD HH:mm')
    return (
      <article>
        <header>
          {isIndex ? (
            <Link href={`/post?id=${post.id}`} as={`post/${post.id}`}>
              <a>
                <h1>{post.title}</h1>
              </a>
            </Link>
          ) : (
            <h1>{post.title}</h1>
          )}
          <Label as="label" color="teal" image>
            {post.author.authorName}
            <Label.Detail dateTime={date} as="time">
              {date}
            </Label.Detail>
          </Label>
          <br />
        </header>
        {isIndex ? <Img src={post.previewPic} /> : <Divider />}
        {isIndex ? (
          <PostContainer
            dangerouslySetInnerHTML={{
              __html: new Remarkable().render(post.description),
            }}
          />
        ) : (
          <PostContainer
            dangerouslySetInnerHTML={{
              __html: new Remarkable().render(post.body),
            }}
          />
        )}
        {!isIndex && (
          <DisqusThread
            shortname="ololos"
            identifier={post.id}
            title={post.title}
          />
        )}
      </article>
    )
  }
}

const Img = styled.img`
  border-radius: 6px;
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
  margin-bottom: 1em;
`
const PostContainer = styled('div')`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 1em;
  }
`
