/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Remarkable from 'remarkable'
import Lazyload from 'react-lazyload'
import { Embed } from 'semantic-ui-react'

const renderMarkdownAndReplaceLinks = markdown => {
  const source = new Remarkable({
    html: true,
    linkify: true,
    typographer: true,
  }).render(markdown)
  const re = new RegExp('<a>', 'g')
  const re2 = new RegExp('<a ', 'g')
  const result = source
    .replace(re2, '<a target="_blank" rel="noopener noreferrer"')
    .replace(re, '<a target="_blank" rel="noopener noreferrer"')
  return result
}

export const renderPost = markdown =>
  ReactHtmlParser(renderMarkdownAndReplaceLinks(markdown), {
    transform: node => {
      if (node.name === 'img') {
        return (
          <Lazyload height={700} offset={200} once>
            <img {...node.attribs} />
          </Lazyload>
        )
      }
      if (node.name === 'iframe') {
        return <Embed defaultActive url={node.attribs.src} />
      }
      return undefined
    },
  })
