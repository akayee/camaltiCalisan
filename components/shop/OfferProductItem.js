import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors';

import Counter from './Counter';



const OfferProductItem = props => {
    const [isOnCard, setİsOnCard] = useState(false);
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View>

                        <Image style={styles.image} source={{ uri: props.image }} />
                        <View style={styles.detail}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            
                        </View>
                        <View style={styles.priceView}>
                            <Text style={styles.price} >{props.price.toFixed(2)}₺</Text>
                            </View>
                        
                    </View>
                </TouchableCmp>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    product: {
        flex: 1,
        minWidth: '40%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 200,
        margin: 20,

    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    detail: {
        alignItems: 'center',
        height: '20%',
        padding: 5,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 15,
        marginVertical: 4
    },
    price: {
        fontSize: 16,
        color: '#888',        
        fontWeight: "bold",
    },
    priceView: {
        flexDirection:'row',
        justifyContent: 'flex-end',
        height:'20%',
        padding:5
    }

});

export default OfferProductItem;