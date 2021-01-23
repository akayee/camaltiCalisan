import CATEGORIES from '../../data/category-data'
import { CATEGORY_CHANGE } from '../actions/category';

const initialState = {
    avaliableCategories: CATEGORIES,
    selectedCategory:{}
};

export default (state = initialState, action) => {
    switch(action.type){
        case CATEGORY_CHANGE:
            
                return {
                    ...state,
                    selectedCategory: action.categoryData.id
                }
    };

    return state;
}