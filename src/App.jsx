import { useState } from 'react'
import { ProductCard } from './components/ProductCard'
import './App.css'
import  Products  from './data/Products'
import { formInputsList } from './data/Products'
import Modal from './components/Ui/Modal';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input'
import { productValidation } from './validation/productValidation'
import { ErrorMessege } from './components/Ui/ErrorMessege'


function App() {
  const defaultProductObj={
    title:"",
    description:"",
    imageURL:"",
    price:'',
    color:[],
    category:{
      name:"",
      imageURL:""
    }

  }
  const [errors,setErrors]=useState({
    title:"",
    description:"",
    imageURL:"",
    price:"",
  })

  const [product,setProduct]=useState(defaultProductObj)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }




const onChangeHandler=(event)=>{
  const {value,name}=event.target
  setProduct({
    ...product,
    [name]:value
  })
  
  setErrors({
    ...errors,
    [name]:""
  })
}
const submitHandler=(e)=>{
  e.preventDefault()
  const errors=productValidation({
    title:product.title,
    description:product.description,
    imageURL:product.imageURL,
    price:product.price
  })
  // console.log(errors);


  const hasErrorMsg=Object.values(errors).some(value=> value=== '') && Object.values(errors).every(value => value === '')
  if(!hasErrorMsg){
    setErrors(errors)
    return
  }
  console.log("SEND THIS TO SERVER");
  
}



const onCancel=()=>{
  // console.log("cancel");
  setProduct(defaultProductObj)
  closeModal()
  
}


const renderProducts=Products.map(product=>(<ProductCard key={product.id} product{...product}/>))
// console.log(renderProducts);



const renderFormInputList=formInputsList.map(input => (
  <div className='flex flex-col' key={input.id}>
    <label className='mb-2 text-sm font-medium text-gray-700' htmlFor={input.id}>{input.label}</label>
    <Input  type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler}></Input>
    <ErrorMessege msg={errors[input.name]}></ErrorMessege>
  </div>
))




  return (
    <main className='container'>
      <Button className='bg-indigo-700 hover:bg-indigo-900 transition-all' onClick={openModal}>Add Product</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProducts}
        
        
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product" > 

        <form className='space-y-3' onSubmit={submitHandler}>
          {renderFormInputList}
          <div className='flex items-center space-x-3'>
        <Button className='bg-indigo-700 hover:bg-indigo-900 transition-all'>Submit</Button>
        <Button className='bg-gray-400 hover:bg-gray-900 transition-all' onClick={onCancel}>Cancel</Button>
        </div>
          </form>

        
      </Modal>
    </main>
  )
}

export default App
