import React from 'react'
import {InputHTMLAttributes} from 'react'

const Input = ({...rest}) => {
  return (


  <input type="text" id='' name='' className='border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md mb-2
  ' {...rest}/>

  )
}

export default Input