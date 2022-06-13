import { useEffect } from 'react'

function Details(props) {
  useEffect(() => {
    console.log(props.params)
  },[])
  return (
    <div>
      详情
    </div>
  )
}

export async function getStaticPaths() {
  console.log('执行getStaticPaths');
  return {
    paths: [{params: {id:'1'}},{params: {id:'2'}}],
    fallback: true
  }
}

export async function getStaticProps({params}) {
  console.log('执行getStaticProps');
  
  return {
    props: {
      params: params
    }
  }
}
export default Details