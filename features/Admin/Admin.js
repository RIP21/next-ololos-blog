import React from 'react'
import Layout from 'components/Layout'
import { Table, Button } from 'semantic-ui-react'
import Router from 'next/router'
import map from 'lodash/map'
import Row from './Row'

class Admin extends React.PureComponent {
  onCreateClick = () => {
    Router.push('/edit', '/admin/create/post')
  }

  render() {
    return (
      <Layout title="Администрация постов" text={false}>
        <Table selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Заголовок</Table.HeaderCell>
              <Table.HeaderCell>Автор</Table.HeaderCell>
              <Table.HeaderCell>Дата публикации</Table.HeaderCell>
              <Table.HeaderCell>Статус</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(this.props.posts, post => (
              <Row key={post.id} post={post} onDelete={this.props.onDelete} />
            ))}
          </Table.Body>
        </Table>
        <Button onClick={this.onCreateClick}> Создать </Button>
      </Layout>
    )
  }
}

export default Admin
