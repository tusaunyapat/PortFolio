import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { Router, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
