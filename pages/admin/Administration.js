import React from 'react'
import Layout from 'components/Layout/index'
import { Table, Button } from 'semantic-ui-react'
import Router from 'next/router'
import map from 'lodash/map'
import Row from './Row'

class Administration extends React.PureComponent {
  onCreateClick = () => {
    Router.push('/edit', '/admin/create/post')
  }

  render() {
    return (
      <Layout title="Администрация постов" text={false}>
        <Table selectable compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Заголовок</Table.HeaderCell>
              <Table.HeaderCell>Автор</Table.HeaderCell>
              <Table.HeaderCell>Дата публикации</Table.HeaderCell>
              <Table.HeaderCell>Теги</Table.HeaderCell>
              <Table.HeaderCell width={1} textAlign="center">
                Статус
              </Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
              <Table.HeaderCell>&nbsp;</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(this.props.posts, post => (
              <Row key={post.verboseId} post={post} onDelete={this.props.onPostDelete} />
            ))}
          </Table.Body>
        </Table>
        <Button onClick={this.onCreateClick}> Создать </Button>
      </Layout>
    )
  }
}

export default Administration
