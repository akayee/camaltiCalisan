import React from 'react';
import { FlatList, StyleSheet , Platform} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';

import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';



const ProductOverviewScreen = props => {

    //Navigation title güncelleme işlemi. Propsdan alarak güncelliyor.
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight:()=>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item  title='Cart' iconName={Platform.OS === 'android'?'md-cart': 'ios-cart'}  onPress={()=>{
                    props.navigation.navigate('Cart')
                }}/>
            </HeaderButtons>)
        });
    }, [props.navigation]);
    
    const products = useSelector(state => state.products.categoryProducts);
    const dispatch = useDispatch();
    return <FlatList 
    style={styles.list}
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        productId={itemData.item.id}
        onViewDetail={()=>{
            props.navigation.navigate('ProductDetail',{productId:itemData.item.id, name:itemData.item.title})
        }}
        onAddToCart={()=>{
            dispatch(cartActions.addToCart(itemData.item));
        }} />}
    />
};


const styles = StyleSheet.create({
    list:{
        flex:1
    }
})

export default ProductOverviewScreen;