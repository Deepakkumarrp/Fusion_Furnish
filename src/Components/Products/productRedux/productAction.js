import axios from "axios";
import { ADD_TO_CART, DELETE_REQUEST, GET_SINGLE_SOFA_FAILURE, GET_SINGLE_SOFA_REQUEST, GET_SINGLE_SOFA_SUCCESS, GET_SOFAS_FAILURE, GET_SOFAS_REQUEST, GET_SOFAS_SUCCESS, REMOVE_FROM_CART, clean_Cart, decrease_Qty, increase_Qty } from "./productActionTypes";
import { useDispatch } from "react-redux";

const url = "https://mock-api-latest.onrender.com/Furniture";
export const getSofas = (value) => {
    return async (dispatch) => {
        dispatch({ type: GET_SOFAS_REQUEST });
        try {
            const response = await axios.get(`${url}?category=${value || "Sofas"}`);
            dispatch({ type: GET_SOFAS_SUCCESS, payload: response.data });
        }
        catch (error) {
            console.error(error);
            dispatch({ type: GET_SOFAS_FAILURE, payload: error });
        }
    }
}

export const getsingleSofa = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_SINGLE_SOFA_REQUEST });
        try {
            const response = await axios.get(`${url}/${id}`);
            console.log(response.data);
            dispatch({ type: GET_SINGLE_SOFA_SUCCESS,payload:response.data });
        }
        catch (error) {
            console.error(error);
            dispatch({ type: GET_SINGLE_SOFA_FAILURE });
        }
    }
}

export const addToCart = (item, dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: item });
}

export const removeFromCart = (payload) => {
    return {
      type: REMOVE_FROM_CART,
      payload: payload,
    };
  };
  export const increaseQty = (payload) => {
    return {
      type: increase_Qty,
      payload: payload,
    };
  };
  export const decreaseQty = (payload) => {
    return {
      type: decrease_Qty,
      payload: payload,
    };
  };
  export const cleanCart = () => {
    return {
      type: clean_Cart,
    };
  };

// Admin
export const updateSofa = (id,formData) => {
    return async (dispatch) => {
        dispatch({ type: GET_SINGLE_SOFA_REQUEST });
        try {
            const response = await axios.patch(`${url}/${id}`,formData);
            console.log(response.data);
            dispatch({ type: GET_SINGLE_SOFA_SUCCESS,payload:response.data });
        }
        catch (error) {
            console.error(error);
            dispatch({ type: GET_SINGLE_SOFA_FAILURE });
        }
    }
}

export const addNewSofa = (formData) => {
    return async (dispatch) => {
        dispatch({ type: GET_SINGLE_SOFA_REQUEST });
        try {
            const response = await axios.post(`${url}`,formData);
            console.log(response.data);
            dispatch({ type: POST_REQUEST,payload:response.data });
            // dispatch({ type: GET_SINGLE_SOFA_SUCCESS,payload:response.data });
        }
        catch (error) {
            console.error(error);
            dispatch({ type: GET_SINGLE_SOFA_FAILURE });
        }
    }
}

export const deleteSofa = (id) => {
    return async (dispatch) => {
        // dispatch({ type: GET_SINGLE_SOFA_REQUEST });
        try {
            const response = await axios.delete(`${url}/${id}`);
            console.log(response.data);
            dispatch({ type: GET_SINGLE_SOFA_SUCCESS,payload:response.data });
            dispatch({ type: DELETE_REQUEST,payload:response.data.id });
        }
        catch (error) {
        //     console.error(error);
        //     dispatch({ type: GET_SINGLE_SOFA_FAILURE });
        }
    }
}