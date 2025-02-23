import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [ogComments, setOgComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const fetchOgData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    const formatted = data.splice(0, 20).map((comment) => {
      return {
        name: comment.name,
        email: comment.email,
        isFlagged: false,
      };
    });
    setOgComments(formatted);
    setFiltered(formatted);
  };
  useEffect(() => {
    fetchOgData();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    const filteredLists = ogComments.filter((comment) =>
      comment.email.toLowerCase().includes(query)
    );
    setFiltered(filteredLists);
  };

  const handleFlag = (index) => {
    setFiltered((prev) => {
      return prev.map((item, i) => {
        return index === i ? { ...item, isFlagged: true } : item;
      });
    });
  };

  const handleUnFlag = (index) => {
    setFiltered((prev) => {
      return prev.map((item, i) => {
        return index === i ? { ...item, isFlagged: false } : item;
      });
    });
  };

  return (
    <>
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search by email"
        />
      </div>
      <div>
        <p>Flagged Comments:</p>
        {filtered.map((comment, index) => {
          if (comment.isFlagged === true) {
            return (
              <div key={index}>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <button onClick={() => handleUnFlag(index)}>Unflag</button>
              </div>
            );
          }
        })}
      </div>
      <div>
        <p>Unflagged Comments: </p>
        {filtered.map((comment, index) => {
          if (comment.isFlagged === false) {
            return (
              <div key={index}>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
                <button onClick={() => handleFlag(index)}>Flag</button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
