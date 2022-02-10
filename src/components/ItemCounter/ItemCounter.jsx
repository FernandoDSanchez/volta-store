import {GlobalContext} from "../../App"
import {useContext,useEffect,useState} from "react"
import styles from "./ItemCounter.module.css"

export const ItemCounter = (props) => {
    const {id, price, counterOn} = props
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext)
    const {cart} = state
    const [qtyPrint, setQtyPrint] = useState(0) 
    const [total, setTotal] = useState(0)
    let style

    counterOn ? style = styles.counterOn: style = styles.counterOff;
    useEffect(()=>{
        setQtyPrint(cart.filter(item => item.id === id).map(item => item.qty))
    },[state,increase])
    useEffect(()=>{
        setTotal(price * qtyPrint)
    },[qtyPrint])
    return(
        <div className={style}>
            <button onClick={()=> `${increase(id)}`}>mas</button>
            <p>{qtyPrint}</p>
            <button onClick={()=> decrease(id)}>menos</button>
            <h1>Total: {total}</h1>
            
        </div>
    )
}