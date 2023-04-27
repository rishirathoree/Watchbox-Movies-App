import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
Login
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
