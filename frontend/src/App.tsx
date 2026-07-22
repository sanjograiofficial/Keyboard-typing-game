import { Route, Routes } from "react-router-dom"
import "./App.css";
import "./index.css";
import Home from "./page/home/Home";
import Register from "./page/auth/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Register />} />
    </Routes>
  )
}

export default App