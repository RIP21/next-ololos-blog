import React from 'react'
import PT from 'prop-types'
import nameToProp from 'apollo/helpers/nameToProp'
import { CloseModal, GetModal } from 'apollo/local/modal'
import { graphql, compose } from 'react-apollo'
import { Modal as SModal, Header, Button, Icon } from 'semantic-ui-react'
import get from 'lodash/get'

const TYPES = {
  success: {
    icon: 'checkmark',
    content: 'Успешно',
    color: 'green',
  },
  error: {
    icon: 'remove',
    content: 'Ошибка',
    color: 'red',
  },
}

class Modal extends React.PureComponent {
  render() {
    const { onModalClose } = this.props

    const type = TYPES[this.props.modal.type]

    return (
      <SModal basic open={this.props.modal.isOpen} onClose={onModalClose}>
        <Header icon={get(type, 'icon')} content={get(type, 'content')} />
        <SModal.Content>
          <p>{this.props.modal.message}</p>
        </SModal.Content>
        <SModal.Actions>
          <Button onClick={onModalClose} basic color={get(type, 'color')} inverted>
            <Icon name={get(type, 'icon')} /> Окей
          </Button>
        </SModal.Actions>
      </SModal>
    )
  }
}

Modal.defaultProps = {
  modal: {
    isOpen: false,
    message: '',
    type: '',
  },
}

Modal.propTypes = {
  onModalClose: PT.func.isRequired,
  modal: PT.shape({
    isOpen: PT.bool,
    message: PT.string,
    type: PT.string,
  }),
}

export default compose(
  graphql(GetModal, nameToProp('modal', 'modal')),
  graphql(CloseModal, {
    name: 'onModalClose',
  }),
)(Modal)
