import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  let data = [
    { id: 1, name: "Gold Ring", price: 150, votes: 5 },
    { id: 2, name: "Silver Necklace", price: 120, votes: 3 },
    { id: 3, name: "Diamond Bracelet", price: 300, votes: 8 },
  ];

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [current, setCurrent] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const itemsPerPage = 9;

  useEffect(() => {
    setProducts(data);
    setFiltered(data);
  }, []);

  const sort = () => {
    setFiltered((prev) => [...prev].sort((a, b) => b.votes - a.votes));
  };

  useEffect(() => {
    sort();
  }, [filtered]);

  useEffect(() => {
    getPageItem(1);
  }, [filtered]);

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFiltered(filtered);
  };

  const getPageItem = (page) => {
    const startIndex = itemsPerPage * (page - 1);
    const endIndex = itemsPerPage * page;
    const currentProducts = filtered.slice(startIndex, endIndex);
    setCurrent(currentProducts);
  };

  const handleUpVote = (index) => {
    setFiltered((prev) =>
      prev.map((product) =>
        product.id === index
          ? { ...product, votes: product.votes + 1 }
          : product
      )
    );
  };
  const handleDownVote = (index) => {
    setFiltered((prev) =>
      prev.map((product) =>
        product.id === index
          ? { ...product, votes: product.votes - 1 }
          : product
      )
    );
  };

  const handleChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(newProduct);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...filtered, { ...newProduct, id: Date.now(), votes: 0 }];
    setFiltered(newList);
    getPageItem(1);
  };

  return (
    <>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search by name"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Vote</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {current.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.votes}</td>
                <td>
                  <button onClick={() => handleUpVote(product.id)}>
                    Upvote
                  </button>
                  <button onClick={() => handleDownVote(product.id)}>
                    Downvote
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {filtered.length === 0 && <p>No products.</p>}
      <div>
        {Array.from(
          { length: Math.ceil(filtered.length / itemsPerPage) },
          (_, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  getPageItem(index + 1);
                }}
              >
                {index + 1}
              </button>
            );
          }
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input onChange={handleChange} name="name" type="text" />
        <label htmlFor="">Price: </label>
        <input onChange={handleChange} name="price" type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
