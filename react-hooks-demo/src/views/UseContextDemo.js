import React, { useContext, createContext } from 'react';
const countContext = createContext()
function UseReducerDemo() {
  return (
    <countContext.Provider value={100}>
      <h2>useContext</h2>
      <ChildDom />
    </countContext.Provider>
  )
}

function ChildDom () {
  const count = useContext(countContext)
  return (
    <div>
      <p>useContext child</p>
      <p>{count}</p>
    </div>
  )
}

export default UseReducerDemo;