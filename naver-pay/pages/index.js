import React from 'react'
import Link from "next/link";
import Layout from '../components/Layout';
import Picker from '../components/Picker';
import { OrderList } from '../components/OrderList';
import Search from '../components/Search';
import Divider from '@material-ui/core/Divider';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Search />
        <Divider />
        <OrderList/>
      </Layout>
    )
  }
}