import { useEffect, useState, useCallback } from "react";
import "./App.css";
import ChildComponent from "./childComponent";
import cities from "cities-list";
import debounce from "lodash.debounce";

const citiesArray = Object.keys(cities);
const App = () => {
  const [filteredCities, setFilteredCities] = useState([]);


  const doCityFilter = debounce(query => {
    if (!query) return setFilteredCities([]);
    console.log(query);
    setFilteredCities(citiesArray.filter(
      city => city.toLowerCase().includes(query.toLowerCase())
    ))},500)
  
 //   debouncedFilter(query);
 
  return (
    <>
      <h1>Find your favourite cities</h1>
      <form className="mt-3 mb-5">
        <input
          type="text"
          className="px-2"
          placeholder="search here"
          onChange={(e) => doCityFilter(e.target.value)}
        />
      </form>
      <div>
        {filteredCities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
    </>
  );
};

export default App;
