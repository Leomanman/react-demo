import React, { useEffect, useState } from 'react';
function handleScroll() {
  console.log('执行了scroll')
}
function UseeffectDemo() {
  const [count,setCount] = useState(0)
  useEffect(()=> {
    console.log('每次渲染页面 componentDidMount、 componentDidUpdate都执行')
    window.addEventListener('scroll', handleScroll)
    return () => {
      console.log('卸载页面 componentWillUnMount 执行')
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    console.log('只有 componentDidMount 执行')
  },[])
  useEffect(() => {
    console.log('只有count 更新 componentDidMount、componentDidUpdate 执行')
  },[count])
  return (
    <div>
      <h2>UseeffectDemo</h2>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  )
}

export default UseeffectDemo;