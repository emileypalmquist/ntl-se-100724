import React, { useState } from "react";

function ListingCard({ id, description, image, location, onRemoveListing }) {
  const [ favorited, setFavorited ] = useState(false)

  function handleFavorite() {
    setFavorited(true)
  }

  function handleUnFavorite() {
    setFavorited(false)
  }
  
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        onRemoveListing(id)
      } else {
        throw Error('Something went wrong')
      }
    }).catch(console.log)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleUnFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
