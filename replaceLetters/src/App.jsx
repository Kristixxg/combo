import { useState } from "react";
import "./App.css";

function App() {
  const textEl = document.getElementById("text");

  const [replacement, setReplacement] = useState({
    find: "",
    replace: "",
  });
  const handleChange = (e) => {
    setReplacement({
      ...replacement,
      [e.target.name]: e.target.value.trim().toLowerCase(),
    });
  };

  const handleReplace = () => {
    const content = textEl.value;
    // console.log(content);
  };

  return (
    <>
      <div>
        <textarea
          style={{ width: "400px", height: "100px" }}
          name="text"
          id="text"
          readOnly
        >
          This is the content of the areatext.
        </textarea>
        <div>
          <label htmlFor="">Find Word:</label>
          <input name="find" onChange={handleChange} type="text" />
        </div>
        <div>
          <label htmlFor="">Replace with:</label>
          <input name="replace" onChange={handleChange} type="text" />
        </div>
        <button onClick={handleReplace}>Replace</button>
      </div>
    </>
  );
}

export default App;
