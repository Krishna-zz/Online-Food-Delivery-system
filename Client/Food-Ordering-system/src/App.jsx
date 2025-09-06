import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Foods from "./Pages/Foods"

function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/foods" element={<Foods/>}/>
          </Routes>
      </Router>
     
    </>
  )
}

export default App
