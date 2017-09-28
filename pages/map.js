import React from 'react'
import Layout from 'components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import { Embed } from 'semantic-ui-react'

const Map = () => (
  <Layout title="Карта" text={false}>
    <Embed
      defaultActive
      url="https://www.google.com/maps/d/embed?mid=1oQveffNMOrU4EgIiceq6b4p85Vs"
    />
  </Layout>
)

export default withRedux(initStore, null)(Map)
