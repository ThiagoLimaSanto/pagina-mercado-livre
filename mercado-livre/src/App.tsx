import { useState } from 'react'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Oferta from './components/oferta/Oferta'
import { products, type Product } from './db/data'
import './App.css'

function App() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <>
      <Navbar setFilteredProducts={setFilteredProducts} />
      <Oferta />
      <Main filteredProducts={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
