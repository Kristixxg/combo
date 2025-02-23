import { useState } from "react";
import "./App.css";

function App() {
  const lists = [
    {
      country: "London",
      description: "London is the capital city of England",
    },
    {
      country: "Paris",
      description: "Paris is the capital of France.",
    },
    {
      country: "Tokyo",
      description: "Tokyo is the capital of Japan.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <div>
        {lists.map((list, index) => {
          return (
            <button onClick={() => setActive(index)} key={list.country}>
              {list.country}
            </button>
          );
        })}
      </div>

      {active !== null && <p>{lists[active].description}</p>}
    </>
  );
}

export default App;
