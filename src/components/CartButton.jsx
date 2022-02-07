import {GlobalContext} from "../App";
import {useContext,useEffect,useState} from 'react';

export const CartButton = () => {
    const [items,increase,decrease,state,itemsInCart, setItemsInCart] = useContext(GlobalContext)
    const [itemsTotal, setItemsTotal] = useState()
    useEffect(() => {
        setItemsTotal(state.cart.length)
    }, [state]);
    return (
        <div>
            <img src="" alt="" />
            <p>{itemsTotal}</p>
            <p>Cart button</p>
        </div>
    )
}