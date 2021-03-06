import { ActionTypes } from "../contants/action-type";

const initialState = {
    products: [{
        id:1,
        title: "Dipesh",
        category: "programmer"
    }],
}

export const productReducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload}
        default:
            return state
    }
}