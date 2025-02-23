import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      title: "Black Panther",
      vote: 14,
    },
    {
      title: "Avatar",
      vote: 13,
    },
    {
      title: "Titanic",
      vote: 3,
    },
  ];

  const [movies, setMovies] = useState(data);

  const sortMovies = (movies) => {
    movies.sort((a, b) => Number(b.vote) - Number(a.vote));
  };

  const handleUpVote = (index) => {
    setMovies((prev) =>
      prev.map((movie, i) =>
        i === index ? { ...movie, vote: movie.vote + 1 } : movie
      )
    );
  };
  const handleDownVote = (index) => {
    setMovies((prev) =>
      prev.map((movie, i) =>
        i === index ? { ...movie, vote: movie.vote - 1 } : movie
      )
    );
  };
  sortMovies(movies);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Vote</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.vote}</td>
                <td>
                  <button onClick={() => handleUpVote(index)}>Upvote</button>
                  <button onClick={() => handleDownVote(index)}>
                    Downvote
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
