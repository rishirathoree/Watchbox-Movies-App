import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Accountprotectedroute from "./Pages/Accountprotectedroute";
import Displayinfo from "./Pages/Displayinfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="movie/:id" element={<Displayinfo />} />
          <Route path="/account/*" element={<Accountprotectedroute><Account /></Accountprotectedroute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
