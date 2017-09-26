import React from 'react'
import dynamic from 'next/dynamic'
import Layout from 'components/Layout'
import { Form, Header } from 'semantic-ui-react'
const ClientQuill = dynamic(import('react-quill'), { ssr: false })

class Edit extends React.Component {
  render() {
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
          <Header as="h5">Короткое описание</Header>
          <ClientQuill theme="snow" />
          <br />
          <ClientQuill theme="snow" />
          <br />
          <Form.Button>Сохранить</Form.Button>
        </Form>
      </Layout>
    )
  }
}

export default Edit
