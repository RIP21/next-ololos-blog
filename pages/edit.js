import React from "react";
import Layout from "../components/Layout";
import { Form } from "semantic-ui-react";

const Edit = () => {
  return (
    <Layout title="Редактировать" text={false}>
      <Form>
        <h1>Редактировать пост</h1>
        <Form.Input
          name="title"
          label="Заголовок"
          placeholder="Введите заголовок"
        />
        <Form.Input
          name="previewPic"
          label="Превью картинка"
          placeholder="Ссылка на фотографию. Будет показана на главной странице."
        />
        <Form.Checkbox name="published" checked label="Опубликован" />
        <Form.TextArea />
        <Form.TextArea />
        <Form.Button>Сохранить</Form.Button>
      </Form>
    </Layout>
  );
};

export default Edit;
