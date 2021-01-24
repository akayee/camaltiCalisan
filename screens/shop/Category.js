import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CategoryItem from '../../components/shop/CategoryItem';
import * as categoryActions from '../../store/actions/category';
import Colors from '../../constants/Colors';


import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');

const Category = props => {

    const offers = useSelector(state => state.offer.availableOffers);
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(offers);
        props.navigation.setOptions({
            headerRight: () => (null)
        });
    }, []);


    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.imageUrl }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.offerItem}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <Text style={styles.oldPrice}>
                        {item.oldAmount.toFixed(2)} ₺
                </Text>
                    <Text style={styles.newPrice}>
                        {item.newAmount.toFixed(2)} ₺
                </Text>
                </View>

            </View>
        );
    };
    //Navigation title güncelleme işlemi. Propsdan alarak güncelliyor.

    const orders = useSelector(state => state.orders.orders);
    const categories = useSelector(state => state.category.avaliableCategories);
    const dispatch = useDispatch();
    return <ScrollView style={styles.main1}>

        <View style={styles.container}>
            <Carousel
                loop
                autoplay
                autoplayDelay={3000}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
        {orders &&
            orders.map(order => <View style={styles.orders}>
                <Text style={styles.orderTitle}>Siparişler</Text>
                <Text style={styles.status}>{order.status}</Text>
                <Text style={styles.total}>{order.totalAmount} ₺ </Text>
                <TouchableOpacity>
                    <Icon name={Platform.OS === 'android' ? 'navigate-outline' : 'location-outline'}
                        size={23}
                        color='white'
                    />
                </TouchableOpacity>
            </View>)

        }


        <View style={styles.cardCategory}>
            <View >
                <Text style={styles.offerText}> Kategoriler</Text>
            </View>

            <View style={styles.main} >
                <FlatList
                    data={categories}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    renderItem={itemData => <CategoryItem image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        productId={itemData.item.id}
                        onProductSelected={() => {
                            dispatch(categoryActions.categoryChange(itemData.item.id))
                            props.navigation.navigate('Products');

                        }}
                    />}
                />
            </View>

        </View>
    </ScrollView>

};


const styles = StyleSheet.create({
    card: {
        flex: 1 / 2,
        padding: 5,
        margin: 5,
        marginTop: 20
    },
    cardCategory: {
        flex: 1,
        padding: 5,
        margin: 10
    },
    offerText: {
        fontWeight: "bold",
        fontSize: 18
    },
    main1: {
        flex: 1,
        backgroundColor: Colors.koyubeyaz,
    },
    main: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontWeight: "bold",
        fontSize: 15,
        color: '#888',
        padding: 5
    },
    newPrice: {
        fontSize: 20,
        color: Colors.primary
    },
    offerItem: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 50,
        left: 20,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center'
    },
    orders: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        marginTop:10,
        marginHorizontal: 10
    },
    orderTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'white'
    },
    status:{
        textTransform: 'uppercase'
    }
})

export default Category;