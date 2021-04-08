import React from 'react'

import { Layout, Head, Howdy, Work, About } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <Howdy />
      <Work />
      <About />
    </Layout>
  )
}
