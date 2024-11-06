import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((allListings) => setListings(allListings))
  }, [])

  function removeListing(listingID) {
    setListings((currentListings) => {
      return currentListings.filter((listing) => {
        return listing.id !== listingID
      })
    })
  }

  const filteredListings = listings.filter((listing) => {
    const lowerCaseDesc = listing.description.toLowerCase()
    const lowerCaseTerm = searchTerm.toLowerCase()
    return lowerCaseDesc.includes(lowerCaseTerm)
  })

  const renderListings = filteredListings.map(({ id, description, image, location }) => (
    <ListingCard
      key={id}
      id={id}
      description={description}
      image={image}
      location={location}
      onRemoveListing={removeListing}
    />
  ))

  return (
    <main>
      <ul className="cards">
        { renderListings }
      </ul>
    </main>
  );
}

export default ListingsContainer;
