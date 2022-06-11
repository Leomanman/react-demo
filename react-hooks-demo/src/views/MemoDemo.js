import React, { memo } from 'react'
function MemoDemo() {
  console.log('render~')
  return (
    <div>
      <p>MomoDemo</p>
    </div>
  )
}

export default memo(MemoDemo)