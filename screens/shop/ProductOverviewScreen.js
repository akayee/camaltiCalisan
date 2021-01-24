import React from 'react';
import { FlatList, StyleSheet, Platform, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import CategoryList from  '../../components/shop/CategoryList';
import HeaderButton from '../../components/UI/HeaderButton';

import * as cartActions from '../../store/actions/cart';
import * as categoryActions from '../../store/actions/category';



const ProductOverviewScreen = props => {

    //Navigation title güncelleme işlemi. Propsdan alarak güncelliyor.
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {
                    props.navigation.navigate('Cart')
                }} />
            </HeaderButtons>)
        });
    }, [props.navigation]);
    const categories = useSelector(state => state.category.avaliableCategories);
    const products = useSelector(state => state.products.categoryProducts);
    const dispatch = useDispatch();
    return <View style={styles.list}>
        <View style={styles.categoryList} >
        <FlatList
            data={categories}
            horizontal
            keyExtractor={item => item.id}
            renderItem={itemData =><CategoryList title={itemData.item.title} onProductSelected={() => {
                dispatch(categoryActions.categoryChange(itemData.item.id))
            }} />}
        />
        </View>
        <View style={styles.list}>
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                productId={itemData.item.id}
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetail', { productId: itemData.item.id, name: itemData.item.title })
                }}
                onAddToCart={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                }} />}
        />
        </View>
        
    </View>
};


const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    categoryList:{
        paddingTop:5
    }
})

export default ProductOverviewScreen;