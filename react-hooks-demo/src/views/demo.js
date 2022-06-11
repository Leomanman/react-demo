import { useState,useEffect, useReducer } from '../utils/myHooks'
function Demo () {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('HELLO')
  useEffect(() => {
    console.log('count')
  },[count])
  useEffect(() => {
    console.log('msg')
  },[msg])

  function reducer (state, action) {
    switch (action.type) {
      case 'editName':
        return {
          ...state,
          "name": 'lisi'
        }
      case 'editAge':
        return {
          ...state,
          "age": 19
        }
      default:
        return state;
    }
  }

  const [obj, dispatch] = useReducer(reducer, {
    name:'zhangsan',
    age: 18
  })
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <p>{msg}</p>
      <button onClick={() => setMsg(msg + Math.random())}>setMsg</button>
      <p>
        {obj.name}----
        {obj.age}
      </p>
      <button onClick={()=>dispatch({type: 'editName'})}>修改名字</button>
      <button onClick={()=>dispatch({type: 'editAge'})}>修改年龄</button>
    </div>
  )
}

export default Demo