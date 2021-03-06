import Body from 'pages/post/Body'
import React from 'react'
import styled from 'styled-components'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { Label, Divider, Button } from 'semantic-ui-react'
import Link from 'next/link'
import Lazyload from 'react-lazyload'

export default class Preview extends React.PureComponent {
  render() {
    const { post, preview } = this.props
    const date = preview
      ? format(new Date(), 'YYYY-MM-DD')
      : format(parse(post.createdDate), 'YYYY-MM-DD')
    return (
      <article>
        <header>
          <H1>
            <Link href={`/post?id=${post.verboseId}`} as={`post/${post.verboseId}`}>
              <a>{post.title}</a>
            </Link>
          </H1>
          <Label size="mini" as="label" image>
            {post.author.name}
            <Label.Detail dateTime={date} as="time">
              {date}
            </Label.Detail>
          </Label>
        </header>
        {preview ? (
          <Img src={post.previewPic} />
        ) : (
          <Lazyload height={700} offset={500} once>
            <Img src={post.previewPic} />
          </Lazyload>
        )}
        <Body preview={preview}>{post.description}</Body>
        <Flex>
          <Link href={`/post?id=${post.verboseId}`} as={`post/${post.verboseId}`}>
            <a>
              <Button basic size="medium" color="grey">
                Читать далее
              </Button>
            </a>
          </Link>
        </Flex>
        <Divider />
      </article>
    )
  }
}

const H1 = styled.h1`
  color: #4183c4;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1e70bf;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0.5em;
`

const Img = styled.img`
  border-radius: 6px;
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1em auto;
`
