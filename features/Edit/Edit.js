import React from 'react'
import Layout from 'components/Layout'
import { Form, Header, Checkbox } from 'semantic-ui-react'
import SimpleMDE from 'react-simplemde-editor'
import Router from 'next/router'
import cloneDeep from 'lodash/cloneDeep'

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
  onEditorChange = field => value => {
    this.setState({ [field]: value })
  }

  onDescriptionChange = this.onEditorChange('description')
  onBodyChange = this.onEditorChange('body')

  onCheckboxToggle = () => {
    this.setState(prevState => ({ published: !prevState.published }))
  }

  updateOrCreate = post => {
    const { onPostCreate, onPostUpdate } = this.props
    if (post.id) {
      return onPostUpdate(post)
    }
    post.author = this.props.author
    return onPostCreate(post)
  }

  onPostSave = () => {
    // eslint-disable-next-line no-unused-vars
    const { messages, ...post } = this.state
    const clonedPost = cloneDeep(post)
    this.updateOrCreate(clonedPost).then(() => {
      Router.push('/admin', '/admin/posts')
    })
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
          <SimpleMDE
            className="description"
            id={`description`}
            value={this.state.description}
            name="description"
            onChange={this.onDescriptionChange}
            options={{
              placeholder:
                'Введите короткое описание {Markdown синтаксис поддерживается}',
              spellChecker: false,
              toolbar: ['bold'],
              hideIcons: ['bold'],
              status: false,
            }}
          />
          <Header as="h4">Пост</Header>
          <SimpleMDE
            id={`body`}
            onChange={this.onBodyChange}
            value={this.state.body}
            name="body"
            options={{
              spellChecker: false,
              toolbar: [
                'bold',
                'italic',
                'strikethrough',
                '|',
                'heading-1',
                'heading-2',
                'heading-3',
                '|',
                'heading-smaller',
                'heading-bigger',
                '|',
                'code',
                'quote',
                'unordered-list',
                'ordered-list',
                'link',
                'image',
                '|',
                'table',
                'horizontal-rule',
                '|',
                'preview',
                '|',
                'guide',
              ],
            }}
          />

          <Form.Button onClick={this.onPostSave}>{messages.button}</Form.Button>
        </Form>
      </Layout>
    )
  }
}

export default Edit
