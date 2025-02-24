import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const [list, setlist] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setlist(data);
      //   console.log(data);
    };
    fetchUserData();
  }, []);
  return (
    <div>
      <ul>
        {list.map((contact, index) => {
          return (
            <li key={index}>
              <Link to={`/users/${contact.id}`}>{contact.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
