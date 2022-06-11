import React, { memo, useCallback, useState }  from 'react'
function UseCallback() {
  const [count, setCount] = useState(0)
  const handleRest = useCallback(() =>  setCount(0), [setCount]) 
  return (
    <div>
      <p>MomoDemo</p>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </div>
      <Test handleRest={handleRest}/>
    </div>
  )
}

const Test = memo(function foo(props) {
  console.log('Reader!!!')
  return (
    <button onClick={() => props.handleRest()}>reset</button>
  )
})

export default UseCallback