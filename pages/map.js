import React from 'react'
import Layout from 'components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'

const Map = () => (
  <Layout title="Карта" text={false}>
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1oQveffNMOrU4EgIiceq6b4p85Vs"
      width="1125"
      height="1080"
    />
  </Layout>
)

export default withRedux(initStore, null)(Map)
