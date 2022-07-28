import {TYPES} from '../actions/cartActions'
export const cartInitializer = {
    cart: []
}
export const cartReducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        case TYPES.ADD_ITEM:{
            let newItem = state.cart.find(products => products._id === action.payload)
            return newItem? {
                ...state,
                cart:state.cart.map((item) => 
                item._id === newItem._id
                ?{...item,qty: item.qty + 1 }
                : item)}:{cart: [...state.cart,{qty : 1, _id: action.payload}]}
        }
        case TYPES.REMOVE_ITEM:{
            let itemToDelete = state.cart.find(products => products._id === action.payload)
            return itemToDelete.qty  > 1 ? {...state,
                cart:state.cart.map((item) => 
                item._id === action.payload
                ?{...item,qty: item.qty - 1, total: action.totalLoad }
                : item)}:
                {...state, cart: state.cart.filter((item) => item._id !== action.payload)}
        }
        case TYPES.REMOVE_ALL:{
            let itemToDelete = state.cart.find(products => products._id === action.payload)
            return itemToDelete.qty  > 1 ? {...state,
                cart:state.cart.map((item) => 
                item._id === action.payload
                ?{...item,qty: item.qty - 1, total: action.totalLoad }
                : item)}:
                {...state, cart: state.cart.filter((item) => item._id !== action.payload)}
        }
        default:
            break;
    }
}