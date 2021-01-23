import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem'

const OrderScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    return <FlatList
        data={orders}
        renderItem={itemData => <OrderItem amount={itemData.item.totalAmount} date={itemData.item.readableData} items={itemData.item.items} status={itemData.item.status} />} />

};


export default OrderScreen;