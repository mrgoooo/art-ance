import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RootPage from "./Pages/RootPage";
import WebDevRoot from "./WebDev/WebDevRoot";
import "./App.css";

const App = () => {
  return (
    <Router basename="/art-ance">
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/webdev" element={<WebDevRoot />} />
      </Routes>
    </Router>
  );
};

export default App;
