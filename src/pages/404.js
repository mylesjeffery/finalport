import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function NotFound() {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page not found</h1>
      <Link to="/">Head home</Link>
    </Layout>
  )
}
