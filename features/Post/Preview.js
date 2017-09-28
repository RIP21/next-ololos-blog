import React from 'react'
import styled from 'styled-components'
import Remarkable from 'remarkable'
import moment from 'moment'
import { Label, Divider, Button } from 'semantic-ui-react'
import Link from 'next/link'

export default class Preview extends React.PureComponent {
  render() {
    const { post } = this.props
    const date = moment(post.postdate).format('YYYY-MM-DD HH:mm')
    return (
      <article>
        <header>
          <H1>
            <Link href={`/post?id=${post.id}`} as={`post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </H1>
          <Label size="mini" as="label" image>
            {post.author.authorName}
            <Label.Detail dateTime={date} as="time">
              {date}
            </Label.Detail>
          </Label>
        </header>
        <Img src={post.previewPic} />
        <div
          dangerouslySetInnerHTML={{
            __html: new Remarkable({
              html: true,
              linkify: true,
              typographer: true,
            }).render(post.description),
          }}
        />
        <Flex>
          <Link href={`/post?id=${post.id}`} as={`post/${post.id}`}>
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
