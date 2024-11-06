import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  function updateSearchTerm(searchText) {
    setSearchTerm(searchText)
  }

  return (
    <div className="app">
      <Header onUpdateSearchTerm={updateSearchTerm} />
      <ListingsContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
