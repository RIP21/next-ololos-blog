import React from 'react'
import Layout from 'components/Layout'
import { Embed } from 'semantic-ui-react'
import { withAuth, withRedux } from '../helpers'

const Map = () => (
  <Layout title="Карта" text={false}>
    <Embed
      defaultActive
      url="https://www.google.com/maps/d/embed?mid=1oQveffNMOrU4EgIiceq6b4p85Vs"
    />
  </Layout>
)

Map.getInitialProps = async function getInitialProps(context) {
  await withAuth(context)
}

export default withRedux()(Map)
