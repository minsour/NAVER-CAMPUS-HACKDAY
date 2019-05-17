import React from 'react';
import i18n from '../utils/i18n';
import formatter from '../utils/formatter';

import './OrderRow.scss';

const OrderRow = (props) => {
  
  const textObject = props.isHead ? {
    'id': props.lang['item_num'],
    'info': props.lang['item_info'],
    'price': props.lang['price'],
    'seller': props.lang['seller'],
    'status': props.lang['status']
  } : {
    'id': props.id,
    'info': props.name,
    'price': formatter.price(props.price),
    'seller': props.seller.name,
    'status': props.status
  };
  return (
    <div className="OrderRow">
      <div className="OrderRow-id">{textObject.id}</div>
      <div className="OrderRow-info">{textObject.info}</div>
      <div className="OrderRow-price">{textObject.price}</div>
      <div className="OrderRow-seller">{textObject.seller}</div>
      <div className="OrderRow-status">{textObject.status}</div>
    </div>
  );
};

export default i18n(OrderRow);