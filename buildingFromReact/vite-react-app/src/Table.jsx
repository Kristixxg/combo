import { useState } from "react";

export default function Table({ data, onDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Contact Name</th>
            <th>Contact Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
