import { useEffect, useState } from "react";

function Book() {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [books, setBooks] = useState([]);
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
    <>
      {isLoading ? (
        <h3>...Loading</h3>
      ) : (
        <>
          <h2>
            원하는 작가의 책과 대표작을 찾아봅시다 <br />
            자료가 올드합니다
          </h2>
          <input
            id="author"
            onChange={(event) => {
              setInput(event.target.value);
              setSearch(false);
            }}
          ></input>
          <button
            type="button"
            onClick={() => {
              setSearch(true);
            }}
          >
            클릭
          </button>
          {search &&
            (books.docs.length === 0 ? (
              <div>찾는 결과가 없습니다</div>
            ) : (
              books.docs.slice(0, 30).map((book, index) => {
                return (
                  <div key={index}>
                    <h2>{book.name}</h2>
                    <span>{book.top_work}</span>
                  </div>
                );
              })
            ))}
        </>
      )}
    </>
  );
}
export default Book;
