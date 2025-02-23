import React from "react";

export default function Tabel({ products, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>PRICE</th>
          <th>DESCRIPTION</th>
          <th>IMAGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.Pname}</td>
              <td>{product.Pprice}</td>
              <td>{product.Pdescription}</td>
              <td>
                <img
                  style={{ width: "40px" }}
                  src={product.Pimg}
                  alt="Image description"
                />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
