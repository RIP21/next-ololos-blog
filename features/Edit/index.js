import { nameToProp } from 'apollo'
import { AdminPostsQuery } from 'pages/admin'
import React from 'react'
import Layout from 'components/Layout'
import { Form, Header, Checkbox } from 'semantic-ui-react'
import SimpleMDE from 'react-simplemde-editor'
import Router from 'next/router'
import cloneDeep from 'lodash/cloneDeep'
import map from 'lodash/map'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

function transliterate(text) {
  return text
    .trim()
    .replace(/\u0401/g, 'YO')
    .replace(/\u0419/g, 'I')
    .replace(/\u0426/g, 'TS')
    .replace(/\u0423/g, 'U')
    .replace(/\u041A/g, 'K')
    .replace(/\u0415/g, 'E')
    .replace(/\u041D/g, 'N')
    .replace(/\u0413/g, 'G')
    .replace(/\u0428/g, 'SH')
    .replace(/\u0429/g, 'SCH')
    .replace(/\u0417/g, 'Z')
    .replace(/\u0425/g, 'H')
    .replace(/\u042A/g, '')
    .replace(/\u0451/g, 'yo')
    .replace(/\u0439/g, 'i')
    .replace(/\u0446/g, 'ts')
    .replace(/\u0443/g, 'u')
    .replace(/\u043A/g, 'k')
    .replace(/\u0435/g, 'e')
    .replace(/\u043D/g, 'n')
    .replace(/\u0433/g, 'g')
    .replace(/\u0448/g, 'sh')
    .replace(/\u0449/g, 'sch')
    .replace(/\u0437/g, 'z')
    .replace(/\u0445/g, 'h')
    .replace(/\u044A/g, "'")
    .replace(/\u0424/g, 'F')
    .replace(/\u042B/g, 'I')
    .replace(/\u0412/g, 'V')
    .replace(/\u0410/g, 'a')
    .replace(/\u041F/g, 'P')
    .replace(/\u0420/g, 'R')
    .replace(/\u041E/g, 'O')
    .replace(/\u041B/g, 'L')
    .replace(/\u0414/g, 'D')
    .replace(/\u0416/g, 'ZH')
    .replace(/\u042D/g, 'E')
    .replace(/\u0444/g, 'f')
    .replace(/\u044B/g, 'i')
    .replace(/\u0432/g, 'v')
    .replace(/\u0430/g, 'a')
    .replace(/\u043F/g, 'p')
    .replace(/\u0440/g, 'r')
    .replace(/\u043E/g, 'o')
    .replace(/\u043B/g, 'l')
    .replace(/\u0434/g, 'd')
    .replace(/\u0436/g, 'zh')
    .replace(/\u044D/g, 'e')
    .replace(/\u042F/g, 'Ya')
    .replace(/\u0427/g, 'CH')
    .replace(/\u0421/g, 'S')
    .replace(/\u041C/g, 'M')
    .replace(/\u0418/g, 'I')
    .replace(/\u0422/g, 'T')
    .replace(/\u042C/g, "'")
    .replace(/\u0411/g, 'B')
    .replace(/\u042E/g, 'YU')
    .replace(/\u044F/g, 'ya')
    .replace(/\u0447/g, 'ch')
    .replace(/\u0441/g, 's')
    .replace(/\u043C/g, 'm')
    .replace(/\u0438/g, 'i')
    .replace(/\u0442/g, 't')
    .replace(/\u044C/g, "'")
    .replace(/\u0431/g, 'b')
    .replace(/\u044E/g, 'yu')
    .replace(/\W/g, '-')
}

export const EMPTY_AUTHOR = { id: '', name: '' }
export const EMPTY_POST = {
  postVerboseId: '',
  title: '',
  author: EMPTY_AUTHOR,
  body: '',
  description: '',
  previewPic: '',
  createdDate: '',
  updatedDate: '',
  published: false,
}

class Edit extends React.Component {
  constructor(props) {
    super(props)
    // Couldn't be an empty author since there is no possibility to access this page without login
    const author = props.post && props.post.author ? props.post.author : props.author
    const fields = props.post ? { ...props.post, author } : { ...EMPTY_POST, author }
    this.state = {
      messages: props.postVerboseId
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

  componentWillReceiveProps(nextProps) {
    const author =
      nextProps.post && nextProps.post.author ? nextProps.post.author : nextProps.author
    const fields = nextProps.post
      ? { ...nextProps.post, author }
      : { ...EMPTY_POST, author }
    this.setState({ ...fields })
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

  onPostSave = () => {
    // eslint-disable-next-line no-unused-vars
    const { messages, ...post } = this.state
    const clonedPost = cloneDeep(post)
    this.updateOrCreate(clonedPost).then(() => {
      Router.push('/admin', '/admin/posts')
    })
  }

  updateOrCreate = post => {
    if (post.title) {
      const { onCreateOrUpdatePost } = this.props
      const today = new Date()
      const authorId = post.author.id.slice()
      if (post.id) {
        return onCreateOrUpdatePost({
          ...post,
          updatedDate: today,
          authorId,
        })
      }
      const postVerboseId = transliterate(post.title)
      return onCreateOrUpdatePost({
        ...post,
        authorId,
        postVerboseId,
        createdDate: today,
        updatedDate: today,
        url: `/${postVerboseId}`,
      })
    }
    // eslint-disable-next-line no-alert
    alert('Пожалуйста, заполни заголовок. Спасибо :*')
    return new Error('Пожалуйста, заполни заголовок. Спасибо :*')
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
            autoComplete="off"
          />
          <Form.Input
            name="previewPic"
            label="Превью картинка"
            placeholder="Ссылка на фотографию. Будет показана на главной странице."
            value={this.state.previewPic}
            onChange={this.onChange}
            autoComplete="off"
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
            id="description"
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
            id="body"
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

const PostEditFieldsFragment = gql`
  fragment PostEditFields on Post {
    id
    body
    createdDate
    postVerboseId
    previewPic
    title
    updatedDate
    published
    description
    url
    tags {
      id
      name
    }
    author {
      id
      name
    }
  }
`

const AllTagsQuery = gql`
  query AllTagsQuery {
    allTags {
      id
      name
    }
  }
`

export default compose(
  graphql(AllTagsQuery, nameToProp('tags', 'allTags')),
  graphql(
    gql`
      mutation($create: CreatePost!, $update: UpdatePost!) {
        updateOrCreatePost(create: $create, update: $update) {
          ...PostEditFields
        }
      }
      ${PostEditFieldsFragment}
    `,
    {
      name: 'updateOrCreatePost',
      props: ({ updateOrCreatePost }) => ({
        onCreateOrUpdatePost: ({ id = '', __typename, ...post }) => {
          /* eslint-disable no-param-reassign */
          post.tagsIds = map(post.tags, tag => tag.id).filter(Boolean)
          delete post.author && delete post.tags
          const create = { ...post }
          const update = { id, ...post }
          /* eslint-enable no-param-reassign */
          return updateOrCreatePost({
            variables: { create, update },
          })
        },
      }),
      options: {
        refetchQueries: ['GetPostToRead', 'LandingPosts'],
        update: (proxy, { data: { updateOrCreatePost } }) => {
          const { allPosts } = proxy.readQuery({ query: AdminPostsQuery })
          const index = allPosts.findIndex(
            adminPost => adminPost.postVerboseId === updateOrCreatePost.postVerboseId,
          )
          if (index >= 0) {
            allPosts[index] = updateOrCreatePost
          } else {
            allPosts.unshift(updateOrCreatePost)
          }
          proxy.writeQuery({ query: AdminPostsQuery, data: { allPosts } })
        },
      },
    },
  ),
)(Edit)
