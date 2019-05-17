import { observable, action, toJS } from 'mobx';
import { getPayOrderList } from '../apis/nPayApi';

export class OrderStore {
    @observable orderListArray = [];
    @observable itemListArray = [];
    @observable orderDate = [];
    @observable startDate = '2018-01-21';
    @observable endDate = '2018-02-23';


    @action
    searchDate = async (userId, start, end) => {
      await getPayOrderList(`${userId}?startDate=${this.startDate}&endDate=${this.endDate}`)
      .then(orders => {
        this.setOrderDate(orders.body[0].orders);
        this.setOrderList(orders.body[0].orders);
        this.setItemList(orders.body[0].orders);
      });
    }

    @action
    compStringReverse(a, b) {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    }

    @action
    setOrderDate = (orders) => {
      for(let i = 0; i < orders.length; i++) {
        let date;
        date = orders[i].date.substr(0,10) + ' ' + orders[i].date.substr(11, 8);
        this.orderDate.push(date)
      }
      this.orderDate = this.orderDate.sort(this.compStringReverse);
    }

    @action
    getOrderList = async (userId) => {
      await getPayOrderList(userId)
      .then(orders => {
        this.setOrderDate(orders.body[0].orders);
        this.setOrderList(orders.body[0].orders);
        this.setItemList(orders.body[0].orders);
      });
    };

    @action
    setOrderList = (orders) => {
      for(let i = 0; i < 10; i++) {
        this.orderListArray = {
          ...this.orderListArray,
          [this.orderDate[i]]: orders[i]
        }
      }
    }

    @action
    setItemList = (orders) => {
      for(let i = 0; i<10; i++) {
        this.orderItemArray = {
          ...this.orderItemArray,
          [this.orderDate[i]]: orders[i].items
        }
      }
    }
}