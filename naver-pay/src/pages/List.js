import React, {Component} from 'react';
import API from '../utils/API';
import i18n from '../utils/i18n';

import ItemCard from '../components/ItemCard';
import './List.scss';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      startDate: '',
      endDate: ''
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.getListAgain = this.getListAgain.bind(this);
  }
  async getListAgain() {
    //let listData = await API.request('order_list', {'user_id':'test', 'startDate': startDate, 'endDate': endDate});
    // this.setState({listData: listData});
    //console.log(listData);
  }
  setStartDate(date) {
    this.setState({
      startDate: date
    });
  }
  setEndDate(date) {
    this.setState({
      endDate: date
    });
  }

  getMonthAgo(n) {
    const d = new Date();
    d.setMonth(d.getMonth() - n);
    return d;
  }

  
  async componentDidMount() {
    const startDate = this.getMonthAgo(1);
    const endDate = new Date();
    this.setState({startDate: startDate});
    this.setState({endDate: endDate});
    console.log(startDate, endDate);
    const res = await API.request('order_list', {'user_id':'test'});
    this.setState({listData: res.body[0].orders}) ;
  }

  render() {
    let body = [];
    this.state.listData.forEach(order => {
      order.items.forEach(item => {
        body.push((
          <ItemCard
            id={item.id}
            order={order}
            key={`card_${order.id}_${item.id}`}
            name={item.name}
            price={item.price}
            status={item.status}
          />
        ));
      });
    });
    return (
      <div className="List">
        <h1>{this.props.lang['my_order_list']}</h1>
        <div className="List-OptionTable">
          <DatePicker
            className="List-DatePicker"
            dateFormat="yyyy-MM-dd"
            selected={this.state.startDate}
            onChange={this.setStartDate}
          />
          <DatePicker
            className="List-DatePicker"
            dateFormat="yyyy-MM-dd"
            selected={this.state.endDate}
            onChange={this.setEndDate}
          />
          <button className="btn btn-sm btn-secondary" onClick={this.getListAgain}>조회</button>
        </div>
        <div className="List-Box">
          {body}
        </div>
      </div>
    );
  }
}

export default i18n(List);