import {GlobalContext} from "../../../App";
import {useContext,useEffect,useState} from 'react';
import styles from "./CartButton.module.css"
import {Icon} from "../../../assets/img/Icon"
export const CartButton = (props) => {
    let {navStyle} = props
    const [, , ,state, ,] = useContext(GlobalContext)
    const [itemsTotal, setItemsTotal] = useState()
    let style
    
    navStyle?style = styles.buttonDark: style = styles.buttonLight;
    
    useEffect(() => {
        setItemsTotal(state.cart.length)
    }, [state]);
    return (
        <button className={style}>
                    <Icon className={styles.cartIcon} navStyle={navStyle}/>
                <div className={styles.cartItems}>{itemsTotal}</div>
        </button>
    )
}