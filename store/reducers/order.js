import Order from "../../models/order";
import { ADD_ORDER } from "../actions/order";

const initialState = {
    orders:[]
};

export default (state = initialState , action)=>{
    switch(action.type){
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.status,
                action.orderData.items,
                action.orderData.amount, 
                new Date(),
                action.orderData.deviceId);
                return {
                    ...state,
                    orders: state.orders.concat(newOrder)
                }
    };
    
    return state;
}