import React, { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = (props) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
