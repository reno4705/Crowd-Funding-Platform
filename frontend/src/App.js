import "./App.css";
import Signup from './components/register-pages/signup.jsx';
import Login from './components/register-pages/login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeBefore from "./components/Home pages/homebefore.jsx";
import Founders from "./components/founders-page/founders.jsx";
import Home from "./components/Home pages/home.jsx";
import Investor from "./components/investors-page/investor.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeBefore />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
