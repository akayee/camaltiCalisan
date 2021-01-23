
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './navigation/AppContainer';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';
import categoryReducer from './store/reducers/category';
import offerReducer from './store/reducers/offer'


const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  orders:orderReducer,
  category:categoryReducer,
  offer:offerReducer
});
const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;