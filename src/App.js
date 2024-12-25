import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { checkToken } from "./api/storage";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <div className="App font-mono ">
    <UserContext.Provider value={[user, setUser]}>
    <Navbar />
      <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
