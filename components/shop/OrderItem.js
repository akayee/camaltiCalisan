import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import CartItem from './CartItem';

const OrderItem = props => {

    const [showDetail, setshowDetail] = useState(false);
    return <View style={styles.orderItem}>
        <View style={styles.orderSummary}>
            <Text style={styles.totalAmount}> {props.amount.toFixed(2)}₺</Text>
            <Text style={styles.date}>{props.date}</Text>
        </View>
        <Button color={Colors.primary} title={showDetail ?"Gizle":"Detaylar"} onPress={() => {
            setshowDetail(prevState => !prevState);
        }} />
        {showDetail && <View style={styles.detailItems}>
            {props.items.map(cartItem => <CartItem
                key={cartItem.productId}
                quantity={cartItem.quantity}
                price={cartItem.sum}
                title={cartItem.productTitle} />)}
                <Text>{props.status}</Text>
        </View>}
    </View>
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    orderSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontSize: 16
    },
    date: {
        fontSize: 16,
        color: '#888'
    },
    detailItems:{
       width:'100%' 
    }
});

export default OrderItem;