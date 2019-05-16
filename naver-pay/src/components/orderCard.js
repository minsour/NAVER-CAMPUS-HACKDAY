import React from 'react';

const OrderCard = (props) => {
  return (
    <div>
      {props.id}
      {props.name}
      {props.price}
    </div>
  );
};

export default OrderCard;