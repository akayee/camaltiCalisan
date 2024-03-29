import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors';




const CategoryItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>            
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onProductSelected} useForeground>
                    <View>
                        <View style={styles.imageView}><Image style={styles.image} source={{ uri: props.image }} /></View>
                        
                        <View style={styles.detail}>
                            <Text style={styles.title} >{props.title}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    product: {
        flex: 1/3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        height: 100,
        margin: 10

    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 100
    },
    imageView: {
        height: '100%'
    },
    detail: {
        position:'absolute',
        bottom:5,
        width:'90%',
        alignItems: 'center',        
        borderRadius: 15,  
        backgroundColor:'white',
        margin:6
    },
    title: {
        fontSize: 15,
        marginVertical: 4,
        flex: 1, 
        flexWrap: 'wrap'
    }
});

export default CategoryItem;