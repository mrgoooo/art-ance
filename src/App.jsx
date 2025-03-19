import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RootPage from "./RootPage";
import "./App.css";

const App = () => {
  return (
    <Router basename="/art-ance">
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </Router>
  );
};

export default App;
