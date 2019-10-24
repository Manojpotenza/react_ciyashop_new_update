/**
 * Product Reducers Data
 */
import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual'
import products  from './products';
import filters from './filters';


export default combineReducers({
    data: products,
    filters: filters,
    Intl
});