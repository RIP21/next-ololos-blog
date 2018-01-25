import withData from 'apollo/hoc/withData'
import React from 'react'
import Layout from 'components/Layout'
import { Embed } from 'semantic-ui-react'

const MapPage = () => (
  <Layout title="Карта" text={false}>
    <Embed
      defaultActive
      url="https://www.google.com/maps/d/embed?mid=1oQveffNMOrU4EgIiceq6b4p85Vs"
    />
  </Layout>
)

export default withData(MapPage)
