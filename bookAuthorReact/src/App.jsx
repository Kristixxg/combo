import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const fetchBooks = async () => {
    const res = await fetch("https://openlibrary.org/subjects/world.json");
    const data = await res.json();
    const booksData = data.works;

    const newBooksData = booksData.map((book) => {
      const authors = [];
      book.authors.map((author) => authors.push(author.name));

      const title = book.title;
      return {
        title,
        author: authors[0],
      };
    });
    setBooks(newBooksData);
    setFiltered(newBooksData);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    setFiltered(filteredBooks);
  };

  const handleCardClick = (book) => {
    setSelected(book);
  };
  return (
    <>
      <div>
        <input onChange={handleChange} type="text" placeholder="search" />
      </div>
      {selected && (
        <div>
          <div>
            <h1>{selected.title}</h1>
            <p>{selected.author}</p>
          </div>
        </div>
      )}
      {filtered.map((book, index) => {
        return (
          <div onClick={() => handleCardClick(book)} key={index}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
