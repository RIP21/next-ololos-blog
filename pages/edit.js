import GetPostByVerboseId from 'apollo/graphcool/queries/GetPostByVerboseId'
import PT from 'prop-types'
import checkLoggedIn from 'apollo/helpers/checkLoggedIn'
import dataToProp from 'apollo/helpers/nameToProp'
import redirect from 'helpers/redirect'
import React from 'react'
import Editor from 'pages/edit/Editor'
import get from 'lodash/get'
import withData from 'apollo/hoc/withData'
import { compose, graphql } from 'react-apollo'

class EditPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const user = await checkLoggedIn(context, apolloClient)

    if (!user) {
      redirect(context, '/')
    }

    return { verboseId: get(context.query, 'id'), author: get(user, 'author') }
  }

  render() {
    const { post, ...props } = this.props
    return <Editor post={post} {...props} />
  }
}

EditPage.propTypes = {
  post: PT.object,
}

export default compose(
  withData,
  graphql(GetPostByVerboseId, {
    skip: ownProps => !ownProps.verboseId,
    ...dataToProp('post', 'Post'),
  }),
)(EditPage)
