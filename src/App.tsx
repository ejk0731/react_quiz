import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "./modules/Book";
import Home from "./modules/Home";

function App() {
  return (
    <Router>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React Quiz</Navbar.Brand>
          <Nav as="ul" variant="pills" className="justify-content-center">
            <Nav.Link href="/Books">Books</Nav.Link>
            <Nav.Link href="/Canvas">Canvas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Books" element={<Book />}></Route>
        <Route path="/Books" element={<Book />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
