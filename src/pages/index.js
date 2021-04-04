import React, { useState } from 'react'

import { Layout, Head, Tags, Posts } from '../components'

export default function Home() {
  const [filter, setFilter] = useState([])

  function addTag(tag) {
    const newFilter = [...filter]
    newFilter.push(tag)
    setFilter(newFilter)
  }
  function removeTag(tag) {
    let newFilter = [...filter]
    newFilter = newFilter.filter(t => t !== tag)
    setFilter(newFilter)
  }

  return (
    <Layout>
      <Head title="Home" />
      <Tags
        filter={filter}
        setFilter={setFilter}
        addTag={addTag}
        removeTag={removeTag}
      />
      <Posts filter={filter} />
    </Layout>
  )
}
