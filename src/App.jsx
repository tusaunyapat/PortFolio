import "./App.css";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import Timeline from "./component/Timeline";
import { Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="bg-white dark:bg-blue-950 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
