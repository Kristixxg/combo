import React from "react";

export default function Table({ list, handleDelete }) {
  const onDelete = (index) => {
    handleDelete(index);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
