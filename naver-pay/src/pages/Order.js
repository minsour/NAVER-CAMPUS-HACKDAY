import React, { Component } from 'react';
import API from '../utils/API';
import i18n from '../utils/i18n';
import formatter from '../utils/formatter';

import OrderRow from '../components/OrderRow';
import './Order.scss';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderData: []
        };
    }

    async componentDidMount() {
        const order_id = this.props.match.params.id;
        const res = await API.request('order', {'order_id': order_id});
        this.setState({ orderData: res.body[0] });
        console.log(this.state.orderData);
    }

    render() {
        const orderData = this.state.orderData;
        let body = [];
        body.push((
            <OrderRow key={`order_row_head`} isHead={true} />
        ));
        orderData && orderData.items && orderData.items.forEach(item => {
            body.push((
                <OrderRow
                    key={`order_row_${item.id}`}
                    id={item.id}
                    amount={item.amount}
                    status={item.status}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    seller={orderData.seller}
                />
            ));
        });
        if (!orderData) return (<div/>);
        return (
            <div className="Order">
                <h1>{this.props.lang['order_details']}</h1>
                <div className="Order-Summary">
                    <span className="Order-Summary-key">{this.props.lang['order_num']}</span>{' '}{orderData.id}{' '}
                    <span className="Order-Summary-key">{this.props.lang['order_date']}</span>{' '}{formatter.date(orderData.date)}
                </div>
                <h5>{this.props.lang['order_item_list']}</h5>
                <div className="Order-Box">
                    {body}
                </div>
            </div>
        );
    }
}

export default i18n(Order);