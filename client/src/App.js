import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/post/:postID" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
