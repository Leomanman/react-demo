import React from 'react';
export default function Persion({ pageContext }) {
  return (
    <>
      <div>
        {pageContext.name}
        {pageContext.age}
      </div>
    </>

  )
}