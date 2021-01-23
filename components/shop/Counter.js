import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const Counter = props => {
    const [isOnCard, setIsOnCard] = useState(true);

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].ProductTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }          
        return transformedCartItems.filter(item=> item.productId=== props.productId)[0];
    });
    const dispatch = useDispatch();
    return <View >
        {isOnCard ? <TouchableOpacity
            onPress={()=>{setIsOnCard(false); props.onAddToCart()}} >
            <Icon name='add-outline' size={30} color={Colors.primary} />
        </TouchableOpacity> : <View style={styles.counter}>
                <View style={styles.counterImage}>
                    <TouchableOpacity onPress={() => {
                         if(cartItems.quantity===1){
                            setIsOnCard(true);
                        }
                        dispatch(cartActions.removeFromCart(cartItems.productId));
                         }}>
                        <Icon name='chevron-back-outline' size={20} color='red' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>
                        {cartItems?cartItems.quantity:0 }
                    </Text>
                </View>
                <View style={styles.counterImage}>
                    <TouchableOpacity onPress={()=>{setIsOnCard(false); props.onAddToCart()}}>
                        <Icon name='chevron-forward-outline' size={20} color='green' />
                    </TouchableOpacity>
                </View>
            </View>}

    </View>
}

const styles = StyleSheet.create({
    counter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5,
    },
    text: {
        fontSize: 15
    },
    counterImage: {
        paddingHorizontal: 5
    }
})

export default Counter;