import {useContext} from 'react';
import {CartDetail} from "../CartDetail/CartDetail";
import {GlobalContext} from "../../App";
import {useState,useEffect} from "react";
import styles from "./CartList.module.css"
export const CartList = ({counterOn}) => {
    const [items, , ,state, , setItemsInCart,sumTotal] = useContext(GlobalContext)
    const [cartList, setCartList] = useState({cart:[]})
    
    useEffect(() => {
        setCartList({cart: state.cart.map(item => items.filter(product => product._id === item._id))});
        setItemsInCart(state.cart.length);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])

        return (
                    <div>
                        <div className={styles.cartList}>
                            {cartList.cart.map(cartItem => cartItem.map(({_id, name, description,price, image, category }) =>
                            <CartDetail name={name} id={_id}
                            price={price} category={category}img={image} key={_id} counterOn={counterOn}/>
                            ))}
                        </div>
                        <div className={styles.totalSum}><h1>Suma Total: ${sumTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1></div>
                    </div>
                )
}