import initStore from 'redux/store'
import withStore from 'next-redux-wrapper'

const withRedux = (mapStateToProps = null, mapDispatchToProps = {}) =>
  withStore(initStore, mapStateToProps, mapDispatchToProps)

export default withRedux
