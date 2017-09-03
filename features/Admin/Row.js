import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";

class Row extends PureComponent {
  render() {
    return (
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
    );
  }
}

export default Row;
