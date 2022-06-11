import React, { useEffect, useState } from 'react';
import axios from 'axios'
function UseEffectAsyncDemo() {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    (async function () {
      const { data } = await axios.get('http://localhost:8080/posts/')
      setMsg(data[0].title)
    })()
  }, [])

  return (
    <div>
      <h2>UseEffectAsyncDemo</h2>
      <div>
        msg:{msg}
      </div>
    </div>
  )
}

export default UseEffectAsyncDemo;