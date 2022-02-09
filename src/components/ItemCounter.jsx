import {GlobalContext} from "../App"
import {useContext,useEffect,useState} from "react"

export const ItemCounter = (props) => {
    const {id, price} = props
    const [items, increase, decrease,state, itemsInCart, setItemsInCart] = useContext(GlobalContext)
    const {cart} = state
    const [qtyPrint, setQtyPrint] = useState(0) 
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        setQtyPrint(cart.filter(item => item.id === id).map(item => item.qty))
    },[state,increase])
    useEffect(()=>{
        setTotal(price * qtyPrint)
    },[qtyPrint])
    return(
        <div>
            <button onClick={()=> `${increase(id)}`}>mas</button>
            <p>{qtyPrint}</p>
            <button onClick={()=> decrease(id)}>menos</button>
            <h1>Total: {total}</h1>
            
        </div>
    )
}