import "./App.css";
import Footer from "./Components/Footer";
import SimpleCard from "./Components/Loginpage";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";
import Loginpage from "./Components/Loginpage";
import Todotable from "./Components/Todotable";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
