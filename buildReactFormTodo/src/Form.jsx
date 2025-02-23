import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [current, setCurrent] = useState({
    title: "",
    description: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(current);
  };
  const handleChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <label htmlFor="">Title: </label>
        <input name="title" onChange={(e) => handleChange(e)} type="text" />
        <label htmlFor="">Description: </label>
        <input
          name="descrition"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
