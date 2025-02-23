import "./App.css";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e.target.value),
      });
      if (!response.ok) {
        throw new Error("failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async (data) => {
    try {
      const response = await fetch("/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("error");
      }

      const data = response.json();
      

    } catch (error) {
      console.error(error);
    }
  };

  return <></>;
}

export default App;
