import { useMemo, useState } from 'react'

export default function UseMemoDemo() {
  const [count,setCount] = useState(0)
  const [msg,setMsg] = useState('hello')
  const total = useMemo(() => {
    console.log('执行')
    return count + 10
  },[count])
  return (
    <div>
      <p>UseMomoDemo</p>
      <p>total: {total}</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <p>msg: {msg}</p>
      <button onClick={() => setMsg(msg + Math.random())}>edit msg</button>
    </div>
  )
}