const redux = require('redux');
const storeReducer = require('./product.reducer');
export const store =  redux.createStore(storeReducer);

