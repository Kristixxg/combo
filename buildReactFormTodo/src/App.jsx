import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [list, setList] = useState([]);
  const handleSubmit = (newTodo) => {
    setList([...list, newTodo]);
  };

  const handleDelete = (index) => {
    setList(list.filter((todo, i) => index !== i));
  };
  return (
    <>
      <Table handleDelete={handleDelete} list={list} />
      <Form handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
