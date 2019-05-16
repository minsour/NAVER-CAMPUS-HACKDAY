import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = (props) => {
  return (
    <div className="ItemCard">
      <Link to={`/order/${props.order.id}`} className="ItemCard-Left">
        <div className="ItemCard-Left-Item">
          <div>
            {props.id}
            {props.name}
            {props.price}
          </div>
        </div>
      </Link>
      <div className="ItemCard-Right">
        <div className="ItemCard-Seller">
          <div className="ItemCard-Seller-Name">
            {props.order.seller.name}
          </div>
          <div className="ItemCard-Seller-Phone">
            {props.order.seller.phone}
          </div>
          <a href={`mailto:${props.order.seller.email}`} className="badge badge-secondary">
            판매자 문의
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;