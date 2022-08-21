<<<<<<< HEAD
import { GET_PRODUCTS, GET_PRODUCTS_BY_NAME } from "./actions";
=======
import {
 GET_PRODUCTS,
 GET_PRODUCTS_BY_NAME,
 GET_PRODUCT_BY_ID,
 CLEAR_DETAIL,
 GET_PRODUCTS_FILTER,
 GET_CATEGORIES,
 GET_CATEGORY_PRODUCTS_BY_ID,
} from "./actions";
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27

const initialState = {
 products: [],
 allProducts: [],
 searchedProducts: [],
 product: {},
 categories: [],
};

export const reducer = (state = initialState, action) => {
 switch (action.type) {
  case GET_PRODUCTS:
   return {
    ...state,
    products: action.payload,
    allProducts: action.payload,
   };
  case GET_PRODUCTS_BY_NAME:
   return {
    ...state,
    searchedProducts: [...action.payload],
   };
<<<<<<< HEAD
=======
  case GET_PRODUCT_BY_ID: {
   return {
    ...state,
    product: action.payload,
   };
  }
  case CLEAR_DETAIL: {
   return {
    ...state,
    product: {},
   };
  }
  case GET_PRODUCTS_FILTER: {
   return {
    ...state,
    searchedProducts: [...action.payload],
   };
  }
  case GET_CATEGORIES:
   return {
    ...state,
    categories: [...action.payload],
   };
  case GET_CATEGORY_PRODUCTS_BY_ID:
   return {
    ...state,
    searchedProducts: [...action.payload],
   };
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
  default:
   return state;
 }
};
