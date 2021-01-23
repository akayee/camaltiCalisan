import PRODUCTS from '../../data/dummy-data'
import { CATEGORY_CHANGE } from '../actions/category';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.id === 'u1'),
    categoryProducts:{}
};

export default (state = initialState, action) => {
    switch(action.type){
        case CATEGORY_CHANGE:
            const categoryProducts = state.availableProducts.filter(item=> item.catId=== action.categoryData.id);
                return {
                    ...state,
                    categoryProducts: categoryProducts
                }
    };

    return state;
}