import React, { useState } from 'react';

function Card({ imageSrc, title }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
      <div className="card-buttons">
        <button className="card-button">See More</button>
        <button className="like-button" onClick={handleLike}>
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}

export default Card;
