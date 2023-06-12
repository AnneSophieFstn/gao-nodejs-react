import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import Computers from "./pages/computers";
import Customers from "./pages/customers";
import Dashboard from "./pages/dashboard";
import Events from "./pages/events";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/users";

function App() {
  return (
    <div>
      <main>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Sidebar />} />
        </Routes> */}

        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="lg:w-3/4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Customers />} />
              <Route path="/ordinateurs" element={<Computers />} />
              <Route path="/reservations" element={<Events />} />
              <Route path="/parametres" element={<Admin />} />
              {/* <Route path="/" element={<Déconnexion />} /> */}
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
