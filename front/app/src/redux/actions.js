import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
<<<<<<< HEAD
=======
export const GET_PRODUCTS_FILTER = "GET_PRODUCTS_FILTER";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_PRODUCTS_BY_ID = "GET_CATEGORY_PRODUCTS_BY_ID";
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27

export const getProducts = () => {
 return async function (dispatch) {
  try {
   let json = await axios.get("http://localhost:3001/products");
   return dispatch({
    type: "GET_PRODUCTS",
    payload: json.data,
   });
  } catch (error) {
   console.log(error);
  }
 };
<<<<<<< HEAD
=======
};

export const getProductId = (id) => {
 return async function (dispatch) {
  try {
   const response = await axios.get(`http://localhost:3001/products/${id}`);
   return dispatch({
    type: GET_PRODUCT_BY_ID,
    payload: response.data,
   });
  } catch (error) {
   console.log(`can not find product with id: ${id}`, error);
  }
 };
};

export const postProduct = (product) => {
 return async function (dispatch) {
  try {
   const response = await axios.post("http://localhost:3001/products", product);
   return dispatch({
    type: POST_PRODUCT,
    payload: response.data,
   });
  } catch (error) {
   console.log("can not post product", error);
  }
 };
};

export const clearDetail = () => {
 return {
  type: CLEAR_DETAIL,
 };
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
};

export const getProductsByName = (textInput) => {
 return (dispatch) => {
  axios
   .get(`http://localhost:3001/products?name=${textInput}`)
   .then((response) => {
<<<<<<< HEAD
    console.log({ from: "action creator getProductsById", response: response });
=======
    console.log({
     from: "action creator getProductsById",
     response: response,
    });
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
    dispatch({
     type: GET_PRODUCTS_BY_NAME,
     payload: response.data.data,
    });
   })
   .catch((err) => {
    console.log({ from: "action creator getProductsByName", err });
   });
 };
};
<<<<<<< HEAD
=======

export const getProductsFilter = (name, max, min, asc, desc) => {
 let url = new URL("http://localhost:3001/products");
 if (!!name) url.searchParams.append("name", name);
 if (!!max) url.searchParams.append("max", max);
 if (!!min) url.searchParams.append("min", min);
 if (!!asc) url.searchParams.append("asc", asc);
 if (!!desc) url.searchParams.append("desc", desc);
 console.log(url.href);
 return (dispatch) => {
  axios
   .get(url.href)
   .then((response) => {
    dispatch({ type: GET_PRODUCTS_FILTER, payload: response.data.data });
   })
   .catch((err) => {
    console.log({ from: "action creator getProductsFilter", err });
   });
 };
};

export const getCategories = () => {
 return (dispatch) => {
  axios
   .get("http://localhost:3001/categories")
   .then((response) => {
    console.log({ from: "action creator getCategories", response });
    dispatch({
     type: GET_CATEGORIES,
     payload: response.data.data,
    });
   })
   .catch((err) =>
    console.log({ m: "Error on action creator getCategories", err })
   );
 };
};

export const getCategoryProductsById = (id) => {
 return (dispatch) => {
  axios
   .get(`http://localhost:3001/products/category/${id}`)
   .then((response) => {
    console.log({ from: "action creator getCategoryProductsById", response });
    dispatch({
     type: GET_CATEGORY_PRODUCTS_BY_ID,
     payload: response.data.data,
    });
   })
   .catch((err) =>
    console.log({ m: "Error on action creator getCategoryProductsById", err })
   );
 };
};
>>>>>>> 9a465cf1474bc35bdf14a773dbe88451e0a43e27
