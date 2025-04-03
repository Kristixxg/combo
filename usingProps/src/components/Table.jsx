import React from "react";
import "./table.css";

export default function Table({ data }) {
  const keys = Object.keys(data[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {keys.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <tr key={i}>
                {keys.map((key) => {
                  return <td key={key}>{obj[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
