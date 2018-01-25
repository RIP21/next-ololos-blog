const nameToProp = (name, queryName, customLoadingPropName = 'loading') => ({
  name,
  props: props => ({
    [name]: props[name][queryName],
    [customLoadingPropName]: props.loading,
  }),
})

export default nameToProp
