import Head from 'next/head'
import styles from './list.module.css'
import axios from 'axios'
import Link  from 'next/link'  
function List({ data }) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className={styles.title}>list</div>
      <ul>
        {
          data.map(item => 
          <li key={item.id}>
            {item.title}
          </li>)
        }
      </ul>
    </>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios.get('http://localhost:3005/api/movie')
  return {
    props: { data }
  }
}

export default List