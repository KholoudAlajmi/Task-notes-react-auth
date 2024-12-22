import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
//1
function App() {
  return (
    <div className="App font-mono ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
