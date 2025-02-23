import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

const Tabel = lazy(() => import("./components/Tabel"));

function App() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [setting, setSetting] = useState(5);
  // const itemPerPage = 5;

  const handleSetting = (e) => {
    const value = Number(e.target.value);
    setSetting(value);
    setCurrentPage(1);
  };
  const fetchData = async () => {
    const res = await fetch(
      "https://67925cadcf994cc68049c1e9.mockapi.io/api/products"
    );
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getPageData(currentPage);
  }, [products, currentPage, setting]); // Update pagination when products change

  const getPageData = (pageNum) => {
    console.log("click");
    const start = (pageNum - 1) * setting;
    const end = pageNum * setting;
    setFilteredProducts(products.slice(start, end));
    setCurrentPage(pageNum);
  };

  const toggleSort = () => {
    const sorted = [...filteredProducts].sort((a, b) =>
      sort === "asc"
        ? Number(a.Pprice) - Number(b.Pprice)
        : Number(b.Pprice) - Number(a.Pprice)
    );
    setFilteredProducts(sorted);
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const pageTotal = Math.ceil(products.length / setting);

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      getPageData(1); // Reset to paginated products
      return; // 🔴 EXIT FUNCTION HERE, so filtering does NOT happen
    }

    const filtered = products.filter((product) =>
      product.Pname.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleDelete = (index) => {
    setFilteredProducts((prev) => {
      return prev.filter((product, i) => i !== index);
    });
  };

  return (
    <>
      <input onChange={handleSearch} type="text" placeholder="Search By Name" />
      <div>
        <button onClick={toggleSort}>{sort}</button>
      </div>
      <div>
        <p>Display Settings:</p>
        <select onChange={handleSetting} name="" id="">
          <option value={5}>5 Products</option>
          <option value={10}>10 Products</option>
        </select>
      </div>
      <Suspense fallback={<p>loading table...</p>}>
        <Tabel handleDelete={handleDelete} products={filteredProducts} />
      </Suspense>

      {Array.from({ length: pageTotal }, (_, i) => (
        <button onClick={() => getPageData(i + 1)} key={i}>
          {i + 1}
        </button>
      ))}
    </>
  );
}

export default App;
