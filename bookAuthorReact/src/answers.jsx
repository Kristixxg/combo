import { useState, useEffect } from "react";
// import './App.css';

export default function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch data from API
  useEffect(() => {
    fetch("https://openlibrary.org/subjects/world.json")
      .then((response) => response.json())
      .then((data) => {
        const bookList = data.works.map((book) => ({
          title: book.title,
          author: book.authors?.[0]?.name || "Unknown",
        }));
        setBooks(bookList);
        setFilteredBooks(bookList);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  // Handle search filter
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredBooks(
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      )
    );
  };
  // Handle book selection
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };
  return (
    <div className="app">
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="books-container">
        {/* Highlighted Book */}
        {selectedBook && (
          <div
            className="book-card highlighted"
            onClick={() => handleSelectBook(null)}
          >
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.author}</p>
          </div>
        )}

        {/* List of Books */}
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className={`book-card ${selectedBook === book ? "selected" : ""}`}
            onClick={() => handleSelectBook(book)}
          >
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
