import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
function App() {
  return (
    <div className="light:bg-white dark:bg-blue-950  ">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
