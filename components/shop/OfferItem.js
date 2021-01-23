import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';




const OfferItem = props => {

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableOpacity onPress={props.onProductSelected} useForeground>
                    <View>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                            <View style={styles.price}>
                                <Text style={styles.title}>
                                    {props.title}
                                </Text>
                                <Text style={styles.oldPrice}>
                                    {props.oldPrice.toFixed(2)} ₺
                                </Text>
                                <Text style={styles.newPrice}>
                                    {props.newPrice.toFixed(2)} ₺
                                </Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    product: {
        flex: 1,
        width: Math.round(Dimensions.get('window').width - 50),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 5,

    },
    touchable: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageView: {
        height: '100%'
    },
    image: {
        flex: 1,
        width: '100%',
        height: 150
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        fontSize: 18
    },
    price: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 5,
        margin: 15,
        backgroundColor: 'white',
        opacity: 0.8,
        right: 0, bottom: 0,
        borderRadius:10
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',        
        fontWeight: "bold",
        fontSize: 12,
        color: '#888',
        padding:5
    },
    newPrice: {
        fontSize: 18,
        color: Colors.primary
    },
});

export default OfferItem;