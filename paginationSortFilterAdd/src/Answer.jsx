import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import "./App.css";

const Tabel = lazy(() => import("./components/Tabel")); // Lazy load the Tabel component

function App() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67925cadcf994cc68049c1e9.mockapi.io/api/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtered products based on search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.Pname.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      sortOrder === "asc"
        ? Number(a.Pprice) - Number(b.Pprice)
        : Number(b.Pprice) - Number(a.Pprice)
    );
  }, [filteredProducts, sortOrder]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage]);

  // Handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value.trim());
    setCurrentPage(1); // Reset to first page on search
  };

  // Toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search By Name"
        value={query}
      />
      <div>
        <button onClick={toggleSortOrder}>Sort: {sortOrder}</button>
      </div>

      <Suspense fallback={<p>Loading table...</p>}>
        <Tabel products={paginatedProducts} />
      </Suspense>

      <div>
        {Array.from(
          { length: Math.ceil(filteredProducts.length / itemsPerPage) },
          (_, i) => (
            <button
              onClick={() => setCurrentPage(i + 1)}
              key={i}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default App;
