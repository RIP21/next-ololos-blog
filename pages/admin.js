import React from "react";
import Layout from "../components/Layout";
import { Table } from "semantic-ui-react";

const Admin = () => {
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
          <Table.Row>
            <Table.Cell>milan</Table.Cell>
            <Table.Cell>
              <a href="/post/milan">Милан</a>
            </Table.Cell>
            <Table.Cell>Лина Олейник</Table.Cell>
            <Table.Cell>сб, 24 июня 2017 г., 15:25</Table.Cell>
            <Table.Cell positive>Опубликован</Table.Cell>
            <Table.Cell>
              <a href="/admin/edit/post/poccuoli">Редактировать</a>
            </Table.Cell>
            <Table.Cell>
              <a href="/delete">Удалить</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>milan</Table.Cell>
            <Table.Cell>
              <a href="/post/milan">Милан</a>
            </Table.Cell>
            <Table.Cell>Лина Олейник</Table.Cell>
            <Table.Cell>сб, 24 июня 2017 г., 15:25</Table.Cell>
            <Table.Cell positive>Опубликован</Table.Cell>
            <Table.Cell>
              <a href="/admin/edit/post/poccuoli">Редактировать</a>
            </Table.Cell>
            <Table.Cell>
              <a href="/delete">Удалить</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>milan</Table.Cell>
            <Table.Cell>
              <a href="/post/milan">Милан</a>
            </Table.Cell>
            <Table.Cell>Лина Олейник</Table.Cell>
            <Table.Cell>сб, 24 июня 2017 г., 15:25</Table.Cell>
            <Table.Cell negative>Не опубликован</Table.Cell>
            <Table.Cell>
              <a href="/admin/edit/post/poccuoli">Редактировать</a>
            </Table.Cell>
            <Table.Cell>
              <a href="/delete">Удалить</a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Layout>
  );
};

export default Admin;
