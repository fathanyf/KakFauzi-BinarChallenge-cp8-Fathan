import { useState } from "react";
import players from "./data/players.json";

function SearchPage() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(players);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(players);
    else {
      const filteredData = players.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <div className="form-inline col my-2 mt-3">
        <label className="text-strong mr-2">Search Player :</label>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody className="box-container">
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.experience}</td>
              </tr>
            );
          })}
          <div className="clearboth"></div>
          {data.length === 0 && <span>No records found to display!</span>}
        </tbody>
      </table>
    </>
  );
}

export default SearchPage;