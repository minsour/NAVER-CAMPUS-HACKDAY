import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = (props) => {
  return (
    <Link to={`/order/${props.id}`}>
      <div>
        {props.id}
        {props.name}
        {props.price}
      </div>
    </Link>
  );
};

export default OrderCard;