import {useContext} from 'react';
import {ProductDetail} from "../ProductDetail/ProductDetail";
import {GlobalContext} from "../../App";
import {useState,useEffect} from "react";

export const CartList = () => {
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    
    useEffect(() => {
        setCartList({cart: state.cart.map(item => items.filter(product => product.id === item.id))})
        setItemsInCart(state.cart.length)
    },[state])

        return (
                    <div>
                        <div>
                            {cartList.cart.map(cartItem => cartItem.map(({id, name, description,price, img, category }) =>
                            <ProductDetail name={name} id={id} description={description}
                            price={price} category={category}img={img} key={id}/>
                            ))}
                        </div>
                        <div><h1>Subtotal{sumTotal}</h1></div>
                    </div>
                )
}