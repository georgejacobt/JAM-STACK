import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World of Gatsby!</h1>
    <p>
      I am a recent full stack bootcamp garduate and looking to further hone my
      coding and get to know more of you!
    </p>
    <p>Excited to be here!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
