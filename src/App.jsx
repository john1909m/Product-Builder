import { useState } from 'react'
import { ProductCard } from './components/ProductCard'
import './App.css'
import  Products  from './data/Products'
import { formInputsList } from './data/Products'
import Modal from './components/Ui/Modal';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input'


function App() {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


const renderProducts=Products.map(product=>(<ProductCard key={product.id} product{...product}/>))
console.log(renderProducts);



const renderFormInputList=formInputsList.map(input=> (
  <div className='flex flex-col'>
    <label className='mb-2 text-sm font-medium text-gray-700' htmlFor={input.id}>{input.label}</label>
    <Input  type="text" id={input.id} name={input.name}></Input>
  </div>
))




  return (
    <main className='container'>
      <Button className='bg-indigo-700 hover:bg-indigo-900 transition-all' onClick={openModal}>Add Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProducts}
        
        
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product" > 

        <div className='space-y-3'>
          {renderFormInputList}
          <div className='flex items-center space-x-3'>
        <Button className='bg-indigo-700 hover:bg-indigo-900 transition-all'>Submit</Button>
        <Button className='bg-gray-400 hover:bg-gray-900 transition-all'>Cancel</Button>
        </div>
          </div>

        
      </Modal>
    </main>
  )
}

export default App
