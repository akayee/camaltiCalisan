import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-ionicons';
import Colors from '../../constants/Colors'

const CarItem = props => {
    return (
        <View style={styles.carItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.title} numberOfLines={1}>{props.title} </Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>{props.price.toFixed(2)} ₺</Text>
                {props.deletable && <TouchableOpacity
                quantity={props.quantity} 
                onPress={props.onRemove} 
                style={styles.deleteButton}>
                    <Icon name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="red"
                    />
                </TouchableOpacity>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    carItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontSize: 16,
        color: '#888'
    },
    title: {
        fontSize: 16
    },
    amount: {
        fontSize: 16,
        color:Colors.primary
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CarItem;