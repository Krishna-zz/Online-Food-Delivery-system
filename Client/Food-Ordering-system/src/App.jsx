import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Foods from "./Pages/Foods"
import SubmitForm from "./Pages/SubmitForm"
import Cart from "./Components/Cart"
import OrderSuccess from "./Pages/OrderSuccess"
import { useScroll } from "framer-motion"
import { useState } from "react"

function App() {

    const [cartItems , setCartItems] = useState([])

  return (


    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/foods" element={<Foods cartItems={cartItems} setCartItems={setCartItems}/>}/>
              <Route path="/admin" element={<SubmitForm/>}/>
              <Route path="/Cart" element={< Cart  cartItems={cartItems} setCartItems={setCartItems}/>}/>
              <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
      </Router>
     
    </>
  )
}

export default App
