import { useEffect } from "react";
import { useState } from "react";

export default function Table({
  atla,
  columnName,
  columnValue,
  pageSize,
  sortedBy,
  order,
  sx,
}) {
  //sort data by sortedBy
  const sortedData = atla.sort((a, b) =>
    a[sortedBy].localeCompare(b[sortedBy])
  );

  const [current, setCurrent] = useState([]);
  const [curentPage, setCurrentPage] = useState(1);

  //get total page
  const pageNumTotal = Math.ceil(atla.length / pageSize);

  const pageArr = Array.from({ length: pageNumTotal }, (_, index) => index + 1);

  //getData per page
  const fetchDataPerPage = (pageNumber) => {
    const start = (pageNumber - 1) * pageSize; //0-3
    const end = pageNumber * pageSize; //3-6
    setCurrent(sortedData.slice(start, end));
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchDataPerPage(1);
  }, [atla, pageSize, sortedBy]);

  return (
    <div>
      <table style={sx}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nation</th>
          </tr>
        </thead>
        <tbody>
          {current.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.nation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p>Total Page:</p>
        {pageArr.map((ele, index) => {
          return (
            <button onClick={() => fetchDataPerPage(ele)} key={index}>
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
}
