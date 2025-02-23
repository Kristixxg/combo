import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [info, setInfo] = useState({
    name: "",
    number: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(info);
  };

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Name</label>
        <input name="name" type="text" onChange={onChange} />
        <label htmlFor="">Number</label>
        <input name="number" type="text" onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
