import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { USER_ID } from '../../constants/user';
import Order from '../Order';

@inject('orderStore')
@observer
export class OrderList extends React.Component {
  componentDidMount() {
    this.props.orderStore.getOrderList(USER_ID);
    //console.log(this.props.orderStore.orderList);
  }
  render() {
//    const { classes } = props;
      let key = 0;
      return (
        <div>
          {/* <Order /> */}
          {Object.values(this.props.orderStore.orderListArray).map(order =>
            <Order 
              itemName={order.items[0].name} 
              key={this.key++} 
              date={this.props.orderStore.orderDate[key++]}
              items={order.items}
              orderId={order.order_id}
            />
          )}
        </div>
      );
  }
}