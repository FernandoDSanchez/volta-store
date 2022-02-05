import React, { useState, useEffect,useReducer, createContext } from "react";
import { CheckOut } from "./pages/Checkout";
import {get} from './utils/get'
import {cartReducer,cartInitializer} from './reducers/cartReducer'
import {TYPES} from "./actions/cartActions"

export const GlobalContext = createContext()

export const App = () => { 
    const [items, setItems] = useState([]);

    useEffect(() => {
        get().then((data) => setItems(data))
    },[])
    const [state, dispatch] = useReducer(cartReducer, cartInitializer)

    const increase = (id) => {
        dispatch({type:TYPES.ADD_ITEM, payload: id})
    }
    const decrease = (id) => {
        dispatch({type:TYPES.REMOVE_ITEM, payload: id})
    }
    
    return (
        <GlobalContext.Provider value={[items, increase, decrease, state]}>
            <div>
                <CheckOut/>
            </div>
        </GlobalContext.Provider>
)
}