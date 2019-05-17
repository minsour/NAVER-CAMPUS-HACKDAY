import React from 'react'
import Link from "next/link";
import Layout from '../components/Layout';
import Picker from '../components/Picker';
import { OrderList } from '../components/OrderList';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <OrderList/>
      </Layout>
    )
  }
}