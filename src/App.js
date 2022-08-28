import React, { useState, useEffect,useReducer, createContext } from "react";
import { CheckOut } from "./pages/CheckOut/CheckOut";
import {cartReducer,cartInitializer} from './reducers/cartReducer'
import {TYPES} from "./actions/cartActions"
import { firebaseMethods } from "./utils/firebase";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Category } from "./pages/Category/Category";
import { Item } from "./pages/Item/Item";
export const GlobalContext = createContext()

export function App()  { 
    const [items, setItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState();
    let [sumTotal, setSumTotal] = useState(0)
    const [state, dispatch] = useReducer(cartReducer, cartInitializer)

    
    useEffect(() => {
        const connection = new firebaseMethods()
        connection.getProducts().then((data) => {
            setItems(data)})
        setItemsInCart(state.cart.length)
    },[state])
    useEffect(() => {
        setSumTotal(items.map((item) => item.price *(state.cart.filter(e => e._id === item._id).map(i=>i.qty))).reduce((prev, curr) => prev + curr, 0))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])
    const increase = (id) => {
        dispatch({type:TYPES.ADD_ITEM, payload: id})
    }
    const decrease = (id) => {
        dispatch({type:TYPES.REMOVE_ITEM, payload: id})
    }
    return (
            <BrowserRouter>
                <GlobalContext.Provider value={[items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal]}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/CheckOut" element={<CheckOut cartEmpty={sumTotal} />}/>
                        <Route path="/Category/:category"  element={<Category/>}/>
                        <Route path="/Item/:itemId" element={<Item/>}/>
                    </Routes>
                </GlobalContext.Provider>
            </BrowserRouter>
    )
}