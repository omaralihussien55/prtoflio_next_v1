import React, { FC } from 'react'

const Title:FC<{title:string}> = ({title}) => {
  return (
    <div className='p-2 my-2'>
      <h1 className='text-center p-1 text-purple-900  font-extrabold text-2xl'>{title}</h1>
    </div>
  )
}

export default Title
