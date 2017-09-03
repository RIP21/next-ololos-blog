import React from "react";
import Layout from "components/Layout";
import { Table, Button } from "semantic-ui-react";
import Row from "./Row";

class Admin extends React.PureComponent {
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
            <Row />
          </Table.Body>
        </Table>
        <Button> Создать </Button>
      </Layout>
    );
  }
}

export default Admin;
