import React from 'react';
import Platform from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import Category from '../screens/shop/Category';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import OffersDetail from '../screens/shop/OffersDetail';



const headerOptions= {
  headerTintColor: Platform.OS === 'android' ? Colors.primary : 'white',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'white' : Colors.primary          
  }
};


//Header düzenlemeleri navigator screenOptions üzerinden yapılıyor. Sayfalara özel düzenlemeler screen üzerinden yapılıyor.
//Tab menüsündeki home stack navigator burada tanımlanıyor.

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {

  return (
    <HomeStack.Navigator initialRouteName="Category" headerMode="screen"
      screenOptions={headerOptions}>
      <HomeStack.Screen name="Category" component={Category} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} />        
      <HomeStack.Screen name="OffersDetail" component={OffersDetail} />     
      <HomeStack.Screen name="Products" component={ProductOverviewScreen} />   
      <HomeStack.Screen name="Cart" component={CartScreen} />  
      

    </HomeStack.Navigator>
  );
};

//Tab manüsündeki Order stack navigation burada tanımlanıyor.

const OrderStacK = createStackNavigator();
const OrderStackScreen = () => {

  return (
    <OrderStacK.Navigator initialRouteName="Orders" headerMode="screen"
      screenOptions={headerOptions}> 
      <OrderStacK.Screen name="Orders" component={OrderScreen} />
      

    </OrderStacK.Navigator>
  );
};
// Yukarıda tanımladığımız navigate Stack'i component olarak kullandığımızda yukarıdaki ekranlarıda dahil etmiş oluyoruz.
//Tab navigationı burada tanımlıyoruz. Tab menüsündeki her elemanın kendi stack navigatoru olmalı


const Tab = createBottomTabNavigator();
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Category" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Category') {
              iconName = focused
                ? 'apps-outline'
                : 'albums-outline';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'folder-open-outline' : 'folder-outline';
            }
            size=30;
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 15,
            margin: 0,
            padding: 0,
          },
        }} >
        <Tab.Screen name="Category" component={HomeStackScreen} />
        <Tab.Screen name="Orders" component={OrderStackScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigationContainer;
