import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Foods from "./Pages/Foods"
import SubmitForm from "./Pages/SubmitForm"

function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/foods" element={<Foods/>}/>
              <Route path="/admin" element={<SubmitForm/>}/>
          </Routes>
      </Router>
     
    </>
  )
}

export default App
