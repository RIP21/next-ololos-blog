import React from 'react'
//import dynamic from 'next/dynamic'
import Layout from 'components/Layout'
import { Form, Header, Checkbox } from 'semantic-ui-react'
//const ClientQuill = dynamic(import('react-quill'), { ssr: false })

export const EMPTY_AUTHOR = { id: '', authorName: '' }
export const EMPTY_POST = {
  id: '',
  title: '',
  author: EMPTY_AUTHOR,
  body: '',
  description: '',
  previewPic: '',
  postdate: '',
  editDate: '',
  published: false,
}

class Edit extends React.Component {
  constructor(props) {
    super(props)
    const fields = props.post ? props.post : EMPTY_POST
    this.state = {
      messages: props.postId
        ? {
            title: 'Редактировать',
            button: 'Сохранить',
          }
        : {
            title: 'Создать',
            button: 'Создать',
          },
      ...fields,
    }
  }

  onChange = (e, { value }) => {
    this.setState({ [e.target.name]: value })
  }

  onCheckboxToggle = () => {
    this.setState(prevState => ({ published: !prevState.published }))
  }

  render() {
    const { messages } = this.state
    return (
      <Layout title={messages.title} text={false}>
        <Form>
          <h1>{messages.title} пост</h1>
          <Form.Input
            name="title"
            label="Заголовок"
            placeholder="Введите заголовок"
            value={this.state.title}
            onChange={this.onChange}
          />
          <Form.Input
            name="previewPic"
            label="Превью картинка"
            placeholder="Ссылка на фотографию. Будет показана на главной странице."
            value={this.state.previewPic}
            onChange={this.onChange}
          />
          <Checkbox
            id="published"
            checked={this.state.published}
            label="Опубликован"
            onChange={this.onCheckboxToggle}
          />
          <Header as="h5">Короткое описание</Header>
          <textarea
            name="description"
            value={this.state.description}
            //theme="snow"
            onChange={this.onChange}
          />
          <br />
          <textarea
            name="body"
            value={this.state.body}
            //theme="snow"
            onChange={this.onChange}
          />
          <br />
          <Form.Button>{messages.button}</Form.Button>
        </Form>
      </Layout>
    )
  }
}

export default Edit
