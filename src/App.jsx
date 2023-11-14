import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Interest from "./component/Interest";
import Related from "./component/Related";
import Program from "./component/Program";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="bg-white dark:bg-blue-950 font-[] ">
      <Navbar />
      <Banner />
      <Interest />
      <Related />
      <Program />
      <Footer />
    </div>
  );
}

export default App;
