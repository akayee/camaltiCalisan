import React from 'react';
import { View, StyleSheet,Image, Button, Text, FlatList,ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import OfferProductItem from '../../components/shop/OfferProductItem';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';


const OffersDetail = props => {

    const offerId=props.route.params.offerId;
    const offers = useSelector(state => state.offer.availableOffers);
    const selectedOffer = offers.filter(offer=>offer.id === offerId)[0];
    const avaliableProducts = useSelector(state => state.products.availableProducts);
    const offerProducts= avaliableProducts.filter(product => selectedOffer.items.includes(product.id));
    return <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri:selectedOffer.imageUrl}} />
        <View style={styles.offerDetail}>  
        <Text style={styles.productsTitle}>Kampanya Detayları</Text> 
        <Text>{selectedOffer.summary ||'Kampanya aşağıdaki ürünleri içermektedir.'}</Text>         
        <Text style={styles.productsTitle} >Ürünler </Text>
        <View style={styles.productlist}> 
        </View>
        
        <FlatList
                data={offerProducts}
                horizontal
                keyExtractor={item => item.id}
                renderItem={itemData => <OfferProductItem image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                productId={itemData.item.id}
                onViewDetail={()=>{
                    props.navigation.navigate('ProductDetail',{productId:itemData.item.id, name:itemData.item.title})
                }}
                onAddToCart={()=>{}} />}
            />
        </View>
        <Button color={Colors.primary} title="Kampanyayı Sepete Ekle" />

    </ScrollView>
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image:{
        height:300,
        width:'100%'
    },
    productlist:{
        flex:1
    },
    productsTitle:{        
        fontWeight: "bold",
        fontSize: 18
    },
    offerDetail:{
        alignItems:'center'
    }
})

export default OffersDetail;