import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setList(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (newInfo) => {
    setList([...list, newInfo]);
  };

  const handleDelete = (index) => {
    const newList = list.filter((contact, id) => id !== index);
    setList(newList);
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Table data={list} onDelete={handleDelete} />
    </>
  );
}

export default App;
