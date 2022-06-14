import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './list.module.less'
export default function List({ data }) {
  const arr = data.allDbJson.nodes
  console.log(arr);
  
  return (
    <div className={styles.warp}>
    {
      arr.map(item => <Link to={`/person/${item.id}`} key={item.id}>{item.name}</Link>)
    }
    </div>
  )
}

export const query = graphql`
query {
  allDbJson {
    nodes {
      id
      name
    }
  }
}

`
