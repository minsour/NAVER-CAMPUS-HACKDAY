import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = (props) => {
  return (
    <div className="ItemCard">
      <Link to={`/order/${props.id}`}>
        <div>
          {props.id}
          {props.name}
          {props.price}
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;