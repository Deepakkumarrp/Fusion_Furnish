import { ADD_TO_CART, DELETE_REQUEST, GET_SINGLE_SOFA_FAILURE, GET_SINGLE_SOFA_REQUEST, GET_SINGLE_SOFA_SUCCESS, GET_SOFAS_FAILURE, GET_SOFAS_REQUEST, GET_SOFAS_SUCCESS, POST_REQUEST } from "./productActionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    sofas: [],
    sofa: {},
    cart: []
}

export const productReducer = (state = initialState, action) => {
    let exist;
    switch (action.type) {
        case GET_SOFAS_REQUEST:
            return { ...state, isLoading: true };
        case GET_SOFAS_SUCCESS:
            return { ...state, isLoading: false, sofas: action.payload };
        case GET_SOFAS_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case GET_SINGLE_SOFA_REQUEST:
            return { ...state, isLoading: true };
        case GET_SINGLE_SOFA_SUCCESS:
            return { ...state, isLoading: false, sofa: action.payload}
        case GET_SINGLE_SOFA_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case ADD_TO_CART:
                return { ...state, cart: [...state.cart, action.payload] };
        case DELETE_REQUEST:
                return {
                    ...state,
                    isLoading: false,
                    sofas: state.sofas.filter((el) => el.id !== action.payload)
                }
        case POST_REQUEST:
            return{
                ...state,
                isLoading: false,
                sofas: [action.payload, ...state.sofas]
            }
        default:
            return state;
    }
}