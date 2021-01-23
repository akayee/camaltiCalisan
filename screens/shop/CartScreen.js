import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';


import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/order';



const CartScreen = props => {

    //Navigation title güncelleme işlemi. Propsdan alarak güncelliyor.
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (null)
        });
    }, [props.navigation]);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const deviceId= "Sonra yap";
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
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });
    const dispatch = useDispatch();
    return <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summarText}> Toplam:
            <Text style={styles.amount}> {totalAmount.toFixed(2)}₺</Text>
            </Text>
            <Button color={Colors.accent} title="Sipariş Ver" onPress={() => {
                dispatch(orderActions.addOrder('hazırlanıyor',cartItems, totalAmount, deviceId))
            }} />
        </View>
        <View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        price={itemData.item.sum}
                        productId={itemData.item.productId}
                        deletable
                        onRemove={() => {
                            dispatch(cartActions.removeFromCart(itemData.item.productId));
                        }} />)} />
        </View>

    </View>

}

const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summarText: {
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
});

export default CartScreen;