import React, { useReducer } from 'react';
function reducer(state, action) {
  switch(action.type){
    case 'add':
      return state + 1;
    default:
      return state
  }
}
function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h2>useReducer</h2>
      <div>count: {count}</div>
      <button onClick={() => dispatch({type: 'add'})}>+1</button>
    </div>
  )
}

export default UseReducerDemo;