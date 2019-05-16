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
          <div className="ItemCard-row1">
            {props.name}
          </div>
          <div className="ItemCard-row2">
            <span className="ItemCard-price">
              {formatter.price(props.price)}{props.lang['krw']}
            </span>
            <span className="ItemCard-date">
              {formatter.date(props.order.date)}
            </span>
          </div>
          <div className="ItemCard-row3">
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