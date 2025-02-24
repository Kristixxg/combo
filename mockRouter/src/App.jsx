import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import About from "./About.jsx";
import Users from "./Users.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:id" element={<Profile />}></Route>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/users">Users</Link>

      <Outlet />
    </div>
  );
}

export default App;
