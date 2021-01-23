import React,{useState} from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors';

import Counter from './Counter';



const ProductItem = props => {
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
                            <Text style={styles.price} numberOfLines={1}>{props.price.toFixed(2)}₺</Text>
                        </View>
                        <View style={styles.actions}>                            
                                <View style={styles.buttonview}>
                                    <Counter productId={props.productId} title={props.title} onAddToCart={props.onAddToCart} />                      
                                    
                                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        padding: 10,
        paddingHorizontal: 10
    },
    title: {
        width: '70%',
        fontSize: 12,
        marginVertical: 4
    },
    price: {
        width: '30%',
        fontSize: 13,
        color: '#888'
    },
    actions: {
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    buttontext: {
        alignItems: "center",
        justifyContent: 'center',
        color: Colors.primary
    },
    buttonview: {
        alignItems: "center",
        justifyContent: 'center',
    }
});

export default ProductItem;