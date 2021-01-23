export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (status,cartItems, totalAmount, deviceId) => {
    return {
        type: ADD_ORDER,
        orderData: {status:status, items: cartItems, amount: totalAmount, deviceId }
    };
};