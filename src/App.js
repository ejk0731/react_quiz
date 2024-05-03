import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./routes/Book";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
