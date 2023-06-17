import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menubar from "./components/Menubar";
import Users from "./pages/home/Users";
import Payments from "./pages/Payments/Payments";
import Affiliates from "./pages/Payments/Affiliates";

function App() {
  return (
    <div className="App">
      <Menubar />
      <div className="pages">
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/users" element={ <Users /> } />
          <Route path="/payments" element={ <Payments /> } />
          <Route path="/affiliate" element={ <Affiliates /> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
