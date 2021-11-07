import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Login from "./components/login";
import Posts from "./components/posts";
import Stats from "./components/stats";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
