import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchDataById = async (id) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await res.json();
      console.log(userData);
      setUser(userData);
    };
    fetchDataById(id);
  }, []);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {user && (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => navigate("/users")}>back to users</button>
    </div>
  );
}
