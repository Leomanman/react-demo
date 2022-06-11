import React, { useState } from 'react';

function UseStateDemo(props) {
  let c = props.count || 0
  const [count1, setCount1] = useState(c)
  console.log('初始化 count1')
  // const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(() => {
    console.log('初始化 count2');
    return props.count || 10
  })
  return (
    <div>
      <h2>useState</h2>
      <div>
        count1:{count1}
      </div>
      <button onClick={() => setCount1(count1 + 1)}>+ 1</button>
      <div>
        count2:{count2}
      </div>
      <button onClick={() => setCount2(count2 + 10)}>+ 10</button>
    </div>
  )
}

export default UseStateDemo;