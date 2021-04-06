import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  margin-top: -2.5rem;
  margin-bottom: 2rem;
  li {
    margin-right: 1.3rem;
  }
  button {
    color: #999999;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    &:hover {
      color: #666666;
    }
    :active,
    :focus {
      outline: 0;
    }
  }
  .active {
    color: #000000;
    &:hover {
      color: #000000;
    }
  }
`

export default function Tags({ filter, setFilter, addTag, removeTag }) {
  const data = useStaticQuery(graphql`
    query {
      adminYaml {
        collections {
          fields {
            options
          }
        }
      }
    }
  `)
  return (
    <TagsList>
      <li>
        {filter.length === 0 ? (
          <button className="active" style={{ cursor: 'default' }}>
            All
          </button>
        ) : (
          <button onClick={() => setFilter([])}>All</button>
        )}
      </li>
      {data.adminYaml.collections[0].fields[1].options.map(tag => (
        <li>
          {filter.includes(tag) ? (
            <button onClick={() => removeTag(tag)} className="active">
              {tag}
            </button>
          ) : (
            <button onClick={() => addTag(tag)}>{tag}</button>
          )}
        </li>
      ))}
    </TagsList>
  )
}
