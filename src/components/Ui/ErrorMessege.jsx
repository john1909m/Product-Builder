import React from 'react'

export const ErrorMessege = ({msg}) => {
  return (
    msg ? <span className='block text-red-700 font-semibold text-sm'>{msg}</span> : null
  )
}
