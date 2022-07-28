import {GlobalContext} from "../../App"
import {useContext,useEffect,useState} from "react"
import styles from "./ItemCounter.module.css"
import {BsPlusLg} from "react-icons/bs"
import { FaMinus } from "react-icons/fa"

export const ItemCounter = (props) => {
    const {id, price, counterOn} = props
    const [items, increase, decrease,state, itemsInCart, setItemsInCart,sumTotal] = useContext(GlobalContext)
    const {cart} = state
    const [qtyPrint, setQtyPrint] = useState(0) 
    const [total, setTotal] = useState(0)
    let style

    counterOn ? style = styles.counterOn: style = styles.counterOff;
    useEffect(()=>{
        setQtyPrint(cart.filter(item => item._id === id).map(item => item.qty))
    },[state, increase, cart, id])
    useEffect(()=>{
        setTotal(price * qtyPrint)
    },[price, qtyPrint])
    return(
        <div className={style}>
            <div className={styles.totalCounter}>
                <h1>Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                <div className={styles.counterContainer}>
                    <button onClick={()=> `${increase(id)}`}><BsPlusLg/></button>
                    <p>{qtyPrint}</p>
                    <button onClick={()=> decrease(id)}><FaMinus/></button>
                </div>
            </div>
        </div>
    )
}