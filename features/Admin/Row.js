import React, { PureComponent } from 'react'
import { Table } from 'semantic-ui-react'
import Link from 'next/link'
import moment from 'moment'

moment.locale('ru')

class Row extends PureComponent {
  onDelete = e => {
    e.preventDefault()
    this.props.onDelete(this.props.post.id)
  }

  render() {
    const { post } = this.props
    const published = post.published
    return (
      <Table.Row>
        <Table.Cell>{post.id}</Table.Cell>
        <Table.Cell>
          <Link href={`/post?id=${post.id}`} as={`post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </Table.Cell>
        <Table.Cell>{post.author.authorName}</Table.Cell>
        <Table.Cell>{moment(post.postdate).format('llll')}</Table.Cell>
        <Table.Cell positive={published} negative={!published}>{published ? 'Опубликован' :
          "Не опубликован"}</Table.Cell>
        <Table.Cell>
          <Link href={`/edit?id=${post.id}`} as={`/admin/edit/post/${post.id}`}>
            <a>Редактировать</a>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <a href="#" onClick={this.onDelete}>
            Удалить
          </a>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Row
