import classNames from "classnames/bind";
import styles from "./Book.module.scss";
import { useEffect, useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import Layout from "../common/Layout";

const cx = classNames.bind(styles);

function Book() {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [books, setBooks] = useState<any>([]);
  const getBooks = async () => {
    const json = await (
      await fetch(`https://openlibrary.org/search/authors.json?q=${input}`)
    ).json();
    setBooks(json);
    setIsLoading(false);
  };

  console.log(books);

  useEffect(() => {
    getBooks();
  }, [input]);
  return (
    <Layout>
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <div className={cx("book_wrap")}>
          <h2 className={cx("title")}>
            원하는 작가의 책과 대표작을 찾아봅시다
          </h2>
          <InputGroup className={cx("mb-3")}>
            <Form.Control
              placeholder="Author"
              aria-label="Author"
              aria-describedby="basic-addon2"
              id="author"
              onChange={(event) => {
                setInput(event.target.value);
                setSearch(false);
              }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={() => {
                setSearch(true);
              }}
            >
              search
            </Button>
          </InputGroup>
          <ul className={cx("list")}>
            {search &&
              (books.docs.length === 0 ? (
                <div>찾는 결과가 없습니다</div>
              ) : (
                books.docs.slice(0, 30).map((book: any, index: any) => {
                  return (
                    <li key={index} className={cx("list-item")}>
                      <h2>{book.name}</h2>
                      <span>{book.top_work}</span>
                    </li>
                  );
                })
              ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}
export default Book;
