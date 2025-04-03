import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";

const fetchProducts = async () => {
  return new Array(10000).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));
};

const ProductRow = ({ index, style, data }) => {
  const product = data[index];
  return (
    <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ddd" }}>
      <strong>{product.name}</strong> - ${product.price}
    </div>
  );
};

const VirtualizedProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <List
        height={400}
        itemCount={filteredProducts.length}
        itemSize={50}
        width={"100%"}
        itemData={filteredProducts}
      >
        {ProductRow}
      </List>
    </div>
  );
};

export default VirtualizedProductList;
