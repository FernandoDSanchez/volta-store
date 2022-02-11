import {useContext} from 'react';
import {CartDetail} from "../CartDetail/CartDetail";
import {GlobalContext} from "../../App";
import {useState,useEffect} from "react";
import styles from "./CartList.module.css"
export const CartList = ({counterOn}) => {
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    
    useEffect(() => {
        setCartList({cart: state.cart.map(item => items.filter(product => product.id === item.id))})
        setItemsInCart(state.cart.length)
    },[state])

        return (
                    <div>
                        <div className={styles.cartList}>
                            {cartList.cart.map(cartItem => cartItem.map(({id, name, description,price, img, category }) =>
                            <CartDetail name={name} id={id}
                            price={price} category={category}img={img} key={id} counterOn={counterOn}/>
                            ))}
                        </div>
                        <div className={styles.totalSum}><h1>Suma Total: ${sumTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1></div>
                    </div>
                )
}