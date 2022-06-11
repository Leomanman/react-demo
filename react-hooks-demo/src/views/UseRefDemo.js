import { useEffect, useRef, useState } from 'react'

function UseRefDemo() {
  const dom = useRef(null)

  const [count, setCount] = useState(0)
  const time = useRef(null)
  useEffect(() => {
    time.current = setInterval(() => {
      console.log('执行')
      setCount(count + 1)
    }, 1000);
  }, [])
  const handleClose = () => {
    console.log(time.current)
    clearInterval(time.current)
  }
  return (
    <div>
      <p>useRefDemo</p>
      <button ref={dom} onClick={() => console.log(dom.current)}>
        获取dom
      </button>
      <p>
        {count}
        <button onClick={handleClose }>停止</button>
      </p>
    </div>
  )
}
export default UseRefDemo