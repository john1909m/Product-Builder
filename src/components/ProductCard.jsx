import React from 'react'
import Image from './Image'
import Button from './Ui/Button'
import { textSclicer } from '../utils/functions'
// import  Products  from './data/Products'
export const ProductCard = ({title,description,imageURL,category,price}) => {
  
  
  // const {title,description,imageURL}=product
  return (
    <div className='border rounded-md p-4 flex flex-col max-w-sm md:max-w-ld mx-auto md:mx-0 '>
        <Image imageUrl={imageURL} alt={"Product name"} className="rounded-md mb-2"></Image>
        <h3>{title}</h3>
        <p>{textSclicer(description)}</p>

        
        <div className='flex items-center my-5 space-x-2'>
            <span className='w-5 h-5 bg-indigo-500    rounded-full cursor-pointer'></span>
            <span className='w-5 h-5 bg-yellow-500    rounded-full cursor-pointer'></span>
            <span className='w-5 h-5 bg-red-500 rounded-full cursor-pointer'></span>
        </div>


        <div className='flex items-center justify-between'>
          <span>${price}</span>
          
          <Image imageUrl={category.imageURL} alt={"Product name"} className="w-10 h-10 rounded-full object-bottom"></Image>
        </div>
        <div className='flex justify-between space-x-3 mt-5'>
          <Button className='bg-indigo-700 ' width='' onClick={()=>{
            alert("clicked")
          }}>Edit</Button>
          <Button className='bg-red-700 '>Delete</Button>
        </div>
    </div>
  )
}
