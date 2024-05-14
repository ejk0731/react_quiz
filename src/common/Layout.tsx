import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
const cx = classNames.bind(styles);

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={cx("wrap")}>
      <header id="header"  className={cx("header")}>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Link to="/">React Quiz</Link>
            <Nav as="ul" variant="pills" className="justify-content-center">
              <Link to="/Books">Books</Link>
              <Link to="/Canvas">Canvas</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main id="main" className={cx("content")}>{children}</main>
      <footer id="footer" className={cx("footer-wrap")}>나는 푸터</footer>
    </div>
  );
}
export default Layout;
