import axios from "axios";
import { ADD_TO_CART, GET_SINGLE_SOFA_FAILURE, GET_SINGLE_SOFA_REQUEST, GET_SINGLE_SOFA_SUCCESS, GET_SOFAS_FAILURE, GET_SOFAS_REQUEST, GET_SOFAS_SUCCESS } from "./productActionTypes";
import { useDispatch } from "react-redux";

const url = "https://mock-api-latest.onrender.com/ChildrenFurniture";
export const getSofas = () => {
    return async (dispatch) => {
        dispatch({ type: GET_SOFAS_REQUEST });
        try {
            const response = await axios.get(url);
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