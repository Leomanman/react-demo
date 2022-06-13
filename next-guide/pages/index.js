import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
function Home({data}) {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <div>
        <p className='title'>Home</p>
        <Link href="/list">
          <a>to list</a>
        </Link>
        <style jsx>{`
          .title {
              color: #fff;
          }
        `}</style>
      </div>
      <ul>
        {
          data.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </>

  )
}

export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:3005/api/movie')
  return {
    props: { data }
  }
}
export default Home