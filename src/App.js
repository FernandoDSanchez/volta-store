import React, { useState, useEffect,useReducer, createContext } from "react";
import { CheckOut } from "./pages/Checkout";
import {get} from './utils/get'
import {cartReducer,cartInitializer} from './reducers/cartReducer'
import {TYPES} from "./actions/cartActions"

import {
    BrowserRouter,
    Routes,
    Route,Link
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Item } from "./pages/Item";
import { Menu } from "./components/Menu";
export const GlobalContext = createContext()

export function App()  { 
    const [items, setItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState();
    let [sumTotal, setSumTotal] = useState([])
    const [state, dispatch] = useReducer(cartReducer, cartInitializer)
    useEffect(() => {
        get().then((data) => setItems(data))
        setItemsInCart(state.cart.length)
    },[state])

    const increase = (id) => {
        dispatch({type:TYPES.ADD_ITEM, payload: id})
    }
    const decrease = (id) => {
        dispatch({type:TYPES.REMOVE_ITEM, payload: id})
    }
    
    return (

            <BrowserRouter>
                <div>
                    <Menu/>
                </div>
                <GlobalContext.Provider value={[items, increase, decrease, state, itemsInCart, setItemsInCart, sumTotal,setSumTotal]}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/CheckOut" element={<CheckOut/>}/>
                        <Route path="/Category/:category"  element={<Category/>}/>
                        <Route path="/Item/:itemId" element={<Item/>}/>
                    </Routes>
                </GlobalContext.Provider>
            </BrowserRouter>
    )
}