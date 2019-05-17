import React, {Component} from 'react';
import API from '../utils/API';
import i18n from '../utils/i18n';

import ItemCard from '../components/ItemCard';
import DatePicker from 'react-datepicker';
import formatter from '../utils/formatter';

import './List.scss';
import "react-datepicker/dist/react-datepicker.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItemObjectsWhole: [],
      orderItemObjects: [],
      orderItemLastIndex: 0,
      startDate: '',
      endDate: '',
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.filterSubmit = this.filterSubmit.bind(this);
    this.nextPageLoad = this.nextPageLoad.bind(this);
  }

  itemPerPage = 10;

  async filterSubmit() {
    if (this.state.startDate > this.state.endDate) {
      alert("날짜 선택이 잘못 되었습니다.");
      return;
    }
    let res = await API.request('order_list_with_date', 
      { 'user_id':'test',
        'startDate': formatter.date(this.state.startDate, '-'),
        'endDate': formatter.date(this.state.endDate, '-')
      }
    );
    const listData = res.body[0].orders;
    let myArr = [];
    listData.forEach(order => {
      order.items.forEach(item => {
        myArr.push(
          {
            'id': item.id,
            'order': order,
            'name': item.name,
            'price': item.price,
            'status': item.status
          }
        );
      });
    });
    this.setState({orderItemObjectsWhole: myArr});
    this.setState({orderItemObjects: myArr.slice(0, this.itemPerPage)});
    this.setState({orderItemLastIndex: this.itemPerPage});
  }
  nextPageLoad() {
    if (this.state.orderItemObjectsWhole.length < this.state.orderItemLastIndex) {
      alert("더 이상 데이터가 없습니다.");
      return;
    }
    this.setState({orderItemObjects: this.state.orderItemObjectsWhole.slice(0, this.state.orderItemLastIndex + this.itemPerPage)});
    this.setState({orderItemLastIndex: this.state.orderItemLastIndex + this.itemPerPage});
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

  setMonth(n) {
    var firstDay = new Date(n.getFullYear(), n.getMonth(), 1);
    var lastDay = new Date(n.getFullYear(), n.getMonth() + 1, 0);
    this.setState({startDate: firstDay, endDate: lastDay});
  }
  
  async componentDidMount() {
    const startDate = this.getMonthAgo(1);
    const endDate = new Date();
    let listData = [];
    this.setState({startDate: startDate});
    this.setState({endDate: endDate});
    console.log(startDate, endDate);
    const res = await API.request('order_list', {'user_id':'test'});
    listData = res.body[0].orders;

    let myArr = [];
    listData.forEach(order => {
      order.items.forEach(item => {
        myArr.push(
          {
            'id': item.id,
            'order': order,
            'name': item.name,
            'price': item.price,
            'status': item.status
          }
        );
      });
    });
    this.setState({orderItemObjectsWhole: myArr});
    this.setState({orderItemObjects: myArr.slice(0, this.itemPerPage)});
    this.setState({orderItemLastIndex: this.itemPerPage});
  }

  render() {
    let body = this.state.orderItemObjects.map(obj => 
      <ItemCard
        id={obj.id}
        order={obj.order}
        key={`card_${obj.order.id}_${obj.id}`}
        name={obj.name}
        price={obj.price}
        status={obj.status}
      />
    );
    
    let setMonthBtn = [];
    for (let i=5; i>=0; i--) {
      setMonthBtn.push(
        <button
          className="btn btn-sm btn-outline-secondary mr-1"
          key={`set_month_${i}`}
          onClick={() => this.setMonth(this.getMonthAgo(i))}
        >
          {this.getMonthAgo(i).getMonth()+1}월
        </button>
      )
    }

    return (
      <div className="List">
        <h1>{this.props.lang['my_order_list']}</h1>
        <div className="List-OptionTable">
          {setMonthBtn}
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
          <button className="btn btn-sm btn-secondary" onClick={this.filterSubmit}>조회</button>
        </div>
        <div className="List-Box">
          {body}
        </div>
        {this.state.orderItemObjectsWhole.length > this.state.orderItemLastIndex ? 
          <button className="btn btn-lg btn-primary mt-2" onClick={this.nextPageLoad}>더보기</button> : '' }
      </div>
    );
  }
}

export default i18n(List);