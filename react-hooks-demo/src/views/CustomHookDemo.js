import { useState } from 'react'

function useUpdataInput(initialState) {
  const [value,setValue] = useState(initialState)
  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}
function CustomHookDemo() {
  const username = useUpdataInput('')
  const password = useUpdataInput('')
  function handleSubmit(e) {
    e.preventDefault()
    console.log(username.value)
    console.log(password.value)
  }
  return (
    <form onSubmit={ handleSubmit}>
      <input type="text" name="usename" {...username}/>
      <input type="text" name="password" {...password}/>
      <button>submit</button>
    </form>
  )
}

export default CustomHookDemo