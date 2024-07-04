import React from 'react'

const card = (props) => {
  return (
    <div
    style={{
        backgroundColor: props.bg,
    }}
     className="card p-5 rounded-[10px] w-[32%]">
      <span>{props.icon}</span>
      <h2 className='text-3xl font-semibold mb-2'>{props.heading}</h2>
      <p className='mb-4'>{props.text}</p>
    </div>
  )
}

export default card