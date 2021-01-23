import React from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native';
import  Colors  from '../../constants/Colors'
import { useSelector,useDispatch } from 'react-redux';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import * as cartActions from '../../store/actions/cart';



const ProductDetailScreen = props => {

    //Navigation title güncelleme işlemi. Propsdan alarak güncelliyor.
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.name === '' ? 'No title' : props.route.params.name,
            headerRight:()=>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item  title='Cart' iconName={Platform.OS === 'android'?'md-cart': 'ios-cart'}  onPress={()=>{
                    props.navigation.navigate('Cart')
                }}/>
            </HeaderButtons>)
        });
    }, [props.navigation, props.route.params.name]);

    const dispatch = useDispatch();
    
    const productId = props.route.params.productId;//Propsdan gönderdiğimiz product id alınıyor
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));//Storedan çektiğimiz veriden datamız bulunuyor.
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri:selectedProduct.imageUrl}} />
            <View style={styles.actions}><Button color={Colors.primary} title='Sepete Ekle' onPress={()=>{
                dispatch(cartActions.addToCart(selectedProduct))
            }} /></View>
            
            <Text style={styles.price}>{selectedProduct.price.toFixed(2)}₺</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    actions:{
        marginVertical:10,
        alignItems:'center'
    },
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20
    }

});

export default ProductDetailScreen;