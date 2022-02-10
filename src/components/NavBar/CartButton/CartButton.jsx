import {GlobalContext} from "../../../App";
import {useContext,useEffect,useState} from 'react';
import styles from "./CartButton.module.css"
import {Icon} from "../../../assets/img/Icon"
export const CartButton = (props) => {
    let {navStyle} = props
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext)
    const [itemsTotal, setItemsTotal] = useState()
    let style
    
    
    navStyle?style = styles.buttonDark: style = styles.buttonLight
    
    
    useEffect(() => {
        setItemsTotal(state.cart.length)
    }, [state]);
    return (
            <button className={style}>
                <div> 
                    <div className={styles.cartIconContainer}>
                        <Icon className={styles.cartIcon} navStyle={navStyle}/>
                        <p className={styles.cartItems}>{itemsTotal}</p>
                    </div>
                </div>
                <p className={styles.myCart}>Mi carrito</p>
            </button>
    )
}