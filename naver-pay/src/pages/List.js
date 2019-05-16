import React, {Component} from 'react';
import API from '../API';

import ItemCard from '../components/ItemCard';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  
  async componentDidMount() {
    const res = await API.request('order_list', 'test');
    this.setState({listData: res.body[0].orders}) ;
  }

  render() {
    // console.log(this.state.listData);
    let body = [];
    this.state.listData.forEach(order => {
      order.items.forEach(item => {
        body.push((
          <ItemCard
            id={item.id}
            orderId={order.id}
            key={`card_${order.id}_${item.id}`}
            name={item.name}
            price={item.price}
          />
        ));
      });
    });
    return (
      <div>
        <h1>리스트</h1>
        <div className="ListBox">
          {body}
        </div>
      </div>
    );
  }
}

export default List;