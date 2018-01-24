import React, { PureComponent } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Router from 'next/router'
import Link from 'next/link'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import get from 'lodash/get'

class Row extends PureComponent {
  onDelete = e => {
    e.preventDefault()
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены, что хотите удалить пост?')) {
      this.props.onDelete(this.props.post.id)
    }
  }

  onEdit = () => {
    Router.push(
      `/edit?id=${this.props.post.postVerboseId}`,
      `/admin/edit/post/${this.props.post.postVerboseId}`,
    )
  }

  render() {
    const { post } = this.props
    const { published } = post
    return (
      <Table.Row>
        <Table.Cell>{post.postVerboseId}</Table.Cell>
        <Table.Cell>
          <Link
            href={`/post?id=${post.postVerboseId}`}
            as={`/post/${post.postVerboseId}`}
          >
            <a>{post.title}</a>
          </Link>
        </Table.Cell>
        <Table.Cell>{post.author.name}</Table.Cell>
        <Table.Cell>
          {format(parse(post.createdDate), 'DD MMMM YYYY HH:mm:ss', { locale: ru })}
        </Table.Cell>
        <Table.Cell>
          {get(post, 'tags')
            .map(tag => tag.name)
            .join(', ')}
        </Table.Cell>
        <Table.Cell
          style={{ fontSize: 25 }}
          icon={published ? 'check circle' : 'remove circle'}
          positive={published}
          negative={!published}
          vericalAlign="middle"
          textAlign="center"
        />
        <Table.Cell
          style={{ fontSize: 25, cursor: 'pointer' }}
          icon="edit"
          onClick={this.onEdit}
        />
        <Table.Cell>
          <Button basic color="red" onClick={this.onDelete}>
            Удалить
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Row
