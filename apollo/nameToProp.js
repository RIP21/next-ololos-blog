const nameToProp = (name, queryName) => ({
  name,
  props: props => ({ [name]: props[name][queryName], loading: props.loading }),
})

export default nameToProp
