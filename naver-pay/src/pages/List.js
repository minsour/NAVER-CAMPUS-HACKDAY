import React, {Component} from 'react';
import API from '../API';

import OrderCard from '../components/OrderCard';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  
  componentDidMount() {
    // const res = API.request('order_list');
    const res = [
      {id: "1", name:"사탕", price:"3000"},
      {id: "2", name:"귤", price:"1900"},
      {id: "3", name:"과자", price:"13000"},
      {id: "4", name:"지갑", price:"53000"},
    ];
    this.setState({listData: res}) ;
  }

  render() {
    // console.log(this.state.listData);
    let body = this.state.listData.map(order => (
      <OrderCard
        id={order.id}
        key={order.id}
        name={order.name}
        price={order.price}
      />
    )); 
    return (
      <div>
        <h1>리스트</h1>
        <div>
          {body}
        </div>
      </div>
    );
  }
}

export default List;