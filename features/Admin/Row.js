import React, { PureComponent } from 'react'
import { Table } from 'semantic-ui-react'
import Link from 'next/link'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'

class Row extends PureComponent {
  onDelete = e => {
    e.preventDefault()
    this.props.onDelete(this.props.post.id)
  }

  render() {
    const { post } = this.props
    const { published } = post
    return (
      <Table.Row>
        <Table.Cell>{post.postVerboseId}</Table.Cell>
        <Table.Cell>
          <Link href={`/post?id=${post.postVerboseId}`} as={`post/${post.postVerboseId}`}>
            <a>{post.title}</a>
          </Link>
        </Table.Cell>
        <Table.Cell>{post.author.name}</Table.Cell>
        <Table.Cell>
          {format(parse(post.createdDate), 'DD MMMM YYYY HH:mm:ss', { locale: ru })}
        </Table.Cell>
        <Table.Cell positive={published} negative={!published}>
          {published ? 'Опубликован' : 'Не опубликован'}
        </Table.Cell>
        <Table.Cell>
          <Link
            href={`/edit?id=${post.postVerboseId}`}
            as={`/admin/edit/post/${post.postVerboseId}`}
          >
            <a>Редактировать</a>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <button onClick={this.onDelete}>Удалить</button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Row
