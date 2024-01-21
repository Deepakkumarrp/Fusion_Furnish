import { ADD_TO_CART, ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT, DARK_MODE, DELETE_REQUEST, GET_SINGLE_SOFA_FAILURE, GET_SINGLE_SOFA_REQUEST, GET_SINGLE_SOFA_SUCCESS, GET_SOFAS_FAILURE, GET_SOFAS_REQUEST, GET_SOFAS_SUCCESS, LIGHT_MODE, LOGGED_IN, LOGGED_OUT, POST_REQUEST, REMOVE_FROM_CART, clean_Cart, decrease_Qty, increase_Qty } from "./productActionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    sofas: [],
    sofa: {},
    cart: [],
    isLightMode : true, 
    isLogin : false,
    isAdmin : false,
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
            case ADD_TO_CART: {
                let check = false;
                let map = state.cart.map((ele) => {
                    if (ele.id == action.payload.id) {
                        check = true;
                        return { ...ele, qty: ele.qty + 1 };
                    } else {
                        return ele;
                    }
                });
                if (check) {
                    return {...state, cart:map};
                } else {
                    return { ...state, cart: [...state.cart, action.payload] };
                }
            }
            case REMOVE_FROM_CART: {
                let fil = state.cart.filter((ele) => {
                    return ele.id != action.payload;
                });
                return {...state, cart:fil};
            }
            case increase_Qty: {
                let map = state.cart.map((ele) => {
                    if (ele.id == action.payload) {
                        return { ...ele, qty: ele.qty + 1 };
                    } else {
                        return ele;
                    }
                });
                return {...state, cart:map};
            }
            case decrease_Qty: {
                let map = state.cart.map((ele) => {
                    if (ele.id == action.payload && ele.qty > 1) {
                        return { ...ele, qty: ele.qty - 1 };
                    } else {
                        return ele;
                    }
                });
                return {...state, cart:map};
            }
            case clean_Cart: {
                return {
                    ...state,
                    cart : []
                };
            }
            case LOGGED_IN:
                return {
                    ...state,
                    isLogin: true
                }
            case LOGGED_OUT:
                return {
                    ...state,
                    isLogin: false,
                    isAdmin: false
                }
            case ADMIN_LOGGED_IN:
                return {
                    ...state,
                    isAdmin: true
                }
            case ADMIN_LOGGED_OUT:
                return {
                    ...state,
                    isAdmin: false
                }
            case LIGHT_MODE:
                return{
                    ...state,
                    isLightMode : true
                }
            case DARK_MODE:
                return{
                    ...state,
                    isLightMode : false
                }
        default:
            return state;
    }
}