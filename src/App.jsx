// import { useState } from 'react'
import { ProductCard } from './components/ProductCard'
import './App.css'
import  Products  from './data/Products'


function App() {
const renderProducts=Products.map(product=>(<ProductCard key={product.id} product{...product}/>))
console.log(renderProducts);

  return (
    <main className='container'>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProducts}
        
        
      </div>
    </main>
  )
}

export default App
