import React, { useState, useEffect, memo } from "react";
import TABLE_NAMES from "../constants/constants";
import "./AvailableTables.scss";

const AvailableTables = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tableList, setTableList] = useState(TABLE_NAMES);

  useEffect(() => {
    const newList = TABLE_NAMES.filter((name) => name.startsWith(searchValue));
    setTableList(newList);
  }, [searchValue]);

  return (
    <div className="table-names-container">
      <div className="head">Available Tables</div>
      <div className="search-bar">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search ..."
          type="text"
          className="searchbar"
        />
      </div>
      <div className="tablename-container">
        <ul className="table-names">
          {tableList.length > 0 &&
            tableList.map((name, idx) => (
              <li
                key={name + idx}
                className={`table-name ${idx % 2 === 0 ? "even" : "odd"}`}
              >
                {name}
              </li>
            ))}
          {tableList.length === 0 && "Table name not found"}
        </ul>
      </div>
    </div>
  );
};

export default memo(AvailableTables);
