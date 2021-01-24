import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const CategoryList = props =>{

    return <View style={styles.listItem}>
        <TouchableOpacity onPress={props.onProductSelected}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </TouchableOpacity>
    </View>
}

export default CategoryList;

const styles = StyleSheet.create({
    listItem: {
        height:40,
        borderColor:Colors.primary,
        borderRadius:6,
        backgroundColor:'white',
        padding:5,
        marginHorizontal:5,
        shadowColor: Colors.primary,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    title:{
    fontSize:18,
    color:Colors.primary
    }
})