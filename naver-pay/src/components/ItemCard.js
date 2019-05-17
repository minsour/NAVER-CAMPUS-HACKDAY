import React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../utils/i18n';
import formatter from '../utils/formatter';

import './ItemCard.scss';

const ItemCard = (props) => {
  return (
    <div className="ItemCard">
      <Link to={`/order/${props.order.id}`} className="ItemCard-Left">
        <div className="ItemCard-Left-Item">
          <div className="ItemCard-Left-name">
            <span className="badge badge-info mr-2">
              {props.category}
            </span>
            {props.name}
          </div>
          <div>
            <span className="ItemCard-Left-price">
              {formatter.price(props.price)}{props.lang['krw']}
            </span>
            <span className="ItemCard-Left-date">
              {formatter.date(props.order.date)}
            </span>
          </div>
          <div className="ItemCard-Left-status">
            {props.status}
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
            {props.lang['contact_seller']}
          </a>
        </div>
      </div>
    </div>
  );
};

export default i18n(ItemCard);