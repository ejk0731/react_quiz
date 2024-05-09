import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "./modules/Book";
import Canvas from "./modules/Canvas";
import Home from "./modules/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Books" element={<Book />}></Route>
        <Route path="/Canvas" element={<Canvas />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
