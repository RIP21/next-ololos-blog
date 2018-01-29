/**
 * @param {string} name - The prop to which result of the query will be mapped.
 * @param {string} queryName - GraphQL Query name to get it from data object.
 * @param {string} customLoadingPropName - Optional parameter to remap loading prop of query too some custom one.
 * */
const nameToProp = (name, queryName, customLoadingPropName = 'loading') => ({
  name,
  props: props => ({
    [name]: props[name][queryName],
    [customLoadingPropName]: props.loading,
  }),
})

export default nameToProp
